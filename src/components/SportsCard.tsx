"use client";
import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

interface SportCardProps {
    name: string;
    lottiePath: string;
    photos: string[];
    isActive?: boolean;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    onCardClick?: () => void;
}

export default function SportCard({
                                      name,
                                      lottiePath,
                                      photos,
                                      isActive = false,
                                      onHoverStart,
                                      onHoverEnd,
                                      onCardClick,
                                  }: SportCardProps) {
    const [animationData, setAnimationData] = useState<any>(null);
    const [lottieDone, setLottieDone] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
    const animationRef = useRef<any>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        fetch(lottiePath)
            .then((res) => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, [lottiePath]);

    useEffect(() => {
        if (isActive && animationData && animationRef.current) {
            setLottieDone(false);
            setPhotoIndex(0);
            animationRef.current.stop();
            animationRef.current.goToAndPlay(0, true);
        } else if (animationData && animationRef.current) {
            setLottieDone(false);
            setPhotoIndex(0);
            animationRef.current.goToAndStop(0, true);
        }
    }, [isActive, animationData]);

    useEffect(() => {
        if (!isActive || !lottieDone) return;
        let count = 0;
        const interval = setInterval(() => {
            if (count + 1 === photos.length) {
                clearInterval(interval);
            } else {
                count += 1;
                setPhotoIndex(count);
            }
        }, 1800);
        return () => clearInterval(interval);
    }, [isActive, lottieDone, photos.length]);

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

    const handleLottieComplete = () => setLottieDone(true);

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
            className="group cursor-pointer rounded-3xl flex flex-col justify-between
                       h-[420px] w-[420px] overflow-hidden transition-all duration-500
                       bg-gradient-to-br from-white/10 via-white/5 to-blue-800/40
                       backdrop-blur-xl border border-white/10
                       shadow-2xl shadow-black/30 hover:shadow-3xl hover:shadow-cyan-500/20
                       relative before:absolute before:inset-0 before:rounded-3xl
                       before:bg-gradient-to-r before:from-cyan-500/5 before:to-purple-500/5
                       before:opacity-0 before:transition-all before:duration-500
                       before:group-hover:opacity-100
                       transform-gpu m-8 p-6"
            style={{
                minWidth: 320,
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                transition: "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
        >
            {/* subtle glass shine */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10" />

            {/* FIXED CONTENT BOX – same for every sport */}
            <div className="flex-1 w-full flex items-start justify-center relative z-20">
                {/* keeps illustration/photo ratio consistent, like football card */}
                <div className="w-[90%] mt-4 aspect-[4/3] rounded-3xl overflow-hidden">
                    {!isActive ? (
                        animationData && (
                            <Lottie
                                animationData={animationData}
                                autoplay={false}
                                loop={false}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                                lottieRef={animationRef}
                            />
                        )
                    ) : animationData && !lottieDone ? (
                        <Lottie
                            lottieRef={animationRef}
                            animationData={animationData}
                            loop={false}
                            autoplay={false}
                            speed={1.5}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                            }}
                            onComplete={handleLottieComplete}
                        />
                    ) : (
                        <img
                            src={photos[photoIndex]}
                            alt={name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    )}
                </div>
            </div>

            {/* name always visible, same height for all */}
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
