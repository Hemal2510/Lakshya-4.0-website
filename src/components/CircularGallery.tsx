import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";

function lerp(p1: number, p2: number, t: number) {
    return p1 + (p2 - p1) * t;
}

function createTextTexture(gl: any, text: string, font: string, color: string) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d")!;
    context.font = font;
    const metrics = context.measureText(text);
    const fontSize = parseInt(font.match(/\d+/)![0], 10);

    canvas.width = Math.ceil(metrics.width) + 20;
    canvas.height = Math.ceil(fontSize * 1.2) + 20;

    context.font = font;
    context.fillStyle = color;
    context.textBaseline = "middle";
    context.textAlign = "center";
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new Texture(gl, { generateMipmaps: false });
    texture.image = canvas;
    return { texture, width: canvas.width, height: canvas.height };
}

class Media {
    plane: Mesh;
    program: Program;
    titleMesh?: Mesh;
    index: number;
    total: number;

    x = 0;
    widthTotal = 0;
    width = 0;   // spacing between cards (reserved slot width)
    baseW = 0;   // unzoomed width
    baseH = 0;   // unzoomed height;
    maxZoom = 1.6; // 1 + 0.6, matches s = 1 + 0.6*t

    constructor({
                    gl,
                    geometry,
                    scene,
                    image,
                    text,
                    index,
                    total,
                    viewport,
                    screen,
                    bend,
                    textColor,
                    borderRadius,
                    font,
                }: any) {
        this.index = index;
        this.total = total;

        const texture = new Texture(gl, { generateMipmaps: true });
        this.program = new Program(gl, {
            vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vUv * ratio + (1.0 - ratio) * 0.5;
          vec4 color = texture2D(tMap, uv);
          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-0.002, 0.002, d);
          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [0, 0] },
                uSpeed: { value: 0 },
                uTime: { value: Math.random() * 100 },
                uBorderRadius: { value: borderRadius },
            },
            transparent: true,
        });

        this.plane = new Mesh(gl, { geometry, program: this.program });
        this.plane.setParent(scene);

        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = image;
        img.onload = () => {
            texture.image = img;
            this.program.uniforms.uImageSizes.value = [
                img.naturalWidth,
                img.naturalHeight,
            ];
        };

        const { texture: tTex } = createTextTexture(gl, text, font, textColor);
        const tGeo = new Plane(gl);
        const tProg = new Program(gl, {
            vertex: this.program.vertex,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
            uniforms: { tMap: { value: tTex } },
            transparent: true,
        });
        this.titleMesh = new Mesh(gl, { geometry: tGeo, program: tProg });
        this.titleMesh.setParent(this.plane);

        this.onResize({ viewport, screen });
    }

    onResize({ viewport, screen }: any) {
        const isMobile = screen.width < 768;
        const scaleBase = screen.height / 1500;

        // restore your old tall height (900 factor)
        const baseH = (viewport.height * (900 * scaleBase)) / screen.height;
        const baseW = (viewport.width * (700 * scaleBase)) / screen.width;

        this.baseW = isMobile ? baseW * 1.4 : baseW;
        this.baseH = baseH;

        // compute spacing from *max zoomed width* so cards never touch
        const maxWidth = this.baseW * this.maxZoom;
        const gap = 0.8; // extra space between fully zoomed cards
        this.width = maxWidth + gap;
        this.widthTotal = this.width * this.total;
        this.x = this.width * this.index;

        this.plane.scale.set(this.baseW, this.baseH, 1);
        this.program.uniforms.uPlaneSizes.value = [this.baseW, this.baseH];

        if (this.titleMesh) {
            const tHeight = this.baseH * 0.18;
            this.titleMesh.scale.set(tHeight * 3, tHeight, 1);
            this.titleMesh.position.y = -this.baseH * 0.6 - tHeight * 0.5;
        }
    }

    update(scroll: number, viewport: any, bend: number) {
        const halfTotal = this.widthTotal / 2;
        let currX = (this.x - scroll) % this.widthTotal;
        if (currX < -halfTotal) currX += this.widthTotal;
        if (currX > halfTotal) currX -= this.widthTotal;

        this.plane.position.x = currX;

        const H = viewport.width / 2;
        const B_abs = Math.abs(bend);
        const R = (H * H + B_abs * B_abs) / (2 * B_abs);
        const effectiveX = Math.min(Math.abs(currX), H);
        const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

        this.plane.position.y = bend > 0 ? -arc : arc;
        this.plane.rotation.z = -Math.sign(currX) * Math.asin(effectiveX / R);

        const dist = Math.abs(currX);
        const maxDist = viewport.width * 0.3;
        const t = Math.max(0, 1 - dist / maxDist);
        const s = 1 + 0.6 * t; // same zoom as before, max 1.6

        this.plane.scale.x = this.baseW * s;
        this.plane.scale.y = this.baseH * s;

        this.program.uniforms.uPlaneSizes.value = [
            this.plane.scale.x,
            this.plane.scale.y,
        ];
        this.program.uniforms.uTime.value += 0.04;
    }
}

