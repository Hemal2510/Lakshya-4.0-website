"use client";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import CountUp from "react-countup";

const years = [
    {
        year: 2022,
        title: "Lakshya 1.0 – Genesis",
        motto: "Breaking Barriers",
        desc: "The inaugural edition that set the foundation.",
        highlights: ["500+ participants", "10 sports categories", "Regional recognition"],
        special: "First ever inter-college championship",
        video: "https://www.youtube.com/embed/0K_9ZkeVoP8",
    },
    {
        year: 2023,
        title: "Lakshya 2.0 – Evolution",
        motto: "Raising the Bar",
        desc: "Expanded reach and enhanced competition.",
        highlights: ["800+ participants", "12 sports categories", "State-level participation"],
        special: "Record breaking attendance",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        year: 2024,
        title: "Lakshya 3.0 – Excellence",
        motto: "Unleash the Spirit",
        desc: "Setting new standards in collegiate sports.",
        highlights: ["1200+ participants", "15 sports categories", "National recognition"],
        special: "Most competitive edition",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
];

export default function LakshyaTimelineSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#0a0a0f]">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-blue-950/10 to-[#0a0a0f]" />
            </div>

            {/* Header */}
            <div className="relative z-10 flex flex-col items-center mb-20 px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
                    Lakshya Through the Years
                </h2>
            </div>

            {/* Timeline */}
            <div className="relative max-w-7xl mx-auto px-4 z-10 flex flex-col gap-28">
                {years.map((event, idx) => (
                    <TimelineYearBlock key={event.year} {...event} right={idx % 2 === 1} />
                ))}
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
        <div
            className={`grid gap-12 items-center
        grid-cols-1
        md:grid-cols-2
        ${
                right
                    ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                    : ""
            }
      `}
        >
            {/* CARD */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, x: right ? 100 : -100, scale: 0.95 }}
                animate={controls}
                transition={{ duration: 0.7, ease: "backOut" }}
                className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl px-8 py-8 border border-white/10"
            >
        <span className="absolute -top-6 left-6 px-4 py-1 rounded-full bg-blue-600 text-white font-bold">
          {year}
        </span>

                <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                <p className="italic text-blue-300 mb-3">"{motto}"</p>
                <p className="text-gray-300 mb-4">{desc}</p>

                <ul className="space-y-1 text-sm text-gray-300">
                    {highlights.map((h: string, i: number) => (
                        <li key={i}>
                            • <CountUpOnView value={h} inView={inView} />
                        </li>
                    ))}
                </ul>

                <div className="mt-4 text-blue-400 text-sm">✨ {special}</div>
            </motion.div>

            {/* VIDEO */}
            <VideoEmbed video={video} />
        </div>
    );
}

/* YouTube video – full space, mobile safe */
function VideoEmbed({ video }: { video: string }) {
    return (
        <div className="relative w-full aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black">
            <iframe
                src={video}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
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
