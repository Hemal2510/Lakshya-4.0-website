"use client";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const photos = [
    "/images/sport1.jpg",
    "/images/sport2.jpg",
    "/images/sport3.jpg",
    "/images/sport4.jpg",
    "/images/sport5.jpg",
    "/images/sport6.jpg",
    "/images/sport7.jpg",
    "/images/sport8.jpg",
    "/images/sport9.jpg",
    // ...add your images here
];

const AUTO_PLAY_INTERVAL = 4000; // 4 seconds

export default function AboutUsSplitCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("down");
    const timerRef = useRef();

    // Helper to clear and restart autoplay timer
    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setDirection("down");
            setIndex((i) => (i + 1) % photos.length);
        }, AUTO_PLAY_INTERVAL);
    };

    useEffect(() => {
        resetTimer();
        return () => timerRef.current && clearInterval(timerRef.current);
        // eslint-disable-next-line
    }, [photos.length]);

    // Manual controls - reset timer on manual action!
    const nextPhoto = () => {
        setDirection("down");
        setIndex((i) => (i + 1) % photos.length);
        resetTimer();
    };

    const prevPhoto = () => {
        setDirection("up");
        setIndex((i) => (i - 1 + photos.length) % photos.length);
        resetTimer();
    };

    return (
        <section className="w-full flex flex-col md:flex-row items-center justify-center my-16 px-4">
            {/* Left: Carousel */}
            <div className="w-full md:w-1/2 flex items-center justify-center relative">
                <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/10 max-w-lg w-full h-[340px] flex items-center justify-center">
                    <div className="relative w-full h-[340px] overflow-hidden">
                        <AnimatePresence initial={false} mode="sync">
                            <motion.div
                                key={index}
                                className="absolute inset-0 w-full h-full"
                                initial={{
                                    y: direction === "down" ? 340 : -340,
                                    opacity: 0.96,
                                    zIndex: 2,
                                }}
                                animate={{ y: 0, opacity: 1, zIndex: 2 }}
                                exit={{
                                    y: direction === "down" ? -340 : 340,
                                    opacity: 0.7,
                                    zIndex: 2,
                                }}
                                transition={{ duration: 0.55, type: "tween", ease: "easeInOut" }}
                            >
                                <Image
                                    src={photos[index]}
                                    alt={`Lakshya Event Image ${index + 1}`}
                                    width={800}
                                    height={340}
                                    className="object-cover w-full h-full"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* Prev/Next Arrows */}
                    <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-blue-900/70 rounded-full hover:bg-blue-700/90 transition text-white z-30"
                        onClick={prevPhoto}
                        aria-label="Previous photo"
                    >
                        &#8592;
                    </button>
                    <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-900/70 rounded-full hover:bg-blue-700/90 transition text-white z-30"
                        onClick={nextPhoto}
                        aria-label="Next photo"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
            {/* Right: Text + Stats */}
            <div className="w-full md:w-1/2 md:pl-12 flex flex-col items-center justify-center text-center mt-8 md:mt-0">
                <h2 className="text-4xl font-bold text-blue-100 mb-5 select-none">
                    About Us
                </h2>
                <p className="text-base sm:text-lg text-blue-300 font-medium mb-7 max-w-md">
                    Lakshya, IIT Indore’s flagship sports fest, is where adrenaline meets ambition. It’s more than a competition — it’s a celebration of strength, spirit, and sportsmanship. From nail-biting finishes to electric crowds, Lakshya ignites the arena with passion, pride, and pure performance.
                </p>
                <div className="flex gap-10 mt-2">
                    <StatCircle value="2500+" label="Participants" />
                    <StatCircle value="15+" label="Sports" />
                    <StatCircle value="50+" label="Colleges" />
                </div>
            </div>
        </section>
    );
}

function StatCircle({ value, label }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-blue-800/50 border border-blue-700/70 text-2xl font-bold text-blue-200 flex items-center justify-center mb-1 shadow-lg shadow-blue-900/10">
                {value}
            </div>
            <div className="text-xs text-blue-100 font-semibold">{label}</div>
        </div>
    );
}
