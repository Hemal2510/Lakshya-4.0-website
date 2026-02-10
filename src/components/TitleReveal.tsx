"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TitleReveal({ onComplete }: { onComplete: () => void }) {
    const [stage, setStage] = useState(0);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [flickeredIndices, setFlickeredIndices] = useState<Set<number>>(new Set());
    const [flickerCount, setFlickerCount] = useState(0);

    const text = "TITLE SPONSOR";

    useEffect(() => {
        const timeline = [
            setTimeout(() => setStage(1), 1000),
            setTimeout(() => setStage(2), 3500),
            setTimeout(() => setStage(3), 6000),
            setTimeout(() => setStage(4), 13000),
            setTimeout(() => setStage(5), 16500),
            setTimeout(() => onComplete(), 18000),
        ];
        return () => timeline.forEach(clearTimeout);
    }, [onComplete]);

    useEffect(() => {
        if (stage === 3 && flickerCount < 12) {
            const delay = flickerCount < 5 ? Math.random() * 1200 + 800 : Math.random() * 400 + 100;
            const timeout = setTimeout(() => {
                const availableIndices = text.split("").map((_, i) => i).filter(i => text[i] !== " " && !flickeredIndices.has(i));
                if (availableIndices.length > 0) {
                    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
                    setActiveIndex(randomIndex);
                    setTimeout(() => {
                        setFlickeredIndices(prev => new Set(prev).add(randomIndex));
                        setActiveIndex(null);
                        setFlickerCount((prev) => prev + 1);
                    }, 500);
                }
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [stage, flickerCount, flickeredIndices]);

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-50 pointer-events-none px-4"
            animate={{ opacity: stage >= 5 ? 0 : 1 }}
            transition={{ duration: 2 }}
        >
            <motion.div
                className="absolute inset-0 bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 1 && stage < 5 ? 1 : 0 }}
                transition={{ duration: 2 }}
            />

            <motion.h1
                layoutId="title-heading"
                className="relative text-4xl sm:text-6xl md:text-7xl font-black uppercase text-center flex flex-wrap justify-center gap-2 md:gap-4"
            >
                {text.split("").map((letter, i) => {
                    const isFlickering = activeIndex === i;
                    const isBurnedOut = flickeredIndices.has(i);
                    return (
                        <motion.span
                            key={i}
                            animate={isFlickering ? {
                                color: ["#ffffff", "#0ea5e9", "#ffffff", "#0284c7"],
                                opacity: [1, 0.3, 1, 0.6, 1],
                                filter: ["brightness(1)", "brightness(7) blur(12px)", "brightness(1)"],
                                scale: [1, 1.2, 1],
                                textShadow: "0px 0px 70px rgba(14, 165, 233, 1)",
                            } : isBurnedOut ? {
                                opacity: [0.12, 0.2, 0.12],
                                filter: "brightness(0.3) grayscale(0.8)",
                            } : { opacity: stage >= 1 ? 1 : 0 }}
                            transition={isBurnedOut ? { repeat: Infinity, duration: 5 } : { duration: 0.5 }}
                        >
                            {letter === " " ? "\u00A0" : letter}
                        </motion.span>
                    );
                })}
            </motion.h1>

            <motion.p
                layoutId="title-quote"
                initial={{ opacity: 0 }}
                animate={{ opacity: stage >= 2 && stage < 5 ? 1 : 0 }}
                transition={{ duration: 2.5 }}
                className="relative text-blue-900 text-lg md:text-2xl mt-8 md:mt-12 italic font-bold tracking-[0.15em] md:tracking-[0.3em] text-center"
                style={{ textShadow: "0px 0px 20px rgba(30, 58, 138, 1)" }}
            >
                “Powering champions. Fueling ambition.”
            </motion.p>

            <motion.div
                layoutId="title-sponsor-logo"
                initial={{ opacity: 0, scale: 0.6, filter: "brightness(0) contrast(3)" }}
                animate={stage >= 4 ? {
                    opacity: 1,
                    scale: [0.7, 1.1, 0.95, 1],
                    x: [0, -3, 3, -2, 2, 0],
                    filter: ["brightness(0) contrast(3)", "brightness(10) blur(20px)", "brightness(0.5) blur(2px)", "brightness(1) contrast(1.1) blur(0px)"],
                } : {}}
                transition={stage >= 4 ? { duration: 2.5, times: [0, 0.1, 0.3, 1], ease: "easeInOut" } : {}}
                className="relative mt-16 md:mt-24"
            >
                {stage >= 4 && stage < 5 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 0.3, 0], scale: [1, 3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-blue-700 blur-[100px] -z-10"
                    />
                )}
                <img
                    src="/images/sponsors/sponsor7.jpg"
                    alt="Title Sponsor"
                    className="w-[18rem] sm:w-[26rem] md:w-[32rem] drop-shadow-[0_0_150px_rgba(56,189,248,0.6)]"
                />
            </motion.div>
        </motion.div>
    );
}