export default function HybridGallery({
                                          items,
                                          bend = 3,
                                          textColor = "#ffffff",
                                      }: any) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2),
        });
        const gl = renderer.gl;
        container.appendChild(gl.canvas);

        const camera = new Camera(gl);
        camera.position.z = 20;
        const scene = new Transform();
        const geometry = new Plane(gl, {
            widthSegments: 50,
            heightSegments: 50,
        });

        let viewport = { width: 0, height: 0 };
        let screen = { width: 0, height: 0 };
        let medias: Media[] = [];

        const onResize = () => {
            screen = {
                width: container.clientWidth,
                height: container.clientHeight,
            };
            renderer.setSize(screen.width, screen.height);
            camera.perspective({ aspect: screen.width / screen.height });
            const fov = (camera.fov * Math.PI) / 180;
            const h = 2 * Math.tan(fov / 2) * camera.position.z;
            viewport = { width: h * camera.aspect, height: h };
            medias.forEach((m) => m.onResize({ viewport, screen }));
        };

        const data =
            items ||
            [
                { image: "https://picsum.photos/seed/1/800/600", text: "One" },
                { image: "https://picsum.photos/seed/2/800/600", text: "Two" },
                { image: "https://picsum.photos/seed/3/800/600", text: "Three" },
            ];

        medias = data.map(
            (d: any, i: number) =>
                new Media({
                    gl,
                    geometry,
                    scene,
                    image: d.image,
                    text: d.text,
                    index: i,
                    total: data.length,
                    viewport,
                    screen,
                    bend,
                    textColor,
                    borderRadius: 0.05,
                    font: "bold 28px sans-serif",
                })
        );

        onResize();
        window.addEventListener("resize", onResize);

        let scroll = { target: 0, current: 0 };
        const baseSpeed = 0.05;
        const ease = 0.05;

        const update = () => {
            let speedMult = 1.0;
            if (medias[0]) {
                const w = medias[0].width;
                const mod = ((scroll.target % w) + w) % w;
                const dist = Math.min(mod, w - mod);
                const centerT = 1 - Math.min(dist / (w * 0.3), 1);
                speedMult = 1 - 0.85 * centerT;
            }

            scroll.target += baseSpeed * speedMult;
            scroll.current = lerp(scroll.current, scroll.target, ease);

            medias.forEach((m) => m.update(scroll.current, viewport, bend));
            renderer.render({ scene, camera });
            requestAnimationFrame(update);
        };

        const raf = requestAnimationFrame(update);
        return () => {
            window.removeEventListener("resize", onResize);
            cancelAnimationFrame(raf);
            gl.canvas.remove();
        };
    }, [items, bend, textColor]);

    return <div ref={containerRef} className="w-full h-full" />;
}
