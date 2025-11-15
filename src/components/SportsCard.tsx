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
    const animationRef = useRef<any>(null);

    useEffect(() => {
        fetch(lottiePath)
            .then(res => res.json())
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

    const handleLottieComplete = () => setLottieDone(true);

    return (
        <div
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            onClick={onCardClick}
            className="sport-card-premium cursor-pointer rounded-2xl flex flex-col justify-between h-[340px] w-[360px] overflow-hidden transition-all duration-500 group"
            style={{ minWidth: 260 }}
        >
            <div className="grow flex flex-col justify-center items-center w-full p-4" style={{ height: "80%" }}>
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
                                display: "block"
                            }}
                            lottieRef={animationRef}
                        />
                    )
                ) : (
                    animationData && !lottieDone ? (
                        <Lottie
                            lottieRef={animationRef}
                            animationData={animationData}
                            loop={false}
                            autoplay={false}
                            speed={1.5}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}
                            onComplete={handleLottieComplete}
                        />
                    ) : (
                        <img
                            src={photos[photoIndex]}
                            alt={name}
                            style={{
                                objectFit: "cover",
                                borderRadius: "1rem",
                                width: "100%",
                                height: "100%",
                                display: "block"
                            }}
                        />
                    )
                )}
            </div>
            <div className="w-full p-4 text-center text-2xl font-bold text-white relative z-10">
                {name}
            </div>
        </div>
    );
}
