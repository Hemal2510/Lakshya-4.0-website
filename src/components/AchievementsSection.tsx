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
        color: "from-pink-500 to-purple-600",
    },
    {
        icon: TrophyIcon,
        title: "Best Student Organization",
        year: 2023,
        desc: "University Excellence Award",
        color: "from-pink-500 to-purple-600",
    },
    {
        icon: GiftIcon,
        title: "Sustainability Champions",
        year: 2022,
        desc: "Green Event Certification",
        color: "from-pink-500 to-purple-600",
    },
    {
        icon: SparklesIcon,
        title: "Community Impact Award",
        year: 2022,
        desc: "Local Government Recognition",
        color: "from-pink-500 to-purple-600",
    },
];

export default function AchievementsSection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
            <h2 className="text-4xl font-extrabold text-white mb-12 flex items-center gap-3">
                <GiftIcon className="w-10 h-10 text-pink-400" />
                Achievements & Recognition
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {achievements.map((a, idx) => {
                    const Icon = a.icon;
                    return (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: idx * 0.18, duration: 0.6, type: "spring" }}
                            whileHover={{ scale: 1.08, boxShadow: "0 0 40px #f472b6" }}
                            className="bg-blue-950 rounded-2xl p-7 text-center shadow-xl flex flex-col items-center border-2 border-blue-800 transition-all"
                        >
                            <motion.div
                                whileHover={{
                                    scale: 1.14,
                                    rotate: -12,
                                    boxShadow: "0 0 28px #a78bfa"
                                }}
                                transition={{ type: "spring", stiffness: 360 }}
                                className={`p-5 rounded-full bg-gradient-to-br ${a.color} mb-4`}
                            >
                                <Icon className="w-10 h-10 text-white drop-shadow" />
                            </motion.div>
                            <div className="text-xl font-bold text-white mb-2">{a.title}</div>
                            <div className="text-orange-400 font-semibold mb-1 text-lg">{a.year}</div>
                            <div className="text-blue-200 text-sm">{a.desc}</div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
