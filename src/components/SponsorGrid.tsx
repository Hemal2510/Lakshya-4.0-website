"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from './TiltedCard';

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
    { id: 1, src: "/images/sponsors/sponsor_1.png", desc: "Associate" },
    { id: 2, src: "/images/sponsors/sponsor_3.jpg", desc: "Associate" },
    { id: 3, src: "/images/sponsors/sponsor_2.png", desc: "Associate" },
    { id: 4, src: "/images/sponsors/sponsor_4.jpg", desc: "Merchandise" },
    { id: 5, src: "/images/sponsors/sponsor_5.jpg", desc: "Hydration" },
    { id: 6, src: "/images/sponsors/sponsor_6.jpg", desc: "Associate" },
    { id: 7, src: "/images/sponsors/sponsor_7.jpg", desc: "Associate" },
    { id: 8, src: "/images/sponsors/sponsor_8.jpg", desc: "Associate" },
    { id: 9, src: "/images/sponsors/sponsor_9.jpg", desc: "Energy Drink" },
    { id: 10, src: "/images/sponsors/sponsor_10.jpg", desc: "Snacks" },
    { id: 11, src: "/images/sponsors/sponsor_11.jpg", desc: "Associate" },
    { id: 12, src: "/images/sponsors/sponsor_12.jpg", desc: "Food & Bev" },
    { id: 13, src: "/images/sponsors/sponsor_13.jpg", desc: "Food & Bev" },
    { id: 14, src: "/images/sponsors/sponsor_14.jpg", desc: "Banking" },
];

