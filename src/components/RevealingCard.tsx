

"use client";

import { motion } from "framer-motion";
// import { EyeOff } from "lucide-react"; 
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function RevealingSoonCard() {
  return (
      <div className="relative h-full w-full overflow-hidden justify-center items-center">
    <motion.div
      whileHover={{ scale: 1 , boxShadow: "0 0 25px rgba(59,130,246,0.3)" }}
      transition={{ duration: 0.3 }}
      className="relative bg-[#111] border border-[#1f2937] rounded-2xl w-84 h-92 flex flex-col items-center justify-self-center justify-center overflow-hidden group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500" />
      {/* Animated blur ring */}
      <motion.div
        className="absolute w-84 h-82 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeIn" }}
      />

      {/* Icon */}
      {/* <EyeOff className="w-12 h-12 text-blue-400 mb-3 z-10" strokeWidth={1.5} /> */}
      <SparklesIcon className="w-12 h-12 text-blue-400 mb-3 z-10" strokeWidth={1.5} />

      {/* Text */}
      <h2 className="text-white text-2xl font-semibold z-10">Revealing Soon</h2>
      <p className="text-neutral-400 text-sm mt-2 z-10">
        {/* Stay tuned for the surprise! */}
      </p>
    </motion.div>
    </div>
  );
}


























