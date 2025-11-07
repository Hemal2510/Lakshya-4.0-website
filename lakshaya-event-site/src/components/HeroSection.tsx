"use client";
import { motion } from "framer-motion";

// Simple SVG examples for sports balls
const Balls = [
    { id: 'cricket', svg: <circle cx="20" cy="20" r="16" fill="#38bdf8" stroke="#fff" strokeWidth="4" /> },
    { id: 'football', svg: <circle cx="20" cy="20" r="16" fill="#6366f1" stroke="#fff" strokeWidth="4" /> },
    { id: 'basketball', svg: <circle cx="20" cy="20" r="16" fill="#a78bfa" stroke="#fff" strokeWidth="4" /> },
    { id: 'badminton', svg: <ellipse cx="20" cy="20" rx="12" ry="16" fill="#818cf8" stroke="#fff" strokeWidth="4" /> },
];

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center  overflow-hidden">



            {/* Blue radial glow accent */}
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[45rem] h-[19rem] rounded-full bg-gradient-to-br from-blue-700 via-indigo-700 to-transparent opacity-25 blur-2xl pointer-events-none"
                initial={{ scale: 1.1, opacity: 0.1 }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.22, 0.35, 0.26] }}
                transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Animated wave gradient heading */}
            <motion.h1
                className="relative z-10 mb-4 text-[8rem] sm:text-[6rem] md:text-[7rem] font-extrabold bg-clip-text text-transparent tracking-tight select-none hero-gradient"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                style={{
                    backgroundImage: 'linear-gradient(120deg, #38bdf8, #6366f1, #a78bfa, #38bdf8)',
                    backgroundSize: '400% 400%',
                    animation: 'waveGradient 4s ease-in-out infinite'
                }}
            >
                LAKSHYA 4.0
            </motion.h1>

            {/* Wave gradient keyframes */}
            <style>{`
        @keyframes waveGradient {
          0% { background-position: 0% 90%; }
          50% { background-position: 100% 10%; }
          100% { background-position: 0% 90%; }
        }
      `}</style>

            {/* Animated tagline */}
            <motion.p
                className="relative z-10 mb-12 text-4xl sm:text-5xl font-semibold italic text-blue-300 tracking-wide"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                style={{
                    textShadow: '0 2px 16px #38bdf8'
                }}
            >
                Defy the Odds
            </motion.p>

            {/* Buttons row with accent glow and motion */}
            <motion.div
                className="relative z-10 flex gap-8"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <motion.a
                    href="#register"
                    className="px-8 py-4 text-2xl rounded-xl font-bold text-white bg-blue-600/80 shadow-lg hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    whileHover={{ scale: 1.09, boxShadow: "0 0 32px #3b82f6" }}
                >
                    Register Now
                </motion.a>
                <motion.a
                    href="#events"
                    className="px-8 py-4 text-2xl rounded-xl font-bold text-blue-200 border-2 border-blue-400 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.07, boxShadow: "0 0 24px #818cf8" }}
                >
                    Explore Events
                </motion.a>
            </motion.div>
        </section>
    );
}
