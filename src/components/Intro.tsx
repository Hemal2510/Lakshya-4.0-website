"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LAKSHYA_LOGO = "/images/logo.png";
const VIDEO_SRC = "/videos/intro.mp4"; // Your intro video

export default function IntroWithTransition({ HeroComponent, AboutComponent, GalleryComponent }) {
    const [videoDone, setVideoDone] = useState(false);
    const [showTransition, setShowTransition] = useState(false);
    const [transitionComplete, setTransitionComplete] = useState(false);

    useEffect(() => {
        // Prevent scroll during intro
        if (!transitionComplete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [transitionComplete]);

    useEffect(() => {
        // Video duration timing (adjust to match your video length)
        const videoEndTimer = setTimeout(() => {
            setVideoDone(true);
            setShowTransition(true);
        }, 6000); // 6 seconds, adjust as needed

        return () => clearTimeout(videoEndTimer);
    }, []);

    useEffect(() => {
        if (showTransition) {
            // After 2 seconds of transition animation, complete and show main content
            const completeTimer = setTimeout(() => {
                setTransitionComplete(true);
            }, 2000);
            return () => clearTimeout(completeTimer);
        }
    }, [showTransition]);

    return (
        <div className="relative w-full min-h-screen bg-gray-900 overflow-hidden">
            {/* Video Layer */}
            <AnimatePresence>
                {!videoDone && (
                    <motion.div
                        key="video-layer"
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8 } }}
                    >
                        <video
                            src={VIDEO_SRC}
                            autoPlay
                            playsInline
                            muted
                            className="w-auto h-auto max-w-full max-h-full object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Transition Overlay: Logo + Text split */}
            <AnimatePresence>
                {showTransition && !transitionComplete && (
                    <motion.div
                        key="transition-overlay"
                        className="fixed inset-0 z-40 flex items-center justify-center bg-black"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 1 } }}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Logo - starts centered, moves left */}
                            <motion.div
                                className="absolute"
                                initial={{ x: 0, y: -80, scale: 1 }}
                                animate={{
                                    x: "-35vw",
                                    y: 0,
                                    scale: 0.85,
                                    transition: { duration: 1.5, ease: "easeInOut" }
                                }}
                            >
                                <img
                                    src={LAKSHYA_LOGO}
                                    alt="Lakshya Logo"
                                    className="w-[200px] md:w-[280px] lg:w-[340px] object-contain drop-shadow-xl"
                                />
                            </motion.div>

                            {/* Text - starts centered, moves right */}
                            <motion.div
                                className="absolute flex flex-col items-center"
                                initial={{ x: 0, y: 120, opacity: 1 }}
                                animate={{
                                    x: "22vw",
                                    y: -40,
                                    opacity: 1,
                                    transition: { duration: 1.5, ease: "easeInOut" }
                                }}
                            >
                <span
                    className="text-[2.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-extrabold bg-clip-text text-transparent whitespace-nowrap"
                    style={{
                        backgroundImage: 'linear-gradient(120deg, #38bdf8 15%, #6366f1 55%, #a78bfa 90%)',
                        backgroundSize: '400% 400%',
                        animation: 'waveGradient 4s ease-in-out infinite',
                        lineHeight: 1
                    }}
                >
                  LAKSHYA 4.0
                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content - Hero, About, Gallery */}
            <div className="relative z-10">
                <AnimatePresence>
                    {transitionComplete && (
                        <motion.div
                            key="main-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        >
                            <HeroComponent />
                            <AboutComponent />
                            <GalleryComponent />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style>{`
        @keyframes waveGradient {
          0% { background-position: 0% 90%; }
          50% { background-position: 100% 10%; }
          100% { background-position: 0% 90%; }
        }
      `}</style>
        </div>
    );
}
