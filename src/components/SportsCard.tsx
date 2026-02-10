"use client";

import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface SportCardProps {
    name: string;
    lottiePath: string;
    isActive?: boolean;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onCardClick?: () => void;
}

export default function SportCard({
                                      name,
                                      lottiePath,
                                      isActive = false,
                                      onHoverStart,
                                      onHoverEnd,
                                      onCardClick,
                                  }: SportCardProps) {
    const [animationData, setAnimationData] = useState<any>(null);
    const animationRef = useRef<any>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    /* Load lottie JSON */
    useEffect(() => {
        fetch(lottiePath)
            .then((res) => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, [lottiePath]);

    /* Control playback based on hover */
    useEffect(() => {
        if (!animationData || !animationRef.current) return;

        if (isActive) {
            animationRef.current.stop();
            animationRef.current.play();
        } else {
            animationRef.current.stop();
            animationRef.current.goToAndStop(0, true);
        }
    }, [isActive, animationData]);

    /* Tilt effect */
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setMouseX((x - centerX) / centerX);
        setMouseY((centerY - y) / centerY);
    };

    const handleMouseLeave = () => {
        setMouseX(0);
        setMouseY(0);
        onHoverEnd?.();
    };

    const rotateX = mouseY * 5;
    const rotateY = mouseX * -5;
    const scale = 1 + Math.abs(mouseX * 0.02) + Math.abs(mouseY * 0.02);

    return (
        <div
            ref={cardRef}
            onMouseEnter={onHoverStart}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onClick={onCardClick}
            className="
                group cursor-pointer rounded-3xl flex flex-col justify-between
                h-[350px] w-[360px]
                sm:h-[420px] sm:w-[300px]
                md:h-[420px] md:w-[360px]
                lg:h-[420px] lg:w-[420px]
                overflow-hidden transition-all duration-500
                bg-gradient-to-br from-white/10 via-white/5 to-blue-800/40
                backdrop-blur-xl border border-white/10
                shadow-2xl shadow-black/30 hover:shadow-cyan-500/20
                relative transform-gpu m-4 sm:m-6 lg:m-8 p-4 sm:p-5 lg:p-6
            "
            style={{
                minWidth: 320,
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
        >
            {/* Glass highlight */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />

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
                </div>
            </div>

            {/* Title */}
            <div
                className="w-full px-6 pb-6 pt-4 text-center text-2xl font-semibold text-white/90
                           bg-gradient-to-t from-black/40 via-black/10 to-transparent
                           backdrop-blur-sm border-t border-white/5 relative z-30"
            >
                {name}
            </div>
        </div>
    );
}
