"use client";

import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import CircularGallery from "@/components/CircularGallery";
import imageKitLoader from "@/lib/imagekitLoader";

interface ExpandedSportModalProps {
    sport: {
        name: string;
        photos: string[];
    };
    onClose: () => void;
}

export default function ExpandedSportModal({
                                               sport,
                                               onClose,
                                           }: ExpandedSportModalProps) {

    /* Lock background scroll */
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    /* 🔥 RECTANGLE-FRIENDLY ImageKit URLs - NO CROPPING! */
    const galleryItems = useMemo(() => {
        return sport.photos.map((photo) => ({
            image: imageKitLoader({
                src: photo,
                width: 1400,      // Wider for rectangle look
                height: 900,      // 16:10 aspect ratio (perfect for sports)
                quality: 85,      // Crisp quality
                fit: "contain",   // ✅ PRESERVES ASPECT RATIO - NO CROPPING!
            }),
            text: "",
        }));
    }, [sport.photos]);

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-lg"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6">
                {/* Title */}
                <div className="w-full text-center mb-8 z-10">
                    <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-lg">
                        {sport.name}
                    </h2>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-8 right-8 text-white/90 text-3xl font-bold z-20
                               hover:text-blue-400 hover:scale-110 transition-all duration-200"
                    aria-label="Close gallery"
                >
                    ✕
                </button>

                {/* Rectangle-optimized gallery container */}
                <div className="w-[92vw] max-w-[1600px] h-[65vh] sm:h-[70vh] lg:h-[75vh] relative flex items-center justify-center">
                    <CircularGallery
                        items={galleryItems}
                        bend={2.2}           // Less bend for rectangles
                        textColor="transparent"
                        borderRadius={0.025} // Subtle rounded corners
                        scrollSpeed={0.8}
                        scrollEase={0.085}
                    />
                </div>

                {/* Keyboard navigation hint */}
                <div className="mt-6 text-white/60 text-sm font-medium z-10">
                    ←→ Arrow keys or drag to navigate
                </div>
            </div>
        </>,
        document.body
    );
}
