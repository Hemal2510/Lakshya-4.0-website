"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const years = [
    {
        year: 2022,
        title: "Lakshya 1.0 – Genesis",
        motto: "Breaking Barriers",
        desc: "The inaugural edition that set the foundation.",
        highlights: ["500+ participants", "10 sports categories", "Regional recognition"],
        special: "First ever inter-college championship",
        video: "",
    },
    {
        year: 2023,
        title: "Lakshya 2.0 – Evolution",
        motto: "Raising the Bar",
        desc: "Expanded reach and enhanced competition.",
        highlights: ["800+ participants", "12 sports categories", "State-level participation"],
        special: "Record breaking attendance",
        video:
            "https://drive.google.com/uc?export=download&id=1LuhJOn6NUEb9BRXDpNfvdsXHWsgrv9FO",
    },
    {
        year: 2024,
        title: "Lakshya 3.0 – Excellence",
        motto: "Unleash the Spirit",
        desc: "Setting new standards in collegiate sports.",
        highlights: ["1200+ participants", "15 sports categories", "National recognition"],
        special: "Most competitive edition",
        video:
            "https://drive.google.com/uc?export=download&id=1suIvB7iSRFpDtBskBFSiNd8RABcUlLqP",
    },
];

export default function LakshyaTimelineSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0a0f]">
            {/* Background gradients */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-blue-950/10 to-[#0a0a0f]" />
                <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-indigo-900/8 rounded-full blur-3xl"
                    animate={{ y: [-50, 50, -50], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-blue-800/12 rounded-full blur-3xl"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Header */}
            <div className="relative z-10 flex flex-col items-center mb-16 md:mb-20 px-4 text-center">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: "spring", damping: 14 }}
                    className="relative mb-6 md:mb-8"
                >
                    <motion.div
                        className="absolute -inset-1 rounded-full blur-md opacity-75 pointer-events-none"
                        style={{
                            background:
                                "linear-gradient(90deg, #38bdf8, #6366f1, #8b5cf6, #38bdf8)",
                            backgroundSize: "200% 200%",
                        }}
                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#0f172a] border border-blue-400/50 backdrop-blur-xl shadow-lg shadow-blue-900/20">
                        <span className="text-xl md:text-2xl">📅</span>
                        <span className="text-white font-semibold text-base md:text-lg">
              Our Evolution
            </span>
                    </div>
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
            Lakshya Through the Years
          </span>
                </h2>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
                {/* Central timeline line – only md+ */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 overflow-hidden z-0">
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600"
                        animate={{ backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: "100% 200%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 opacity-50 blur-sm" />
                </div>

                <div className="flex flex-col gap-20 md:gap-32 relative z-10">
                    {years.map((event, idx) => (
                        <TimelineYearBlock {...event} key={event.year} right={idx % 2 === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineYearBlock({
                               year,
                               title,
                               motto,
                               desc,
                               highlights,
                               special,
                               video,
                               right,
                           }: any) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, x: 0, scale: 1 });
    }, [inView, controls]);

    return (
        <div className="relative">
            {/* Orbs & node only on md+ */}
            <motion.div
                className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0"
                animate={{ x: [-20, 20, -20], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-cyan-500/18 rounded-full blur-3xl pointer-events-none z-0"
                animate={{ x: [20, -20, 20], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-400 z-20 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
                initial={{ scale: 0 }}
                animate={inView ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute inset-0 rounded-full bg-blue-300 animate-ping opacity-75" />
                <div className="absolute -inset-8 rounded-full bg-blue-500/35 blur-xl" />
            </motion.div>

            {/* MOBILE: always Card -> Video, no inView dependency */}
            <div className="flex flex-col gap-6 md:hidden">
                <div className="flex justify-center relative">
                    <div className="group relative w-full max-w-md">
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-blue-800/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                        <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl px-5 py-6 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300">
                            <TimelineCard
                                year={year}
                                title={title}
                                motto={motto}
                                desc={desc}
                                highlights={highlights}
                                special={special}
                                inView={true}
                                right={false}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center relative">
                    <VideoHoverPreview video={video} />
                </div>
            </div>

            {/* DESKTOP/TABLET: alternating sides with inView animations */}
            <div className="hidden md:grid grid-cols-2 gap-12 items-center w-full">
                {!right ? (
                    <>
                        {/* Video left */}
                        <div className="flex justify-end relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/15 to-transparent blur-2xl"
                            />
                            <VideoHoverPreview video={video} />
                        </div>

                        {/* Card right */}
                        <div className="flex justify-start relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-500/15 to-transparent blur-2xl"
                            />
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, x: 100, scale: 0.95 }}
                                animate={controls}
                                transition={{ duration: 0.7, ease: "backOut" }}
                                className="group relative max-w-xl"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-blue-800/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl px-8 py-8 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300"
                                >
                                    <TimelineCard
                                        year={year}
                                        title={title}
                                        motto={motto}
                                        desc={desc}
                                        highlights={highlights}
                                        special={special}
                                        inView={inView}
                                        right={false}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Card left */}
                        <div className="flex justify-end relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent blur-2xl"
                            />
                            <motion.div
                                ref={ref}
                                initial={{ opacity: 0, x: -100, scale: 0.95 }}
                                animate={controls}
                                transition={{ duration: 0.7, ease: "backOut" }}
                                className="group relative max-w-xl"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-blue-800/40 rounded-2xl opacity-0 group-hover:opacity-100 blur-md transition-all duration-500" />
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl px-8 py-8 border border-white/10 group-hover:border-blue-400/50 transition-all duration-300"
                                >
                                    <TimelineCard
                                        year={year}
                                        title={title}
                                        motto={motto}
                                        desc={desc}
                                        highlights={highlights}
                                        special={special}
                                        inView={inView}
                                        right={true}
                                    />
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Video right */}
                        <div className="flex justify-start relative">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={inView ? { opacity: 1 } : {}}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-500/15 to-transparent blur-2xl"
                            />
                            <VideoHoverPreview video={video} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

function TimelineCard({
                          year,
                          title,
                          motto,
                          desc,
                          highlights,
                          special,
                          inView,
                          right,
                      }: any) {
    return (
        <>
            <motion.div
                initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.2 }}
                className={`absolute -top-8 ${
                    right ? "left-4 lg:-left-24" : "right-4 lg:-right-24"
                } flex flex-col items-center`}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition" />
                    <span className="relative px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-lg md:text-xl shadow-xl">
            {year}
          </span>
                </div>
            </motion.div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>

            <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-base md:text-lg font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic mb-3 cursor-pointer"
            >
                "{motto}"
            </motion.div>

            <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                {desc}
            </p>

            <div className="mb-2 md:mb-3 font-semibold text-blue-400 text-xs md:text-sm uppercase tracking-wider">
                Highlights:
            </div>
            <ul className="ml-4 mb-4 text-gray-300 text-xs md:text-sm space-y-1">
                {highlights.map((txt: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>
              <CountUpOnView value={txt} inView={inView} />
            </span>
                    </li>
                ))}
            </ul>

            <div className="bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-blue-300 font-medium shadow-inner">
                ✨ {special}
            </div>
        </>
    );
}

function VideoHoverPreview({ video }: { video: string }) {
    const vidRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isManual, setIsManual] = useState(false);

    const handlePlayPause = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!vidRef.current) return;
        if (isPlaying) {
            vidRef.current.pause();
            setIsPlaying(false);
            setIsManual(false);
        } else {
            vidRef.current.play();
            setIsPlaying(true);
            setIsManual(true);
        }
    };

    const handleMouseEnter = () => {
        if (!isManual) {
            vidRef.current?.play();
            setIsPlaying(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isManual) {
            vidRef.current?.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="relative rounded-2xl overflow-hidden group w-full max-w-md md:max-w-lg lg:w-[600px] lg:h-[340px] aspect-[4/3]">
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-700/30 via-indigo-800/20 to-blue-900/30 rounded-2xl blur-sm" />
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-blue-800/40 rounded-2xl opacity-50 group-hover:opacity-100 blur-md transition-all duration-500" />
            <div className="relative bg-gray-900/80 rounded-2xl overflow-hidden border border-blue-900/30 group-hover:border-blue-600/40 transition-all w-full h-full">
                <div className="absolute inset-0 pointer-events-none z-10">
                    <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-blue-900/20 to-transparent" />
                    <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-blue-900/20 to-transparent" />
                    <div className="absolute top-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-b from-blue-950/15 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-blue-950/15 to-transparent" />
                </div>

                <video
                    ref={vidRef}
                    src={video}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                    loop
                    muted
                    poster="/videos/preview.jpg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    tabIndex={0}
                />

                <button
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-black/60 backdrop-blur-sm text-white rounded-full p-2.5 md:p-3 shadow-xl hover:bg-blue-600/70 hover:scale-110 transition-all z-20 border border-white/20"
                    onClick={handlePlayPause}
                    tabIndex={0}
                    type="button"
                >
                    {isPlaying ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                            <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 md:w-5 md:h-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <polygon points="6,4 20,12 6,20" fill="currentColor" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}

function CountUpOnView({ value, inView }: { value: string; inView: boolean }) {
    const matches = value.match(/^(\d+)\+?\s/);
    if (matches) {
        return (
            <span>
        {inView ? <CountUp end={parseInt(matches[1])} duration={1.5} /> : matches[1]}
                {value.slice(matches[1].length)}
      </span>
        );
    }
    return <span>{value}</span>;
}
