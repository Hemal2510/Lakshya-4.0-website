"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LAKSHYA_LOGO = "/images/logo.png";
const VIDEO_SRC = "/videos/intro.mp4";

export default function IntroHero() {
    const [videoDone, setVideoDone] = useState(false);
    const [split, setSplit] = useState(false);

    useEffect(() => {
        document.body.style.overflow = videoDone ? "" : "hidden";
        return () => { document.body.style.overflow = ""; };
    }, [videoDone]);

    useEffect(() => {
        const t = setTimeout(() => setVideoDone(true), 7000); // Adjust as needed
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (videoDone) {
            const t = setTimeout(() => setSplit(true), 200);
            return () => clearTimeout(t);
        }
    }, [videoDone]);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Video overlay (fixed!) */}
            <AnimatePresence>
                {!videoDone && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        exit={{ opacity: 0, transition: { duration: 0.7 } }}
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
            {/* Hero/Grid: NOT fixed! */}
            <motion.section
                // NO 'fixed inset-0' here!
                className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden  pt-20 md:pt-20"
                initial={false}
                animate={{ opacity: 1 }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68rem] h-[34rem] rounded-full bg-gradient-to-br from-blue-800 via-indigo-900 to-transparent opacity-15 blur-2xl pointer-events-none" />

                <motion.div
                    className={`relative z-10 w-full max-w-7xl mx-auto flex ${split ? "flex-row items-center gap-10 md:gap-28 px-4" : "flex-col items-center"} justify-center`}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                    <motion.div
                        className={`flex flex-1 items-center justify-center`}
                        layout
                    >
                        <img
                            src={LAKSHYA_LOGO}
                            alt="Lakshya Logo"
                            className="w-[280px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col justify-center items-center flex-1"
                        layout
                    >
                        <div className="flex flex-col items-center">
                            <span
                                className="text-[2.8rem] sm:text-[5.1rem] md:text-[6.3rem] lg:text-[7.1rem] font-extrabold bg-clip-text text-transparent tracking-tight drop-shadow-lg whitespace-nowrap"
                                style={{
                                    backgroundImage: 'linear-gradient(120deg, #38bdf8 15%, #6366f1 55%, #a78bfa 90%)',
                                    backgroundSize: '400% 400%',
                                    animation: 'waveGradient 4s ease-in-out infinite',
                                    lineHeight: 1.01
                                }}
                            >
                                LAKSHYA 4.0
                            </span>
                        </div>
                        <p
                            className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-blue-200 mt-6 mb-4 text-center"
                            style={{ textShadow: "0 2px 24px #38bdf8" }}
                        >
                            Defy the Odds
                        </p>
                        <div className="flex justify-center gap-10 mt-4">
                            <a
                                href="#register"
                                className="px-10 py-5 text-xl md:text-2xl rounded-xl font-bold text-white bg-blue-600/90 shadow-lg hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                            >
                                Register
                            </a>
                            <a
                                href="#events"
                                className="px-10 py-5 text-xl md:text-2xl rounded-xl font-bold text-blue-200 border-2 border-blue-400 bg-blue-400/10 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                            >
                                Event
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
                <style>{`
                    @keyframes waveGradient {
                        0% { background-position: 0% 90%; }
                        50% { background-position: 100% 10%; }
                        100% { background-position: 0% 90%; }
                    }
                `}</style>
            </motion.section>
        </div>
    );
}
