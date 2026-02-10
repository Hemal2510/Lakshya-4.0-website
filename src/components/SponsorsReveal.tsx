"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SponsorReveal() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl1 = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "+=200%", // This determines how long the "zoom" lasts
                    pin: sectionRef.current,
                    pinSpacing: true,
                    scrub: 1,
                }
            });

            tl1.to(".mask-img", {
                scale: 80, // Increased scale for a total breakthrough
                ease: "none"
            }, 0)
                .to(".intro-text-center", {
                    opacity: 1,
                    y: -50,
                    duration: 0.4
                }, 0)
                .to(".intro-text-center", {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4
                }, 0.3); // Text disappears early so you see the image clearly

        }, triggerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="relative bg-black">
            {/* This inner section will stay FROZEN while you scroll */}
            <section ref={sectionRef} className="w-full h-screen overflow-hidden flex items-center justify-center relative bg-black">

                {/* 1. Background Image - FIXED CLASS NAME */}
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[url('/images/sport0.jpg')] bg-cover bg-center" />
                </div>

                {/* 2. Text Layer */}
                <div className="intro-text-center absolute z-20 text-center opacity-0 pointer-events-none px-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-white uppercase tracking-tighter shadow-black drop-shadow-2xl">
                        Our Partners
                    </h1>
                    <p className="text-lg md:text-xl text-cyan-400 font-medium">
                        Enabling scale Competition and Excellence
                    </p>
                </div>

                {/* 3. The Mask Overlay */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <img
                        src="https://uploads-ssl.webflow.com/5cff83ac2044e22cb8cf2f11/5d13364599bb70e3560cc4e5_background-min%203.png"
                        alt="mask"
                        className="mask-img w-[101vw] h-[101vh] object-cover"
                    />
                </div>
            </section>
        </div>
    );
}