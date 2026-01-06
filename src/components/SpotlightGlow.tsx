





"use client";

import { animate, motion, setStyle, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "tailwindcss";
import { cn } from "@/lib/utils";
// import { ParallaxScroll } from "@/components/parallel-scroll";
import { useAnimation } from "framer-motion";
import { Spotlight } from "./Spotlight";

import  { WobbleCard}  from "@/components/WobbleCard";
import { useMotionValue } from "framer-motion";

const sponsors = [
  { id: 1, name: "Trek on India", logo:"/images/sponsors/sponsor1.jpg" },
  { id: 2, name: "The Fit Squad", logo:"/images/sponsors/sponsor2.jpg" },
  { id: 3, name: "Edu Vitae", logo: "/images/sponsors/sponsor3.jpg" },
  { id: 4, name: "Clicktra", logo: "/images/sponsors/sponsor4.jpg" },
  { id: 5, name: "NoticeBard", logo: "/images/sponsors/sponsor5.jpg" },
  { id: 6, name: "STARTUPVISORS", logo: "/images/sponsors/sponsor6.jpg" },
  { id: 7, name: "Red Bull", logo: "/images/sponsors/sponsor7.jpg" },
  { id: 8, name: "Domino's Pizza ", logo: "/images/sponsors/sponsor8.jpg" },
  { id: 9, name: "Decathlon", logo: "/images/sponsors/sponsor9.jpg" },
  { id: 10, name: "ixigo", logo: "/images/sponsors/sponsor10.jpg" },
  { id: 11, name: "Bharat Petroleum", logo: "/images/sponsors/sponsor11.jpg" },
  { id: 12, name: "Belgian Waffles", logo: "/images/sponsors/sponsor12.jpg" },
  { id: 13, name: "Geeks for Geeks", logo: "/images/sponsors/sponsor13.jpg" },
];



export default function SponsorsPage() {
  const [gradientPos, setGradientPos] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = (currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    const y = ((clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x: `${x}%`, y: `${y}%` });
  };

  return (
    <div className="flex flex-col h-screen w-full bg-[#0b0c10] text-white overflow-hidden">
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT SECTION */}
        <div
          className="w-[40%] flex items-center justify-center relative"
          onMouseMove={handleMouseMove}
        >
          {/* Background grid */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [background-size:40px_40px]",
              "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
            )}
          />

          {/* Section heading */}
          <div className="absolute top-[10%] text-center z-30">
            <h1 className="mt-3 text-2xl md:text-3xl font-extrabold text-neutral-200 tracking-tight">
              OUR SPONSORS
            </h1>
            <p className="mt-2 text-base md:text-lg text-neutral-400 max-w-xl mx-auto px-4">
              We're proud to be supported by brands that believe in creativity and innovation.
            </p>
          </div>

          {/* TEXT + SPOTLIGHT */}
          <div className="relative z-10 mx-auto w-full max-w-7xl text-center p-4 pt-24 md:pt-0">

            {/* Spotlight effect */}
            <Spotlight
              className="-top-40 left-1/2 -translate-x-1/2"
              fill="white"
            />

            {/* Coca-Cola Heading */}
            <h2
              className="relative text-5xl md:text-7xl font-extrabold tracking-tight select-none
                         bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent"
            >
              COCA-COLA
            </h2>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[60%] relative overflow-hidden">
          <InfiniteScrollGrid />
        </div>

      </div>
    </div>
  );

}



function InfiniteScrollGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const height = scrollRef.current.scrollHeight / 2;

    // ✅ Start animation ONCE
    animationRef.current = animate(y, -height, {
      duration: 18,         
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    });

    return () => animationRef.current?.stop();
  }, []);

  const pauseScroll = () => {
    animationRef.current?.pause();
  };

  const resumeScroll = () => {
    animationRef.current?.play(); // ✅ resumes from SAME position
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        ref={scrollRef}
        style={{ y }}
        className="absolute top-0 left-0 right-0 grid grid-cols-3 gap-8 p-10"
      >
        {[...sponsors, ...sponsors].map((s, i) => (
          <WobbleCard
            key={i}
            onHoverStart={pauseScroll}
            onHoverEnd={resumeScroll}
            containerClassName="h-[280px] cursor-pointer"
          >
            <div className="  w-[300px] h-[160px] overflow-hidden rounded-md ">
              <img
                src={s.logo}
                alt={s.name}
                className=" w-full h-full object-cover"
              />
            </div>
          </WobbleCard>
        ))}
      </motion.div>
    </div>
  );
}







