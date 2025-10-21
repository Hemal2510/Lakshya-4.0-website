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
        color: "from-orange-500 to-purple-600",
    },
    {
        icon: UsersIcon,
        count: 2500,
        label: "Total Participants",
        desc: "Total participants across all Lakshya editions",
        color: "from-purple-600 to-pink-500",
        suffix: "+",
    },
    {
        icon: BoltIcon,
        count: 15,
        label: "Sports Categories",
        desc: "Different sports and cultural categories",
        color: "from-pink-500 to-orange-400",
        suffix: "+",
    },
    {
        icon: TrophyIcon,
        count: 50,
        label: "Winning Colleges",
        desc: "Colleges that have participated and won",
        color: "from-red-500 to-yellow-400",
        suffix: "+",
    },
];

export default function LegacyStatsSection() {
    return (
        <section className="py-16">
            <div className="text-center mb-7">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <button className="px-5 py-1 rounded-full bg-gradient-to-br from-teal-400 via-blue-400 to-blue-800 text-white font-semibold shadow">
                        <span className="mr-2">🏆</span> Our Journey
                    </button>
                </motion.div>
                <h2 className="text-5xl font-extrabold mt-5 mb-2 text-violet-700">Legacy of Excellence</h2>
                <p className="text-lg text-cyan-200">
                    Four years of creating unforgettable sporting experiences, fostering competition,<br />
                    and building lasting memories across collegiate India.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center mt-10">
                {stats.map((s, idx) => {
                    const Icon = s.icon; // ADD THIS LINE
                    return (
                        <motion.div
                            key={s.label}
                            whileHover={{ scale: 1.08, boxShadow: "0 0 18px #fff" }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + idx * 0.1, duration: 0.7 }}
                            className="bg-teal-100 rounded-2xl shadow-xl shadow-purple-400  px-7 py-8 text-center border border-teal-400"
                        >
                            <div className={`inline-block p-4 rounded-full bg-gradient-to-br ${s.color} mb-3`}>
                                <Icon className="w-9 h-9 text-white drop-shadow" />
                            </div>
                            <div className="text-3xl font-extrabold text-gray-700 mb-2 flex items-center justify-center">
                                <CountUp end={s.count} duration={1.8} suffix={s.suffix || ""} />
                            </div>
                            <div className="text-orange-600 font-semibold mb-2">{s.label}</div>
                            <div className="text-gray-500 text-sm">{s.desc}</div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
