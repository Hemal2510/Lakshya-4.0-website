"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from "lottie-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function SponsorGrid() {
    const sectionRef = useRef(null);
    const animationRef = useRef(null);
    const [animationData, setAnimationData] = useState(null);

    // Load Lottie data if needed
    useEffect(() => {
        // Replace with your actual lottie path or import
        fetch("/path-to-your-lottie.json")
            .then(res => res.json())
            .then(data => setAnimationData(data));
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=200%",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.from(".main-hero-card", {
                scale: 3,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            })
                .from(".orbit-card", {
                    scale: 0,
                    opacity: 0,
                    x: 0,
                    y: 0,
                    stagger: { each: 0.05, from: "center" },
                    ease: "back.out(1.4)"
                }, "-=0.6");

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
            <div className="relative w-[1200px] h-[750px] flex items-center justify-center">

                {/* CENTER: TITLE SPONSOR */}
                <div className="main-hero-card w-72 h-80 z-50 flex flex-col items-center">
                    <div className="inner-card border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(0,242,255,0.2)] bg-black/80 w-full h-full">
                        <img src="/images/redbull.png" className="w-full h-full object-contain p-8" alt="Title" />
                    </div>
                    <span className="unit-label text-cyan-400 font-bold block text-center mt-3 tracking-widest uppercase">
                        TITLE SPONSOR
                    </span>
                </div>

                {/* Lottie container - Positioned behind or near title */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-[60%] aspect-[4/3] rounded-3xl overflow-hidden opacity-50">
                        {animationData && (
                            <Lottie
                                lottieRef={animationRef}
                                animationData={animationData}
                                autoplay={true}
                                loop={true}
                                style={{ width: "100%", height: "100%" }}
                            />
                        )}
                    </div>
                </div>

                {/* THE 11 PARTNERS */}
                {/* Top Orbit */}
                <div className="orbit-card absolute top-[5%] left-[10%] w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s1.png" alt="s1" /></div></div>
                <div className="orbit-card absolute -top-[5%] left-1/2 -translate-x-1/2 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s2.png" alt="s2" /></div></div>
                <div className="orbit-card absolute top-[5%] right-[10%] w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s3.png" alt="s3" /></div></div>

                {/* Side Orbit */}
                <div className="orbit-card absolute top-1/3 left-0 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s4.png" alt="s4" /></div></div>
                <div className="orbit-card absolute top-1/3 right-0 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s5.png" alt="s5" /></div></div>
                <div className="orbit-card absolute bottom-1/3 left-0 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s6.png" alt="s6" /></div></div>
                <div className="orbit-card absolute bottom-1/3 right-0 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s7.png" alt="s7" /></div></div>

                {/* Bottom Orbit */}
                <div className="orbit-card absolute bottom-[5%] left-[10%] w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s8.png" alt="s8" /></div></div>
                <div className="orbit-card absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s9.png" alt="s9" /></div></div>
                <div className="orbit-card absolute bottom-[5%] right-[10%] w-32 h-40 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s10.png" alt="s10" /></div></div>
                <div className="orbit-card absolute top-1/2 left-[20%] -translate-y-1/2 w-32 h-40 z-10 border border-white/10 bg-white/5"><div className="inner-card"><img src="/s11.png" alt="s11" /></div></div>

            </div> {/* Closing relative container */}
        </section>
    );
}