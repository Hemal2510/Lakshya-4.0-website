"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

interface SportCardProps {
    name: string;
    lottiePath: string;
    photos: string[];
    cardHeight?: number;
    isActive?: boolean;
    onCycleComplete?: () => void;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
}

export default function SportCard({
                                      name,
                                      lottiePath,
                                      photos,
                                      cardHeight = 350,
                                      isActive = false,
                                      onCycleComplete,
                                      onHoverStart,
                                      onHoverEnd,
                                  }: SportCardProps) {
    const [animationData, setAnimationData] = useState<any>(null);
    const [lottieDone, setLottieDone] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showLottie, setShowLottie] = useState(true);
    const animationRef = useRef<any>(null);

    useEffect(() => {
        fetch(lottiePath)
            .then((res) => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, [lottiePath]);

    // Auto play Lottie anim for active card
    useEffect(() => {
        if (animationData && animationRef.current) {
            if (isActive) {
                setShowLottie(true);
                setLottieDone(false);
                setPhotoIndex(0);
                animationRef.current.stop();
                animationRef.current.goToAndPlay(0, true);
            } else {
                setShowLottie(true);
                setLottieDone(false);
                setPhotoIndex(0);
                animationRef.current.goToAndStop(0, true);
            }
        }
    }, [isActive, animationData]);

    // Cycle photos after animation for active card only
    useEffect(() => {
        if (!isActive || !lottieDone) return;
        let count = 0;
        const interval = setInterval(() => {
            if (count + 1 === photos.length) {
                clearInterval(interval);
                setTimeout(() => {
                    if (onCycleComplete) onCycleComplete();
                }, 1000);
            } else {
                count += 1;
                setPhotoIndex(count);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, [isActive, lottieDone, photos.length, onCycleComplete]);

    const handleLottieComplete = () => {
        setLottieDone(true);
        setTimeout(() => setShowLottie(false), 300);
    };

    return (
        <div
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            className="group relative cursor-pointer rounded-2xl shadow-xl bg-blue-800/20 border text-white overflow-hidden transition-all flex flex-col justify-between"
            style={{ height: cardHeight, width: "100%" }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {showLottie && animationData ? (
                    <Lottie
                        lottieRef={animationRef}
                        animationData={animationData}
                        loop={false}
                        autoplay={false}
                        speed={2}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: showLottie ? 1 : 0,
                            transition: "opacity 0.2s",
                        }}
                        onComplete={handleLottieComplete}
                    />
                ) : (
                    <Image
                        src={photos[photoIndex]}
                        alt={`${name} photo`}
                        fill
                        style={{ objectFit: "cover", zIndex: 1 }}
                        className="transition-all"
                    />
                )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-80 p-3 text-center text-2xl font-semibold whitespace-nowrap">
                {name}
            </div>
        </div>
    );
}
