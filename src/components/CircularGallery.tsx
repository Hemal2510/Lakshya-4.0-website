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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    maxZoom = 1.6;
    imageAspect: number = 1; // 👈 ADD THIS

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
                    p.z += (sin(p.x * 4.0 + uTime) + cos(p.y * 2.0 + uTime)) * 0.15;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
                }
            `,
            fragment: `
                precision highp float;
                uniform sampler2D tMap;
                uniform vec2 uPlaneSizes;
                uniform vec2 uImageSizes;
                uniform float uBorderRadius;
                varying vec2 vUv;

                float roundedBoxSDF(vec2 p, vec2 b, float r) {
                    vec2 d = abs(p) - b;
                    return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
                }

                void main() {
                 vec2 planeRatio = vec2(uPlaneSizes.x / uPlaneSizes.y, 1.0);
                    vec2 imageRatio = vec2(uImageSizes.x / uImageSizes.y, 1.0);

                    float r = planeRatio.x / imageRatio.x;

                    vec2 ratio;
                    if (r > 1.0) {
                        // plane is wider → scale by height
                        ratio = vec2(1.0 / r, 1.0);
                    } else {
                        // plane is taller → scale by width
                        ratio = vec2(1.0, r);
                    }

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
                uBorderRadius: { value: borderRadius },
                uTime: { value: Math.random() * 100 },
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
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  this.program.uniforms.uImageSizes.value = [iw, ih];

  // store image aspect
  this.imageAspect = iw / ih;
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

        // ---- RELATIVE / PERCENTAGE-BASED FORMULATION ----

        const widthRatio = isMobile ? 0.72 : 0.42;
        const aspectRatio = this.imageAspect || 1.35;


        const heightLimitRatio = isMobile ? 0.75 : 0.65;

        let baseW = viewport.width * widthRatio;
        let baseH = baseW / aspectRatio;
        // let baseH = baseW * aspectRatio;

        const maxH = viewport.height * heightLimitRatio;
        if (baseH > maxH) {
            baseH = maxH;
            baseW = baseH / aspectRatio;
        }

        this.baseW = baseW;
        this.baseH = baseH;
        this.maxZoom = isMobile ? 1.35 : 1.6;

        const maxWidth = this.baseW * this.maxZoom;
        const gap = 0.8;
        this.width = maxWidth + gap;
        this.widthTotal = this.width * this.total;
        this.x = this.width * this.index;

        this.plane.scale.set(this.baseW, this.baseH, 1);
        this.program.uniforms.uPlaneSizes.value = [this.baseW, this.baseH];

        if (this.titleMesh) {
            const th = this.baseH * 0.18;
            this.titleMesh.scale.set(th * 3, th, 1);
            this.titleMesh.position.y = -this.baseH * 0.6 - th * 0.5;
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
        const maxDist = viewport.width * 0.3;
        const t = Math.max(0, 1 - dist / maxDist);
        const s = 1 + (this.maxZoom - 1) * t;

        this.plane.scale.x = this.baseW * s;
        this.plane.scale.y = this.baseH * s;

        this.program.uniforms.uPlaneSizes.value = [
            this.plane.scale.x,
            this.plane.scale.y,
        ];

        this.program.uniforms.uTime.value += 0.04;
    }
}

export default function HybridGallery({ items, bend = 3, textColor = "#fff" }: any) {
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
        const updateCameraZ = () => {
            camera.position.z = window.innerWidth < 768 ? 28 : 20;
        };
        updateCameraZ();

        const scene = new Transform();
        const geometry = new Plane(gl, { widthSegments: 50, heightSegments: 50 });

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

            updateCameraZ();
            medias.forEach(m => m.onResize({ viewport, screen }));
        };

        const data =
            items ??
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
                    textColor,
                    borderRadius: 0.05,
                    font: "bold 28px sans-serif",
                })
        );

        resize();
        window.addEventListener("resize", resize);

        let scroll = { current: 0, target: 0 };
        const isMobile = window.innerWidth < 768;
        const baseSpeed = isMobile ? 0.16 : 0.07;

        const ease = 0.05;

        const loop = () => {
            let speedMult = 1;
            if (medias[0]) {
                const w = medias[0].width;
                const mod = ((scroll.target % w) + w) % w;
                const dist = Math.min(mod, w - mod);
                const centerT = 1 - Math.min(dist / (w * 0.3), 1);
                speedMult = 1 - 0.85 * centerT;
            }

            scroll.target += baseSpeed * speedMult;
            scroll.current = lerp(scroll.current, scroll.target, ease);

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

    return <div ref={ref} className="w-full h-full" />;
}
