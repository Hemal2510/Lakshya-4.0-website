"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import CircularGallery from "@/components/CircularGallery";

export default function ExpandedSportModal({ sport, onClose }) {
    const autoScrollRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    // Auto-scroll effect
    useEffect(() => {
        let scrollAmount = 0;
        const autoScroll = setInterval(() => {
            scrollAmount += 0.5; // Speed of auto-scroll (adjust as needed)

            // Trigger a wheel event to scroll the gallery
            const container = document.querySelector('.circular-gallery-container');
            if (container) {
                const event = new WheelEvent('wheel', {
                    deltaY: 1,
                    bubbles: true,
                    cancelable: true
                });
                container.dispatchEvent(event);
            }
        }, 30); // Frequency (lower = faster)

        autoScrollRef.current = autoScroll;

        // Pause on hover
        const container = document.querySelector('.circular-gallery-container');
        if (container) {
            container.addEventListener('mouseenter', () => {
                clearInterval(autoScrollRef.current);
            });
            container.addEventListener('mouseleave', () => {
                autoScrollRef.current = setInterval(() => {
                    const event = new WheelEvent('wheel', {
                        deltaY: 1,
                        bubbles: true,
                        cancelable: true
                    });
                    container.dispatchEvent(event);
                }, 30);
            });
        }

        return () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
            }
        };
    }, []);

    const galleryItems = sport.photos.map((photo) => ({
        image: photo,
        text: ""
    }));

    return createPortal(
        <div
            className="fixed top-0 left-0 right-0 bottom-0 z-[9999] h-screen w-screen flex flex-col justify-center items-center backdrop-blur-lg"
            style={{ margin: 0, padding: 0 }}
        >
            <div className="w-full text-center font-bold text-5xl text-white mb-8" style={{ zIndex: 10 }}>
                {sport.name}
            </div>

            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white text-3xl font-bold z-20"
            >
                &times;
            </button>

            <div
                className="circular-gallery-container"
                style={{ height: '600px', width: '90vw', maxWidth: '1400px', position: 'relative' }}
            >
                <CircularGallery
                    items={galleryItems}
                    bend={2.5}
                    textColor="transparent"
                    borderRadius={0.03}
                    scrollSpeed={1.5}
                    scrollEase={0.08}
                />
            </div>
        </div>,
        document.body
    );
}
