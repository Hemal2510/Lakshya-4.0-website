"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    CalendarIcon,
    UsersIcon,
    TrophyIcon,
    BoltIcon,
} from "@heroicons/react/24/solid";

const stats = [
    {
        icon: CalendarIcon,
        count: 3,
        label: "Years of Excellence",
        desc: "Years of hosting excellence in sports and cultural events",
    },
    {
        icon: UsersIcon,
        count: 2500,
        label: "Total Participants",
        desc: "Total participants across all Lakshya editions",
        suffix: "+",
    },
    {
        icon: BoltIcon,
        count: 15,
        label: "Sports Categories",
        desc: "Different sports and cultural categories",
        suffix: "+",
    },
    {
        icon: TrophyIcon,
        count: 50,
        label: "Winning Colleges",
        desc: "Colleges that have participated and won",
        suffix: "+",
    },
];

export default function LegacyStatsSection() {
    return (
        <section className="py-32 relative isolate overflow-hidden bg-[#0a0a0f]">

            {/* Animated Background Glow - Using Tailwind Colors */}
            <div className="absolute inset-0 z-0">

                {/* Main pulsing bottom glow */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/40 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Secondary intense glow */}
                <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/40 rounded-full blur-3xl"
                    animate={{
                        opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Top subtle glow */}
                <motion.div
                    className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-blue-800/40 rounded-full blur-2xl"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>


            {/* Content */}
            <div className="relative z-10">
                {/* Header - VERCEL STYLE */}
                <div className="flex flex-col items-center mb-16 max-w-4xl mx-auto px-6">

                    {/* Animated Glowing Badge */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring", damping: 14 }}
                        className="relative mb-8"
                    >
                        {/* Animated rotating gradient glow */}
                        <motion.div
                            className="absolute -inset-1 rounded-full blur-md opacity-75 pointer-events-none"
                            style={{
                                background: 'linear-gradient(90deg, #38bdf8, #6366f1, #8b5cf6, #38bdf8)',
                                backgroundSize: '200% 200%',
                            }}
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                        />

                        {/* Badge */}
                        <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0f172a] border border-blue-400/50 backdrop-blur-xl shadow-lg shadow-blue-900/20">
                            <span className="text-2xl">🏆</span>
                            <span className="text-white font-semibold text-lg">Our Journey</span>
                        </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-6xl font-bold mb-4 tracking-tight"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
                            Legacy of Excellence
                        </span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed text-center"
                    >
                        Four years of creating unforgettable sporting experiences, fostering competition,
                        <br className="hidden sm:block" />
                        and building lasting memories across collegiate India.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
                    {stats.map((s, idx) => {
                        const Icon = s.icon;
                        return (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: 0.1 + idx * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="group relative"
                            >
                                {/* Expanding gradient glow on hover - ANIMATED */}
                                <motion.div
                                    className="absolute -inset-1 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 rounded-2xl blur-lg opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0.8 }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                />

                                {/* Card with lift animation */}
                                <motion.div
                                    className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 group-hover:border-blue-400/50 transition-all duration-300 h-full"
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >

                                    {/* Icon with pulse animation on hover */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/20 mb-6"
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: [0, -5, 5, 0],
                                            transition: {
                                                scale: { duration: 0.3 },
                                                rotate: { duration: 0.5, ease: "easeInOut" }
                                            }
                                        }}
                                    >
                                        <Icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                    </motion.div>

                                    {/* Count */}
                                    <div className="text-5xl font-black text-white mb-3 tracking-tight group-hover:text-blue-100 transition-colors">
                                        <CountUp
                                            end={s.count}
                                            duration={2}
                                            suffix={s.suffix || ""}
                                            enableScrollSpy
                                            scrollSpyOnce
                                        />
                                    </div>

                                    {/* Label with slide-up animation on hover */}
                                    <motion.div
                                        className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3 group-hover:text-blue-300 transition-colors"
                                    >
                                        {s.label}
                                    </motion.div>

                                    {/* Description */}
                                    <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {s.desc}
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
