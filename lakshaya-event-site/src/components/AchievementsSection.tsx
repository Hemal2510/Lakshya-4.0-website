"use client";
import { motion } from "framer-motion";
import {
    StarIcon,
    TrophyIcon,
    GiftIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";

const achievements = [
    {
        icon: StarIcon,
        title: "Most Innovative Sports Fest",
        year: 2023,
        desc: "Recognized by National Sports Council",
    },
    {
        icon: TrophyIcon,
        title: "Best Student Organization",
        year: 2023,
        desc: "University Excellence Award",
    },
    {
        icon: GiftIcon,
        title: "Sustainability Champions",
        year: 2022,
        desc: "Green Event Certification",
    },
    {
        icon: SparklesIcon,
        title: "Community Impact Award",
        year: 2022,
        desc: "Local Government Recognition",
    },
];

export default function AchievementsSection() {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-[#0a0a0f]">

            {/* Animated Background Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top left blue glow */}
                <motion.div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/60 rounded-full blur-3xl"
                    animate={{
                        x: [-30, 30, -30],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Bottom right indigo glow */}
                <motion.div
                    className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-indigo-600/18 rounded-full blur-3xl"
                    animate={{
                        y: [-20, 20, -20],
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Center cyan accent */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto">

                {/* VERCEL-STYLE GLOWING HEADER */}
                <div className="flex flex-col items-center mb-16">
                    {/* Animated glowing badge */}
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
                            <GiftIcon className="w-6 h-6 text-blue-400" />
                            <span className="text-white font-semibold text-lg">Awards & Recognition</span>
                        </div>
                    </motion.div>

                    {/* Title with gradient text */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-4"
                    >
                        <span className="bg-gradient-to-r from-blue-200 via-white to-indigo-200 bg-clip-text text-transparent">
                            Achievements & Recognition
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-400 text-center max-w-2xl"
                    >
                        Celebrating excellence, innovation, and impact across our journey
                    </motion.p>
                </div>

                {/* Achievement Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((a, idx) => {
                        const Icon = a.icon;
                        return (
                            <motion.div
                                key={a.title}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                                className="group relative"
                            >
                                {/* Darker gradient glow on hover */}
                                <motion.div
                                    className="absolute -inset-0.5 bg-gradient-to-br from-blue-600/40 via-indigo-700/30 to-blue-800/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100"
                                    initial={{ scale: 0.9 }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.4, ease: "easeOut" }
                                    }}
                                />

                                {/* Card */}
                                <motion.div
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/10 group-hover:border-blue-400/50 transition-all duration-300 h-full flex flex-col items-center"
                                    whileHover={{
                                        y: -8,
                                        transition: { duration: 0.3, ease: "easeOut" }
                                    }}
                                >
                                    {/* Icon with animation */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: [0, -8, 8, 0],
                                            transition: {
                                                scale: { duration: 0.3 },
                                                rotate: { duration: 0.5, ease: "easeInOut" }
                                            }
                                        }}
                                        className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-600/20 border border-blue-500/30 mb-6"
                                    >
                                        <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                                    </motion.div>

                                    {/* Title */}
                                    <div className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                                        {a.title}
                                    </div>

                                    {/* Year badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/40 border border-blue-500/40 mb-3">
                                        <span className="text-blue-400 font-semibold text-sm">{a.year}</span>
                                    </div>

                                    {/* Description */}
                                    <div className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {a.desc}
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
