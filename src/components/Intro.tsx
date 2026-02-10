"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextType from "@/components/TextType";
import Head from "next/head";

const LAKSHYA_LOGO = "/images/logo.png";
const VIDEO_SRC =
  `https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}/lakshya/intro.mp4`;

export default function IntroHero() {
    const [videoDone, setVideoDone] = useState(false);
    const [split, setSplit] = useState(false); // used to move hero up after video

    // Lock scroll while intro video plays
    useEffect(() => {
        document.body.style.overflow = videoDone ? "" : "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [videoDone]);

    // Mark video as done after N ms (match your video length)
    useEffect(() => {
        const t = setTimeout(() => setVideoDone(true), 7000);
        return () => clearTimeout(t);
    }, []);

    // Trigger "move up" animation slightly after video ends
    useEffect(() => {
        if (videoDone) {
            const t = setTimeout(() => setSplit(true), 200);
            return () => clearTimeout(t);
        }
    }, [videoDone]);

    return (
        <>
           <Head>
        <link
          rel="preload"
          href={VIDEO_SRC}
          as="video"
          type="video/mp4"
        />
      </Head>
        <div className="relative w-full min-h-screen overflow-hidden">
            
            {/* Intro video overlay */}
            <AnimatePresence>
                {!videoDone && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        exit={{ opacity: 0, transition: { duration: 0.7 } }}
                    >
                        <video
                            src={VIDEO_SRC}
                            autoPlay
                            playsInline
                            muted
                            // Bigger on phone: fill viewport height while keeping aspect
                            className="h-screen w-auto max-w-none object-contain sm:h-auto sm:max-w-full sm:max-h-full"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero after video */}
            <motion.section
                className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-20"
                initial={false}
                animate={{ opacity: 1 }}
            >
                {/* Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68rem] h-[34rem] rounded-full bg-gradient-to-br from-blue-800 via-indigo-900 to-transparent opacity-15 blur-2xl pointer-events-none" />

                {/* Centered stack that moves slightly UP after intro */}
                <motion.div
                    className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-4"
                    animate={{
                        y: split ? -40 : 0,
                        scale: split ? 0.95 : 1,
                    }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                    {/* Logo */}
                    <motion.div className="flex items-center justify-center mb-4" layout>
                        <img
                            src={LAKSHYA_LOGO}
                            alt="Lakshya Logo"
                            className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[360px] object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Title + typed text + buttons */}
                    <motion.div
                        className="flex flex-col justify-center items-center text-center"
                        layout
                    >
                        <div className="flex flex-col items-center">
              <span
                  className="text-[2.4rem] sm:text-[3.4rem] md:text-[4.2rem] lg:text-[4.8rem] font-extrabold bg-clip-text text-transparent tracking-tight drop-shadow-lg"
                  style={{
                      backgroundImage:
                          "linear-gradient(120deg, #38bdf8 15%, #6366f1 55%, #a78bfa 90%)",
                      backgroundSize: "400% 400%",
                      animation: "waveGradient 4s ease-in-out infinite",
                      lineHeight: 1.05,
                  }}
              >
                LAKSHYA 4.0
              </span>
                        </div>

                        <div
                            className="text-lg sm:text-2xl md:text-3xl font-semibold italic text-blue-200 mt-4 sm:mt-6 mb-4 text-center"
                            style={{
                                textShadow: "0 2px 24px #38bdf8",
                            }}
                        >
                            <TextType
                                text={[
                                    "Defy the Odds",
                                    "Central India's largest sports fest",
                                ]}
                                typingSpeed={40}
                                deletingSpeed={30}
                                pauseDuration={1700}
                                showCursor={true}
                                cursorCharacter="|"
                            />
                        </div>

                        {/* Main buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-2 sm:mt-4 w-full sm:w-auto">
                            <a
                                href="https://registration.iiti.ac.in/lakshya26/"
                                className="px-8 py-4 text-lg sm:text-xl md:text-2xl rounded-xl font-bold text-white
                           bg-blue-600/90 shadow-lg hover:bg-blue-700/90
                           focus:outline-none focus:ring-2 focus:ring-blue-300
                           transition-all duration-300 text-center"
                            >
                                Register
                            </a>
                            <a
                                href="events"
                                className="px-8 py-4 text-lg sm:text-xl md:text-2xl rounded-xl font-bold text-blue-200
                           border-2 border-blue-400 bg-blue-400/10
                           hover:bg-blue-400/20 hover:text-white
                           transition-all duration-300 text-center"
                            >
                                Event
                            </a>
                        </div>

                        {/* Gallery button */}
                        <div className="w-full flex justify-center px-0 sm:px-4 mt-5 sm:mt-6">
                            <a
                                href="#gallery"
                                className="inline-flex items-center gap-2
                           rounded-full bg-blue-600/90 px-6 py-3
                           text-sm sm:text-base font-semibold text-white
                           shadow-lg shadow-blue-500/40
                           hover:bg-blue-500 hover:shadow-blue-400/60
                           hover:-translate-y-0.5 hover:scale-[1.02]
                           border border-blue-400/60
                           transition-all duration-300"
                            >
                                View Gallery
                                <span className="text-lg leading-none">↓</span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <style>{`
          @keyframes waveGradient {
            0% { background-position: 0% 90%; }
            50% { background-position: 100% 10%; }
            100% { background-position: 0% 90%; }
          }
        `}</style>
            </motion.section>
        </div>
        </>
    );
}
