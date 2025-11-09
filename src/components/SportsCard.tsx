"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

interface SportCardProps {
    name: string;
    lottiePath: string; // "/lottie/football.json"
    photos: string[];
    cardWidth?: number;
    cardHeight?: number;
}

export default function SportCard({
                                      name,
                                      lottiePath,
                                      photos,
                                      cardWidth = 600,
                                      cardHeight = 400,
                                  }: SportCardProps) {
    const [hovered, setHovered] = useState(false);
    const [animationData, setAnimationData] = useState<any>(null);
    const [lottieDone, setLottieDone] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [showLottie, setShowLottie] = useState(true);
    const animationRef = useRef<any>(null);

    // Load Lottie JSON when component mounts
    useEffect(() => {
        fetch(lottiePath)
            .then(res => res.json())
            .then(setAnimationData)
            .catch(console.error);
    }, [lottiePath]);

    // Handle hover: play Lottie once
    useEffect(() => {
        if (hovered && animationRef.current) {
            setShowLottie(true);
            animationRef.current.setDirection(1);
            animationRef.current.goToAndPlay(0, true);
            setLottieDone(false);
        }
        if (!hovered) {
            setLottieDone(false);
            setShowLottie(true);
            setPhotoIndex(0);
            if (animationRef.current) {
                animationRef.current.goToAndStop(0, true); // Pause at first frame
            }
        }
    }, [hovered]);

    // Start cycling photos only after Lottie finishes
    useEffect(() => {
        if (!lottieDone) return;
        const interval = setInterval(() => {
            setPhotoIndex(idx => (idx + 1) % photos.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [lottieDone, photos.length]);

    // Hide Lottie animation as soon as it is finished
    const handleLottieComplete = () => {
        setLottieDone(true);
        setTimeout(() => setShowLottie(false), 200); // Short delay before fading out
    };

    return (
        <div
            className="group relative cursor-pointer rounded-2xl shadow-xl bg-blue-800/20 border    text-white overflow-hidden transition-all"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{ width: cardWidth, height: cardHeight, minWidth: cardWidth, minHeight: cardHeight }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                {(showLottie && animationData) ? (
                    <Lottie
                        lottieRef={animationRef}
                        animationData={animationData}
                        loop={false}
                        autoplay={false}
                        speed={3}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            opacity: showLottie ? 1 : 0,
                            transition: "opacity 0.2s"
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
