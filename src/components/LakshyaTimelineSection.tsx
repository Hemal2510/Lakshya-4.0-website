"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { TrophyIcon } from "@heroicons/react/24/solid";

const years = [
    {
        year: 2022,
        title: "Lakshya 1.0 – Genesis",
        motto: "Breaking Barriers",
        desc: "The inaugural edition that set the foundation.",
        highlights: [
            "500+ participants",
            "10 sports categories",
            "Regional recognition",
        ],
        champion: "St. Joseph's College",
        championColor: "text-purple-600",
        special: "First ever inter-college championship",
        video: "/videos/lakshya1.mp4"
    },
    {
        year: 2023,
        title: "Lakshya 2.0 – Evolution",
        motto: "Raising the Bar",
        desc: "Expanded reach and enhanced competition.",
        highlights: [
            "800+ participants",
            "12 sports categories",
            "State-level participation",
        ],
        champion: "Christ University",
        championColor: "text-purple-600",
        special: "Record breaking attendance",
        video: "/videos/lakshya2.mp4"
    },
    {
        year: 2024,
        title: "Lakshya 3.0 – Excellence",
        motto: "Unleash the Spirit",
        desc: "Setting new standards in collegiate sports.",
        highlights: [
            "1200+ participants",
            "15 sports categories",
            "National recognition",
        ],
        champion: "PES University",
        championColor: "text-purple-600",
        special: "Most competitive edition",
        video: "/videos/lakshya3.mp4"
    },
    ,
];

export default function LakshyaTimelineSection() {
    return (
        <section className="py-16 relative">
            <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-tight">
                Lakshya Through the Years
            </h2>
            <div className="relative max-w-7xl mx-auto px-4">
                {/* Central vertical line */}
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-teal-400 via-blue-400 to-blue-800 opacity-60 z-0" />
                <div className="flex flex-col gap-32 relative z-10">
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
                               champion,
                               championColor,
                               special,
                               video,
                               right
                           }: any) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, x: 0, scale: 1 });
    }, [inView, controls]);

    return (
        <div className="grid grid-cols-2 gap-10 items-center w-full min-h-[390px]">
            {!right ? (
                <>
                    {/* Video on Left */}
                    <div className="flex justify-end">
                        <VideoHoverPreview video={video} />
                    </div>
                    {/* Card on Right */}
                    <div className="flex justify-start">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: 100, scale: 0.95 }}
                            animate={controls}
                            transition={{ duration: 0.7, ease: "backOut" }}
                            whileHover={{ scale: 1.04, boxShadow: "0 0 32px #38bdf8", y: -6 }}
                            className="bg-white/90 rounded-xl shadow-xl px-8 py-8 max-w-xl relative z-10"
                        >
                            <TimelineCard
                                year={year}
                                title={title}
                                motto={motto}
                                desc={desc}
                                highlights={highlights}
                                champion={champion}
                                championColor={championColor}
                                special={special}
                                inView={inView}
                                right={false}
                            />
                        </motion.div>
                    </div>
                </>
            ) : (
                <>
                    {/* Card on Left */}
                    <div className="flex justify-end">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: -100, scale: 0.95 }}
                            animate={controls}
                            transition={{ duration: 0.7, ease: "backOut" }}
                            whileHover={{ scale: 1.04, boxShadow: "0 0 32px #38bdf8", y: -6 }}
                            className="bg-white/90 rounded-xl shadow-xl px-8 py-8 max-w-xl relative z-10"
                        >
                            <TimelineCard
                                year={year}
                                title={title}
                                motto={motto}
                                desc={desc}
                                highlights={highlights}
                                champion={champion}
                                championColor={championColor}
                                special={special}
                                inView={inView}
                                right={true}
                            />
                        </motion.div>
                    </div>
                    {/* Video on Right */}
                    <div className="flex justify-start">
                        <VideoHoverPreview video={video} />
                    </div>
                </>
            )}
        </div>
    );
}

function TimelineCard({ year, title, motto, desc, highlights, champion, championColor, special, inView, right }: any) {
    return (
        <>
            {/* Animated year badge */}
            <motion.div
                initial={{ scale: 0.5, rotate: -20, opacity: 0 }}
                animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.2 }}
                className={`absolute -top-8 ${right ? "-left-24" : "-right-24"} flex flex-col items-center`}
            >
        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-400 to-purple-500 text-white font-bold text-xl shadow">
          {year}
        </span>
                <TrophyIcon className="mt-1 w-6 h-6 text-orange-300" />
            </motion.div>

            <h3 className="text-2xl font-extrabold text-blue-900 mb-1">{title}</h3>
            <Motto moto={motto} />
            <p className="text-gray-700 mb-3">{desc}</p>

            <div className="mb-2 font-bold text-gray-800">Highlights:</div>
            <ul className="ml-3 mb-3 text-gray-700 text-base">
                {highlights.map((txt: string, i: number) => (
                    <li key={i} className="list-disc">
                        <CountUpOnView value={txt} inView={inView} />
                    </li>
                ))}
            </ul>

            <div className="mb-3">
                <span className="text-sm text-gray-600 font-semibold">Champion:</span>
                <ChampionAnim champion={champion} color={championColor} inView={inView} />
            </div>

            <div className="bg-orange-50 rounded-xl px-4 py-2 mt-3 text-orange-600 font-semibold shadow-inner">
                {special}
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
        <div className="relative rounded-2xl shadow-xl overflow-hidden bg-blue-900/70 group w-[600px] h-[340px]">
            <video
                ref={vidRef}
                src={video}
                className="w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-105"
                loop
                muted
                poster="/videos/preview.jpg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                tabIndex={0}
            />
            <button
                className="absolute bottom-4 right-4 bg-black/70 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-all z-10"
                onClick={handlePlayPause}
                tabIndex={0}
                type="button"
            >
                {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
                        <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <polygon points="6,4 20,12 6,20" fill="currentColor" />
                    </svg>
                )}
            </button>
        </div>
    );
}

function Motto({ moto }: { moto: string }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08, color: "#0ea5e9" }}
            className="text-lg font-semibold text-purple-600 italic mb-2 cursor-pointer transition"
        >
            {moto}
        </motion.div>
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

function ChampionAnim({ champion, color, inView }: any) {
    return (
        <span className={`ml-2 font-bold ${color} text-lg`}>
      <motion.span
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={inView ? { scale: 1.17, opacity: 1, color: "#a21caf" } : {}}
          transition={{ type: "spring", stiffness: 380, damping: 18 }}
      >
        {champion}
      </motion.span>
    </span>
    );
}


