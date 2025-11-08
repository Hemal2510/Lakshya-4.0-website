"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace with your logo image path
const LAKSHYA_LOGO = "/images/logo.png"; // e.g. your final frame logo

export default function LandingWithIntroVideo({ videoSrc, HeroComponent, AboutComponent }) {
    const [videoDone, setVideoDone] = useState(false);
    const [showLogo, setShowLogo] = useState(false);

    // Prevent scroll when video is playing
    useEffect(() => {
        if (!videoDone) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        // Clean up on unmount to always restore scroll
        return () => {
            document.body.style.overflow = "";
        };
    }, [videoDone]);

    useEffect(() => {
        // Start the video; show logo at the end (matches video length)
        const logoDelay = setTimeout(() => setShowLogo(true), 5780); // logo shown ~last 0.5s
        const doneDelay = setTimeout(() => setVideoDone(true), 5880); // video is 5.88s

        return () => {
            clearTimeout(logoDelay);
            clearTimeout(doneDelay);
        };
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden">
            {/* Intro Video Overlay */}
            <AnimatePresence>
                {!videoDone && (
                    <motion.div
                        key="intro-overlay"
                        className="fixed inset-0 z-40 flex items-center justify-center bg-black"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                        style={{ pointerEvents: "auto" }}
                    >
                        {/* Video */}
                        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
                            <video
                                src={videoSrc}
                                autoPlay
                                playsInline
                                muted
                                className="w-auto h-auto max-w-full max-h-full object-contain"
                                style={{
                                    display: "block",
                                    margin: "0 auto"
                                }}
                            />
                        </div>

                        {/* Animated Logo on last second */}
                        <AnimatePresence>
                            {showLogo && (
                                <motion.div
                                    key="lakshya-logo"
                                    className="absolute w-full flex flex-col items-center justify-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{
                                        opacity: 1,
                                        scale: 0.51,
                                        x: "-40vw",
                                        y: "-40vh",
                                        transition: { duration: 1.15, ease: "easeInOut" }
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    style={{ zIndex: 60 }}
                                >
                                    <img
                                        src={LAKSHYA_LOGO}
                                        alt="Lakshya Logo"
                                        className="w-48 md:w-80"
                                    />
                                    <div className="mt-2 uppercase text-3xl md:text-5xl font-bold tracking-tight text-gray-200 drop-shadow-lg">
                                        LAKSHYA 4.0
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* "Sticky" Logo in corner, only after video */}
            {videoDone && (
                <motion.div
                    className="fixed z-30 top-6 left-4 md:top-10 md:left-10 flex items-center gap-3"
                    initial={{ opacity: 0, scale: 0.5, y: -40, x: -60 }}
                    animate={{ opacity: 1, scale: 0.7, y: 0, x: 0 }}
                    transition={{ duration: 0.75, type: "spring" }}
                >
                    <img src={LAKSHYA_LOGO} alt="Lakshya Logo Small" className="w-16 md:w-24" />
                </motion.div>
            )}

            {/* Main Content Sections */}
            <div className="relative z-10">
                <AnimatePresence>
                    {videoDone && (
                        <motion.div
                            key="hero"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1.1, ease: "easeOut" }}
                            exit={{ opacity: 0 }}
                        >
                            <HeroComponent />
                            <AboutComponent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
