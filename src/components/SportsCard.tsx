"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SponsorGrid() {
    const sectionRef = useRef(null);

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

            // 1. Title Sponsor Card drops in from 3D space
            tl.from(".main-hero-card", {
                scale: 3,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            })
                // 2. The 11 Orbiting Partners fly out from behind the Title Sponsor
                .from(".orbit-card", {
                    scale: 0,
                    opacity: 0,
                    x: 0, // They start at the center
                    y: 0,
                    stagger: { each: 0.05, from: "center" },
                    ease: "back.out(1.4)"
                }, "-=0.6");

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">

<<<<<<< HEAD
            <div className="relative w-[1200px] h-[750px] flex items-center justify-center">

                {/* CENTER: TITLE SPONSOR (Card #1) */}
                <div className="main-hero-card w-72 h-80 z-50">
                    <div className="inner-card border-2 border-cyan-500/50 shadow-[0_0_40px_rgba(0,242,255,0.2)] bg-black/80">
                        <img src="/images/redbull.png" className="object-contain p-8" alt="Title" />
                    </div>
                    <span className="unit-label text-cyan-400 font-bold block text-center mt-3 tracking-widest">TITLE SPONSOR</span>
=======
            {/* Lottie container */}
            <div className="flex-1 w-full flex items-start justify-center relative z-20">
                <div className="w-[90%] mt-4 aspect-[4/3] rounded-3xl overflow-hidden">
                    {animationData && (
                        <Lottie
                            lottieRef={animationRef}
                            animationData={animationData}
                            autoplay={false}
                            loop={true}
                            //speed={1.5}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                        />
                    )}
>>>>>>> 044680499a1926337a044bc68a761333ce74cb1b
                </div>

                {/* THE 11 PARTNERS (Orbiting around center) */}
                {/* Top Orbit */}
                <div className="orbit-card absolute top-[5%] left-[10%] w-32 h-40"><div className="inner-card"><img src="/s1.png" /></div></div>
                <div className="orbit-card absolute -top-[5%] left-1/2 -translate-x-1/2 w-32 h-40"><div className="inner-card"><img src="/s2.png" /></div></div>
                <div className="orbit-card absolute top-[5%] right-[10%] w-32 h-40"><div className="inner-card"><img src="/s3.png" /></div></div>

                {/* Side Orbit */}
                <div className="orbit-card absolute top-1/3 left-0 w-32 h-40"><div className="inner-card"><img src="/s4.png" /></div></div>
                <div className="orbit-card absolute top-1/3 right-0 w-32 h-40"><div className="inner-card"><img src="/s5.png" /></div></div>
                <div className="orbit-card absolute bottom-1/3 left-0 w-32 h-40"><div className="inner-card"><img src="/s6.png" /></div></div>
                <div className="orbit-card absolute bottom-1/3 right-0 w-32 h-40"><div className="inner-card"><img src="/s7.png" /></div></div>

                {/* Bottom Orbit */}
                <div className="orbit-card absolute bottom-[5%] left-[10%] w-32 h-40"><div className="inner-card"><img src="/s8.png" /></div></div>
                <div className="orbit-card absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-32 h-40"><div className="inner-card"><img src="/s9.png" /></div></div>
                <div className="orbit-card absolute bottom-[5%] right-[10%] w-32 h-40"><div className="inner-card"><img src="/s10.png" /></div></div>
                <div className="orbit-card absolute top-1/2 left-[20%] -translate-y-1/2 w-32 h-40 z-10"><div className="inner-card"><img src="/s11.png" /></div></div>

            </div>
        </section>
    );
}