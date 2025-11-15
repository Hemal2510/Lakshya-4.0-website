"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import CircularGallery from "@/components/CircularGallery";

export default function ExpandedSportModal({ sport, onClose }) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    // Transform sport photos array into CircularGallery items format
    const galleryItems = sport.photos.map((photo) => ({
        image: photo,
        text: "" // Empty to hide text labels
    }));

    return createPortal(
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[9999] h-screen w-screen flex flex-col justify-center items-center backdrop-blur-lg"
            style={{ margin: 0, padding: 0 }}
        >
            {/* Sport Name */}
            <div className="w-full text-center font-bold text-5xl text-white mb-8" style={{ zIndex: 10 }}>
                {sport.name}
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white text-3xl font-bold z-20"
            >
                &times;
            </button>

            {/* Circular Gallery */}
            <div style={{ height: '600px', width: '90vw', maxWidth: '1400px', position: 'relative' }}>
                <CircularGallery
                    items={galleryItems}
                    bend={2.5}
                    textColor="transparent"
                    borderRadius={0.03}
                    scrollSpeed={2}
                    scrollEase={0.05}
                />
            </div>
        </div>,
        document.body
    );
}
