"use client";

import { motion } from "framer-motion";

export default function TitleSponsorSection() {
    return (
        <section className="py-40 px-8">
            {/* SECTION HEADING */}
            <h2 className="text-center text-7xl font-extrabold tracking-[0.35em] text-white mb-32">
                TITLE SPONSOR
            </h2>

            {/* TITLE SPONSOR LOGO */}
            <div className="flex justify-center relative">
                {/* BACKGROUND GLOW */}
                <div
                    className="
            absolute
            -z-10
            w-[32rem] h-[32rem]
            rounded-full
            blur-[120px]
            bg-gradient-to-br
            from-blue-500/60
            via-sky-400/50
            to-indigo-600/60
          "
                />

                {/* LOGO WITH AMBIENT MOTION */}
                <motion.div
                    animate={{
                        scale: [1, 1.04, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    whileHover={{
                        scale: 1.12,
                    }}
                    className="w-[28rem] h-[16rem] flex items-center justify-center"
                >
                    <img
                        src="/images/sponsors/sponsor7.jpg"
                        alt="Title Sponsor"
                        className="max-h-full max-w-full object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
}
