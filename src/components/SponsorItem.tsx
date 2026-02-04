"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SponsorItem({
                                        logo,
                                        label,           // e.g. "DRINKING", "FITNESS", "VEHICLE DEALERSHIP"
                                        size = "normal",
                                    }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            className="relative flex flex-col items-center gap-8 cursor-pointer"
            style={{ perspective: 1200 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
        >
            {/* BLUE GRADIENT GLOW */}
            <div
                className={`
          absolute -z-10 rounded-full blur-3xl
          ${size === "title" ? "w-96 h-96" : "w-72 h-72"}
          bg-gradient-to-br 
          from-blue-500/50 
          via-sky-400/40 
          to-indigo-600/50
          transition-opacity duration-300
          ${hovered ? "opacity-100" : "opacity-70"}
        `}
            />

            {/* LOGO */}
            <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ type: "spring", stiffness: 140, damping: 12 }}
                className={`
          flex items-center justify-center
          ${size === "title" ? "h-40 w-80" : "h-28 w-52"}
        `}
            >
                <img
                    src={logo}
                    alt="Sponsor Logo"
                    className="max-h-full max-w-full object-contain"
                />
            </motion.div>

            {/* TEXT (2 LINES, FULL 360 FLIP) */}
            <div className="h-20 flex items-center justify-center">
                <motion.div
                    animate={
                        hovered
                            ? {
                                rotateX: 360,
                                color: "#38bdf8",
                                textShadow: "0px 0px 14px rgba(56,189,248,0.85)",
                            }
                            : {
                                rotateX: 0,
                                color: "#ffffff",
                                textShadow: "none",
                            }
                    }
                    transition={{
                        duration: 0.45,
                        ease: "easeInOut",
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="
            text-center
            uppercase
            font-extrabold
            tracking-[0.4em]
            text-lg md:text-xl
            leading-tight
            whitespace-nowrap
          "
                >
                    <div>{label}</div>
                    <div>PARTNER</div>
                </motion.div>
            </div>
        </motion.div>
    );
}
