import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from "ogl";
import { useEffect, useRef } from "react";

function lerp(a: number, b: number, t: number) {
    return a + (b - a) * t;
}

function createTextTexture(gl: any, text: string, font: string, color: string) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    ctx.font = font;

    const metrics = ctx.measureText(text);
    const fontSize = parseInt(font.match(/\d+/)![0], 10);

    canvas.width = Math.ceil(metrics.width) + 24;
    canvas.height = Math.ceil(fontSize * 1.4) + 24;

    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);

    const texture = new Texture(gl, { generateMipmaps: false });
    texture.image = canvas;
    return { texture };
}

class Media {
    plane: Mesh;
    program: Program;
    titleMesh?: Mesh;

    index: number;
    total: number;

    x = 0;
    width = 0;
    widthTotal = 0;

    baseW = 0;
    baseH = 0;
    maxZoom = 1.4;
    imageAspect = 1;

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
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += (sin(p.x * 4.0 + uTime) + cos(p.y * 2.0 + uTime)) * 0.12;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
            fragment: `
        precision highp float;

        uniform sampler2D tMap;
        uniform vec2 uPlaneSizes;
        uniform vec2 uImageSizes;
        uniform float uBorderRadius;
        uniform float uContain; // 0 = cover (desktop), 1 = contain (mobile)

        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 plane = uPlaneSizes;
          vec2 image = uImageSizes;

          float rs = plane.x / plane.y;
          float ri = image.x / image.y;

          // COVER (desktop)
          vec2 uvCover = vUv;
          if (rs > ri) {
            uvCover.y = uvCover.y * ri / rs + 0.5 * (1.0 - ri / rs);
          } else {
            uvCover.x = uvCover.x * rs / ri + 0.5 * (1.0 - rs / ri);
          }

          // CONTAIN (mobile)
          float r = rs / ri;
          vec2 ratio = r > 1.0 ? vec2(1.0 / r, 1.0) : vec2(1.0, r);
          vec2 uvContain = vUv * ratio + (1.0 - ratio) * 0.5;

          vec2 uv = mix(uvCover, uvContain, uContain);

          vec4 color = texture2D(tMap, uv);

          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-0.002, 0.002, d);

          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
            uniforms: {
                tMap: { value: texture },
                uPlaneSizes: { value: [0, 0] },
                uImageSizes: { value: [1, 1] },
                uBorderRadius: { value: borderRadius },
                uTime: { value: Math.random() * 100 },
                uContain: { value: 0 },
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
            this.imageAspect = img.naturalWidth / img.naturalHeight;
            this.program.uniforms.uImageSizes.value = [
                img.naturalWidth,
                img.naturalHeight,
            ];
        };

        const { texture: textTex } = createTextTexture(gl, text, font, textColor);
        const textProg = new Program(gl, {
            vertex: this.program.vertex,
            fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 c = texture2D(tMap, vUv);
          if (c.a < 0.1) discard;
          gl_FragColor = c;
        }
      `,
            uniforms: { tMap: { value: textTex } },
            transparent: true,
        });

        this.titleMesh = new Mesh(gl, {
            geometry: new Plane(gl),
            program: textProg,
        });
        this.titleMesh.setParent(this.plane);

        this.onResize({ viewport, screen });
    }

    onResize({ viewport, screen }: any) {
        const isMobile = screen.width < 768;

        if (!isMobile) {
            // ===== LAPTOP / DESKTOP (VERSION 1) =====
            const aspect = 1.4;
            const widthRatio = 0.35;

            this.baseW = viewport.width * widthRatio;
            this.baseH = this.baseW / aspect;

            const maxH = viewport.height * 0.6;
            if (this.baseH > maxH) {
                this.baseH = maxH;
                this.baseW = this.baseH * aspect;
            }

            this.maxZoom = 1.4;
            this.program.uniforms.uContain.value = 0.0;
        } else {
            // ===== MOBILE (VERSION 2) =====
            const widthRatio = 0.8;

            this.baseW = viewport.width * widthRatio;
            this.baseH = this.baseW / this.imageAspect;

            const maxH = viewport.height * 0.75;
            if (this.baseH > maxH) {
                this.baseH = maxH;
                this.baseW = this.baseH * this.imageAspect;
            }

            this.maxZoom = 1.2;
            this.program.uniforms.uContain.value = 1.0;
        }

        const gap = isMobile ? 0.4 : 0.8;
        this.width = this.baseW * this.maxZoom + gap;
        this.widthTotal = this.width * this.total;
        this.x = this.width * this.index;

        this.plane.scale.set(this.baseW, this.baseH, 1);
        this.program.uniforms.uPlaneSizes.value = [this.baseW, this.baseH];

        if (this.titleMesh) {
            const th = this.baseH * (isMobile ? 0.18 : 0.12);
            this.titleMesh.scale.set(th * 3.5, th, 1);
            this.titleMesh.position.y = -this.baseH * 0.55 - th;
        }
    }

    update(scroll: number, viewport: any, bend: number) {
        const half = this.widthTotal / 2;
        let currX = (this.x - scroll) % this.widthTotal;
        if (currX < -half) currX += this.widthTotal;
        if (currX > half) currX -= this.widthTotal;

        this.plane.position.x = currX;

        const H = viewport.width / 2;
        const B = Math.abs(bend);
        const R = (H * H + B * B) / (2 * B);
        const effX = Math.min(Math.abs(currX), H);
        const arc = R - Math.sqrt(R * R - effX * effX);

        this.plane.position.y = bend > 0 ? -arc : arc;
        this.plane.rotation.z = -Math.sign(currX) * Math.asin(effX / R);

        const dist = Math.abs(currX);
        const maxDist = viewport.width * 0.35;
        const t = Math.max(0, 1 - dist / maxDist);
        const s = 1 + (this.maxZoom - 1) * t;

        this.plane.scale.set(this.baseW * s, this.baseH * s, 1);
        this.program.uniforms.uPlaneSizes.value = [
            this.plane.scale.x,
            this.plane.scale.y,
        ];

        this.program.uniforms.uTime.value += 0.03;
    }
}