export default function SponsorGrid() {
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const desktopTitleRef = useRef(null);
    const mobileTitleRef = useRef(null);

    useLayoutEffect(() => {
        let mm = gsap.matchMedia();

        // 1. LAPTOP VERSION (Unchanged)
        mm.add("(min-width: 768px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.set(".desktop-partner", { opacity: 0, scale: 0.2, autoAlpha: 0 });
            tl.set(desktopTitleRef.current, { scale: 2.5, zIndex: 100 });

            tl.to(desktopTitleRef.current, { scale: 1, duration: 2, ease: "expo.inOut" })
                .fromTo(".desktop-partner",
                    {
                        x: (i, target) => {
                            const bounds = target.getBoundingClientRect();
                            const containerBounds = containerRef.current.getBoundingClientRect();
                            return (containerBounds.width / 2) - (bounds.left + bounds.width / 2);
                        },
                        y: (i, target) => {
                            const bounds = target.getBoundingClientRect();
                            const containerBounds = containerRef.current.getBoundingClientRect();
                            return (containerBounds.height / 2) - (bounds.top + bounds.height / 2);
                        }
                    },
                    {
                        opacity: 1, autoAlpha: 1, scale: 1, x: 0, y: 0,
                        stagger: { amount: 1.5, from: "center" },
                        duration: 3, ease: "power4.out"
                    }, "-=1.5");
        });

        // 2. MOBILE VERSION (Aggressive Snapping & No Gaps)
        mm.add("(max-width: 767px)", () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=60%", // DRASTICALLY shortened distance (was 130%)
                    pin: true,
                    scrub: 0.3, // Very low scrub for instant response
                }
            });

            tl.fromTo(mobileTitleRef.current,
                { scale: 1, y: "10vh" },
                {
                    scale: 0.4,
                    y: "-36vh",
                    duration: 1,
                    ease: "none" // Linear feel for more direct scroll control
                }
            )
                .fromTo(".mobile-partner",
                    { opacity: 0, y: 120 },
                    {
                        opacity: 1,
                        y: -100, // Pulls them significantly higher to close the gap
                        stagger: 0.03,
                        duration: 1,
                        ease: "power1.out"
                    },
                    "0" // "0" makes this start at the EXACT same time as the shrink
                );
        });

        return () => mm.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full min-h-screen bg-black flex flex-col items-center overflow-hidden"
                 style={{ background: "radial-gradient(circle at center, #1a3a60 0%, #0a1a2f 50%, #000000 100%)" }}>

            <div ref={containerRef} className="flex flex-col w-full max-w-screen-2xl relative">

                {/* --- DESKTOP LAYOUT --- */}
                <div className="hidden md:flex flex-col gap-12 py-20 px-4">
                    <div className="flex justify-center gap-6">
                        {PARTNERS.slice(0, 5).map(p => (
                            <div key={p.id} className="desktop-partner">
                                <StyledPartnerCard src={p.src} desc={p.desc} size="160px" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center gap-10">
                        <div className="flex gap-6">
                            {PARTNERS.slice(5, 7).map(p => (
                                <div key={p.id} className="desktop-partner">
                                    <StyledPartnerCard src={p.src} desc={p.desc} size="160px" />
                                </div>
                            ))}
                        </div>
                        <div ref={desktopTitleRef} className="z-50 mx-4">
                            <BigTitleCard />
                        </div>
                        <div className="flex gap-6">
                            {PARTNERS.slice(7, 9).map(p => (
                                <div key={p.id} className="desktop-partner">
                                    <StyledPartnerCard src={p.src} desc={p.desc} size="160px" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-center gap-6">
                        {PARTNERS.slice(9, 14).map(p => (
                            <div key={p.id} className="desktop-partner">
                                <StyledPartnerCard src={p.src} desc={p.desc} size="160px" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- MOBILE LAYOUT --- */}
                <div className="md:hidden flex flex-col items-center w-full px-4 pt-2">

                    {/* Hero Title Sponsor */}
                    <div ref={mobileTitleRef} className="z-50 flex justify-center w-full">
                        <div className="bg-gray-800/40 backdrop-blur-md rounded-[20px] border border-white/20 p-1.5 shadow-2xl">
                            <TiltedCard
                                imageSrc="/images/sponsors/sponsor_title.jpg"
                                captionText="Principal Partner"
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute top-3 left-3 py-1 px-3 bg-black/80 backdrop-blur-lg rounded-full border border-white/20 w-fit">
                                        <p className="text-white text-[9px] font-black uppercase tracking-widest">Title Sponsor</p>
                                    </div>
                                }
                                showTooltip={false}
                                containerHeight="82vw"
                                containerWidth="82vw"
                                imageHeight="82vw"
                                imageWidth="82vw"
                                rotateAmplitude={5}
                            />
                        </div>
                    </div>

                    {/* Rising Grid */}
                    <div className="grid grid-cols-2 gap-3 w-full pb-40">
                        {PARTNERS.map(p => (
                            <div key={p.id} className="mobile-partner flex justify-center">
                                <StyledPartnerCard src={p.src} desc={p.desc} size="150px" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

function BigTitleCard() {
    return (
        <div className="bg-gray-800/40 backdrop-blur-md rounded-[32px] border border-white/30 p-2 shadow-2xl">
            <TiltedCard
                imageSrc="/images/sponsors/sponsor_title.jpg"
                captionText="Principal Partner"
                displayOverlayContent={true}
                overlayContent={
                    <div className="absolute top-4 left-4 py-2 px-4 bg-black/80 backdrop-blur-lg rounded-full border border-white/20 w-fit">
                        <p className="text-white text-sm font-black uppercase tracking-widest">Title Sponsor</p>
                    </div>
                }
                showTooltip={false}
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
            />
        </div>
    );
}

function StyledPartnerCard({ src, desc, size }: { src: string; desc: string; size: string }) {
    return (
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-[16px] border border-white/10 overflow-hidden shadow-xl">
            <TiltedCard
                imageSrc={src}
                captionText={desc}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                    <div className="absolute top-2 left-2 py-1 px-2 bg-black/70 backdrop-blur-md rounded-full border border-white/20 shadow-md w-fit max-w-[100px]">
                        <p className="text-white text-[7px] font-bold uppercase tracking-wider truncate">
                            {desc}
                        </p>
                    </div>
                }
                containerHeight={size}
                containerWidth={size}
                imageHeight={size}
                imageWidth={size}
                rotateAmplitude={10}
            />
        </div>
    );
}