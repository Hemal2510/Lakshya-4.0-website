"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltedCard from './TiltedCard';

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PARTNERS = [
    { id: 1, src: "/images/sponsors/sponsor_2.png", desc: "Tech Partner" },
    { id: 2, src: "/images/sponsors/sponsor_4.jpg", desc: "Energy Partner" },
    { id: 3, src: "/images/sponsors/sponsor_5.jpg", desc: "Hydration" },
    { id: 4, src: "/images/sponsors/sponsor_6.jpg", desc: "Travel" },
    { id: 5, src: "/images/sponsors/sponsor_12.jpg", desc: "Apparel" },
    { id: 6, src: "/images/sponsors/sponsor_8.jpg", desc: "Banking" },
    { id: 7, src: "/images/sponsors/sponsor_9.jpg", desc: "Food & Bev" },
    { id: 8, src: "/images/sponsors/sponsor_10.jpg", desc: "Gaming" },
    { id: 9, src: "/images/sponsors/sponsor_11.jpg", desc: "Network" },
    { id: 10, src: "/images/sponsors/sponsor_1.png", desc: "Hardware" },
    { id: 11, src: "/images/sponsors/sponsor_3.jpg", desc: "Streaming" },
    { id: 12, src: "/images/sponsors/sponsor_7.jpg", desc: "Broadcaster" },
];

export default function SponsorGrid() {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                }
            });

            tl.set(".partner-card", {
                opacity: 0,
                scale: 0.2,
                x: 0,
                y: 0,
                autoAlpha: 0,
            });

            tl.set(titleRef.current, { scale: 2.5, zIndex: 100 });

            tl.to(titleRef.current, {
                scale: 1,
                duration: 2,
                ease: "expo.inOut"
            })
                .fromTo(".partner-card",
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
                        opacity: 1,
                        autoAlpha: 1,
                        scale: 1,
                        x: 0,
                        y: 0,
                        stagger: {
                            amount: 1.5,
                            from: "center"
                        },
                        duration: 3,
                        ease: "power4.out"
                    },
                    "-=1.5");
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-10 px-4"
            style={{
                background: "radial-gradient(circle at center, #1a3a60 0%, #0a1a2f 50%, #000000 100%)"
            }}
        >
            <div ref={containerRef} className="flex flex-col gap-10 md:gap-16 w-full max-w-7xl relative">

                {/* ROW 1 */}
                <div className="flex justify-center gap-6 md:gap-12">
                    {PARTNERS.slice(0, 4).map(p => (
                        <div key={p.id} className="partner-card">
                            <StyledPartnerCard src={p.src} desc={p.desc} size="160px" />
                        </div>
                    ))}
                </div>

                {/* ROW 2: Center Hero */}
                <div className="flex justify-center items-center gap-6 md:gap-12">
                    <div className="partner-card hidden md:block">
                        <StyledPartnerCard src={PARTNERS[4].src} desc={PARTNERS[4].desc} size="180px" />
                    </div>
                    <div className="partner-card hidden md:block">
                        <StyledPartnerCard src={PARTNERS[5].src} desc={PARTNERS[5].desc} size="180px" />
                    </div>

                    <div ref={titleRef} className="z-50 mx-4">
                        <div className="bg-gray-800/40 backdrop-blur-md rounded-[24px] border border-white/20 p-2 shadow-2xl overflow-hidden">
                            <TiltedCard
                                imageSrc="/images/sponsors/sponsor_title.jpg"
                                captionText="Principal Partner"
                                displayOverlayContent={true}
                                overlayContent={
                                    <div className="absolute top-4 left-4 py-2 px-4 bg-black/80 backdrop-blur-lg rounded-full border border-white/20 shadow-lg w-fit">
                                        <p className="text-white text-sm md:text-base font-bold whitespace-nowrap">Principal Partner</p>
                                    </div>
                                }
                                showTooltip={false}
                                containerHeight="280px"
                                containerWidth="280px"
                                imageHeight="280px"
                                imageWidth="280px"
                                rotateAmplitude={15}
                            />
                        </div>
                    </div>

                    <div className="partner-card hidden md:block">
                        <StyledPartnerCard src={PARTNERS[6].src} desc={PARTNERS[6].desc} size="180px" />
                    </div>
                    <div className="partner-card hidden md:block">
                        <StyledPartnerCard src={PARTNERS[7].src} desc={PARTNERS[7].desc} size="180px" />
                    </div>
                </div>

                {/* ROW 3 */}
                <div className="flex justify-center gap-6 md:gap-12">
                    {PARTNERS.slice(8, 12).map(p => (
                        <div key={p.id} className="partner-card">
                            <StyledPartnerCard src={p.src} desc={p.desc} size="180px" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function StyledPartnerCard({ src, desc, size }: { src: string; desc: string; size: string }) {
    return (
        <div className=" ">
            <TiltedCard
                imageSrc={src}
                captionText={desc}
                showTooltip={false}
                displayOverlayContent={true}
                /* UPDATED BOX: Now spans to fit text perfectly */
                overlayContent={
                    <div className="absolute top-3 left-3 py-1.5 px-3 bg-black/70 backdrop-blur-md rounded-full border border-white/20 shadow-md w-fit max-w-[140px]">
                        <p className="text-white text-[10px] font-bold uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                            {desc}
                        </p>
                    </div>
                }
                containerHeight={size}
                containerWidth={size}
                imageHeight={size}
                imageWidth={size}
                rotateAmplitude={20}
                scaleOnHover={1.1}
            />
        </div>
    );
}