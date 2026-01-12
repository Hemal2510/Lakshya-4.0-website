"use client";

import { motion } from "framer-motion";

const IMAGEKIT_BASE = "https://ik.imagekit.io/q3cb0c9v5/lakshya";

export default function ResourcesSection() {
    return (
        <section className="w-full flex flex-col items-center text-center px-6 my-28">
            {/* Animated heading */}
            <motion.h2
                className="text-4xl sm:text-5xl font-semibold text-white mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Event Resources
            </motion.h2>

            {/* Animated description */}
            <motion.p
                className="text-white/70 max-w-2xl mb-12 text-base sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
            >
                Get complete details about formats, rules, schedules, and participation
                guidelines. View the official documents below.
            </motion.p>

            {/* Animated buttons container */}
            <motion.div
                className="flex flex-col sm:flex-row gap-6"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <AnimatedButton
                    href={`${IMAGEKIT_BASE}/%20rulebook.pdf`}
                    label="View Rulebook (PDF)"
                />

                <AnimatedButton
                    href={`${IMAGEKIT_BASE}/Brochure.pdf`}
                    label="View Brochure (PDF)"
                />
            </motion.div>
        </section>
    );
}

/* -------------------- */
/* Animated Button     */
/* -------------------- */

function AnimatedButton({
                            href,
                            label,
                        }: {
    href: string;
    label: string;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
        group relative overflow-hidden
        px-10 py-4 rounded-xl
        font-medium text-white text-base lg:text-lg
        bg-gradient-to-r from-[#0b1f3a] via-[#0e2a52] to-[#0b1f3a]
        border border-white/10 hover:border-blue-400/50
        transition-all duration-300
        hover:scale-105 hover:shadow-[0_0_35px_rgba(0,140,255,0.4)]
      "
        >
            {/* Idle moving light */}
            <motion.span
                className="absolute inset-0 pointer-events-none"
                initial={{ x: -120 }}
                animate={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
            >
                <span
                    className="
            absolute -inset-y-full left-[-120%] w-[200%]
            bg-gradient-to-r from-transparent via-white/25 to-transparent
            rotate-12
          "
                />
            </motion.span>

            {/* Hover glow */}
            <motion.span
                className="
          absolute inset-0 opacity-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_60%)]
          transition-all duration-300
        "
                initial={{ scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
            />

            <span className="relative z-10 flex items-center gap-2">
                {label}
                <motion.span
                    className="text-blue-400"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    →
                </motion.span>
            </span>
        </a>
    );
}
