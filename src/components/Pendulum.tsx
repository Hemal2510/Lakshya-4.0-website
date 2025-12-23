"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const PendulumTextReveal: React.FC = () => {
    const pendulumRef = useRef<HTMLDivElement>(null);
    const stringRef = useRef<HTMLDivElement>(null);
    const [activeLetters, setActiveLetters] = useState<Set<number>>(new Set());
    const text = "REVEALING SOON";
    const letters = text.split("");

    useEffect(() => {
        const pendulum = pendulumRef.current;
        const string = stringRef.current;
        if (!pendulum || !string) return;

        let animationId: number;
        let angle = -Math.PI / 3;
        let angularVelocity = 0;
        const gravity = 0.5;
        const damping = 0.998;
        const length = 150; // shorter so it fits better on small screens
        let lastTime: number | null = null;

        const animate = (timestamp: number) => {
            if (!lastTime) lastTime = timestamp;
            const deltaTime = Math.min((timestamp - lastTime) / 16, 2);
            lastTime = timestamp;

            const angularAcceleration = (-gravity / length) * Math.sin(angle);
            angularVelocity += angularAcceleration * deltaTime;
            angularVelocity *= damping;
            angle += angularVelocity * deltaTime;

            string.style.transform = `rotate(${(angle * 180) / -Math.PI}deg)`;

            const normalizedX = (Math.sin(angle) + 1) / 2;
            const ballCenter = normalizedX * letters.length;
            const ballRadius = 1.45;

            const newActiveLetters = new Set<number>();
            for (let i = 0; i < letters.length; i++) {
                const distance = Math.abs(i - ballCenter);
                if (distance <= ballRadius) newActiveLetters.add(i);
            }

            setActiveLetters(newActiveLetters);
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [letters.length]);

    return (
        <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 overflow-hidden">
            <div className="relative w-full max-w-2xl h-[22rem] md:h-[28rem] flex items-start justify-center">
                {/* STRING */}
                <div
                    ref={stringRef}
                    className="absolute bg-white/60"
                    style={{
                        top: "-110px",
                        width: "2px",
                        height: "280px",
                        transformOrigin: "top center",
                        backdropFilter: "brightness(2)",
                    }}
                >
                    {/* GLASS BALL */}
                    <div
                        ref={pendulumRef}
                        className="absolute rounded-full overflow-hidden"
                        style={{
                            top: "340px",
                            left: "50%",
                            width: "120px",
                            height: "120px",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "50%",
                            pointerEvents: "none",
                            background: `
                radial-gradient(circle at 30% 28%, rgba(255,255,255,0.35), rgba(255,255,255,0.05) 35%, transparent 70%),
                radial-gradient(circle at 80% 80%, rgba(120,200,255,0.22), transparent 60%)
              `,
                            backdropFilter: "blur(22px) saturate(190%) contrast(1.2)",
                            WebkitBackdropFilter: "blur(22px) saturate(190%) contrast(1.2)",
                            border: "2px solid rgba(255,255,255,0.3)",
                            boxShadow: `
                inset 0 0 22px rgba(255,255,255,0.25),
                inset 0 -18px 25px rgba(80,140,255,0.18),
                0 0 40px rgba(110,170,255,0.12)
              `,
                        }}
                    >
                        <div
                            className="absolute inset-0"
                            style={{
                                mixBlendMode: "overlay",
                                background: `
                  radial-gradient(circle at 45% 40%, rgba(255,255,255,0.55), transparent 55%),
                  radial-gradient(circle at 70% 80%, rgba(0,120,255,0.25), transparent 65%)
                `,
                                filter: "blur(26px)",
                                opacity: 0.8,
                            }}
                        />
                    </div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-8 md:bottom-10 w-full flex justify-center items-center space-x-1.5 md:space-x-3 px-2 md:px-4">
                    {letters.map((letter, index) => (
                        <div
                            key={index}
                            className={`relative transition-all duration-75 ease-out font-black ${
                                activeLetters.has(index)
                                    ? "text-4xl md:text-6xl text-cyan-200 scale-[1.15]"
                                    : "text-2xl md:text-4xl text-white/80 scale-100"
                            }`}
                            style={{
                                textShadow: activeLetters.has(index)
                                    ? "0 0 22px rgba(0,255,255,1), 0 0 45px rgba(0,255,255,0.8)"
                                    : "0 0 5px rgba(255,255,255,0.05)",
                            }}
                        >
                            {letter}

                            {activeLetters.has(index) && (
                                <div
                                    className="absolute inset-0 -z-10 rounded-full bg-cyan-400/40 blur-xl"
                                    style={{ width: "180%", height: "180%", top: "-40%", left: "-40%" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-10 mb-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 w-full">
                <Link href="/legacy">
                    <button className="w-52 sm:w-56 px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-white text-black shadow-lg hover:scale-105 transition-all duration-300">
                        EXPLORE
                    </button>
                </Link>

                <Link href="/home">
                    <button className="w-52 sm:w-56 px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border border-white/30 text-white/70 bg-white/5 backdrop-blur-md shadow-inner hover:text-white hover:border-white/60 hover:scale-105 transition-all duration-300">
                        KNOW ABOUT US
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PendulumTextReveal;
