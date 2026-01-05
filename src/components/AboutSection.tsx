"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import imageKitLoader from "@/lib/imagekitLoader";

const photos = [
  "/lakshya/about/sport0.jpg",
  "/lakshya/about/sport1.jpg",
  "/lakshya/about/sport2.jpg",
  "/lakshya/about/sport3.jpg",
  "/lakshya/about/sport4.jpg",
  "/lakshya/about/sport5.jpg",
  "/lakshya/about/sport6.jpg",
  "/lakshya/about/sport7.jpg",
  "/lakshya/about/sport8.jpg",
  "/lakshya/about/sport9.jpg",
];

const AUTO_PLAY_INTERVAL = 4000;
const IMAGE_HEIGHT = 340;

export default function AboutUsSplitCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  /* 🔥 PRELOAD ALL IMAGES ONCE */
  useEffect(() => {
    photos.forEach((src) => {
      const img = new window.Image();
      img.src = imageKitLoader({ src, width: 800 });
    });
  }, []);

  /* 🔁 AUTOPLAY */
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection("down");
      setIndex((i) => (i + 1) % photos.length);
    }, AUTO_PLAY_INTERVAL);
  };

  useEffect(() => {
    resetTimer();
    return () => timerRef.current && clearInterval(timerRef.current);
  }, []);

  const nextPhoto = () => {
    setDirection("down");
    setIndex((i) => (i + 1) % photos.length);
    resetTimer();
  };

  const prevPhoto = () => {
    setDirection("up");
    setIndex((i) => (i - 1 + photos.length) % photos.length);
    resetTimer();
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center my-16 px-4">
      {/* LEFT — CAROUSEL */}
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-white/10 max-w-lg w-full h-[340px]">
          {/* IMAGE STACK (NO REMOUNTING) */}
          {photos.map((src, i) => {
            const isActive = i === index;
            return (
              <motion.div
                key={src}
                className="absolute inset-0"
                animate={{
                  y: isActive
                    ? 0
                    : direction === "down"
                    ? -IMAGE_HEIGHT
                    : IMAGE_HEIGHT,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                style={{ zIndex: isActive ? 2 : 1 }}
              >
                <Image
                  loader={imageKitLoader}
                  src={src}
                  alt={`Lakshya Event Image ${i + 1}`}
                  fill
                  className="object-cover"
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </motion.div>
            );
          })}

          {/* CONTROLS */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-blue-900/70 rounded-full text-white z-30"
          >
            ←
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-blue-900/70 rounded-full text-white z-30"
          >
            →
          </button>
        </div>
      </div>

      {/* RIGHT — CONTENT */}
      <div className="w-full md:w-1/2 md:pl-12 text-center mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-blue-100 mb-5">
          About Us
        </h2>

        <p className="text-blue-300 max-w-md mx-auto mb-7">
          Lakshya, IIT Indore’s flagship sports fest, is where adrenaline meets ambition.
          It’s more than competition — it’s celebration, grit, and glory.
        </p>

        <div className="flex gap-10 justify-center">
          <StatCircle value="2500+" label="Participants" />
          <StatCircle value="12+" label="Sports" />
          <StatCircle value="50+" label="Institutes" />
        </div>
      </div>
    </section>
  );
}

/* 🔵 STAT COMPONENT */
function StatCircle({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-blue-800/50 border border-blue-700 text-2xl font-bold text-blue-200 flex items-center justify-center mb-1">
        {value}
      </div>
      <span className="text-xs text-blue-100 font-semibold">
        {label}
      </span>
    </div>
  );
}
