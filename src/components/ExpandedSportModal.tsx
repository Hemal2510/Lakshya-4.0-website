"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import CircularGallery from "@/components/CircularGallery";

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
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    const galleryItems = sport.photos.map((photo) => ({
        image: photo,
        text: "",
    }));

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-lg bg-black/70"
        >
            {/* Title */}
            <div className="w-full text-center font-bold text-4xl sm:text-5xl text-white mb-8 z-10">
                {sport.name}
            </div>

            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white text-3xl font-bold z-20"
                aria-label="Close"
            >
                &times;
            </button>

            {/* Circular gallery container */}
            <div
                className="w-[90vw] max-w-[1400px] h-[60vh] sm:h-[65vh] relative"
            >
                <CircularGallery
                    items={galleryItems}
                    bend={2.5}
                    textColor="transparent"
                    borderRadius={0.03}
                    scrollSpeed={0.75}
                    scrollEase={0.08}
                />
            </div>
        </div>,
        document.body
    );
}