export default function HybridGallery({
                                          items,
                                          bend = 2.8,
                                          textColor = "#fff",
                                      }: any) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const renderer = new Renderer({
            alpha: true,
            antialias: true,
            dpr: Math.min(window.devicePixelRatio || 1, 2),
        });

        const gl = renderer.gl;
        ref.current.appendChild(gl.canvas);

        const camera = new Camera(gl);
        camera.position.z = window.innerWidth < 768 ? 28 : 20;

        const scene = new Transform();
        const geometry = new Plane(gl, { widthSegments: 64, heightSegments: 64 });

        let viewport = { width: 0, height: 0 };
        let screen = { width: 0, height: 0 };
        let medias: Media[] = [];

        const resize = () => {
            screen = {
                width: ref.current!.clientWidth,
                height: ref.current!.clientHeight,
            };

            renderer.setSize(screen.width, screen.height);
            camera.perspective({ aspect: screen.width / screen.height });

            const fov = (camera.fov * Math.PI) / 180;
            const h = 2 * Math.tan(fov / 2) * camera.position.z;
            viewport = { width: h * camera.aspect, height: h };

            medias.forEach(m => m.onResize({ viewport, screen }));
        };

        const data =
            items ?? [
                { image: "https://picsum.photos/seed/1/1200/800", text: "ONE" },
                { image: "https://picsum.photos/seed/2/1200/800", text: "TWO" },
                { image: "https://picsum.photos/seed/3/1200/800", text: "THREE" },
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
                    textColor,
                    borderRadius: 0.05,
                    font: "900 28px Inter, sans-serif",
                })
        );

        resize();
        window.addEventListener("resize", resize);

        let scroll = { current: 0, target: 0 };
        const speed = window.innerWidth < 768 ? 0.05: 0.05;

        const loop = () => {
            scroll.target += speed;
            scroll.current = lerp(scroll.current, scroll.target, 0.05);

            medias.forEach(m => m.update(scroll.current, viewport, bend));
            renderer.render({ scene, camera });
            requestAnimationFrame(loop);
        };

        const raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            gl.canvas.remove();
        };
    }, [items, bend, textColor]);

    return <div ref={ref} className="w-full h-full min-h-[500px]" />;
}
