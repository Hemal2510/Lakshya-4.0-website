"use client";

import { motion } from "framer-motion";

export default function TitleSponsorSection() {
    return (
        <section className="pb-4 pt-32 md:pt-44 px-8 text-center relative overflow-hidden">
            {/* Very faint ambient glow - stays totally still */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] md:w-[60rem] h-[20rem] md:h-[40rem] bg-blue-600/5 blur-[120px] rounded-full -z-10" />

            {/* Responsive Heading: One line on Desktop, Forced Two on Mobile */}
            <motion.h2
                layoutId="title-heading"
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[0.15em] md:tracking-[0.35em] text-white mb-12 md:mb-20 px-4 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6"
            >
                <span>TITLE</span>
                <span>SPONSOR</span>
            </motion.h2>

            <div className="relative flex justify-center px-4">
                {/* The Logo: NO animate prop. It lands here and STOPS. */}
                <motion.div
                    layoutId="title-sponsor-logo"
                    className="w-[15rem] sm:w-[24rem] md:w-[30rem] h-auto flex items-center justify-center"
                >
                    <img
                        src="/images/sponsors/sponsor7.jpg"
                        alt="Title Sponsor"
                        className="max-h-full max-w-full object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
                    />
                </motion.div>
            </div>

            <div className="mt-16 w-32 h-px bg-blue-800/40 mx-auto" />

            <motion.p
                layoutId="title-quote"
                className="mt-12 text-base md:text-2xl text-blue-400/70 italic max-w-2xl mx-auto px-4 font-medium"
            >
                “Powering champions. Fueling ambition.”
            </motion.p>
        </section>
    );
}