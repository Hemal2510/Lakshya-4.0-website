"use client";

const LAKSHYA_LOGO = "/images/logo.png"; // Update as needed
import TextType from "@/components/TextType";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-20">
            {/* Subtle blue radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68rem] h-[34rem] rounded-full bg-gradient-to-br from-blue-800 via-indigo-900 to-transparent opacity-15 blur-2xl pointer-events-none"
            />

            {/* Main Content:
          - phones & tabs: column (image top, text below)
          - large screens (lg+): row (image left, text right)
      */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 px-4">
                {/* Image block */}
                <div className="flex flex-1 items-center justify-center mb-6 lg:mb-0">
                    <img
                        src={LAKSHYA_LOGO}
                        alt="Lakshya Logo"
                        className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Text + buttons block */}
                <div className="flex flex-col justify-center items-center lg:items-start flex-1 text-center lg:text-left">
                    {/* Title */}
                    <div className="flex flex-col items-center lg:items-start">
            <span
                className="text-[2.4rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.2rem]
                         font-extrabold bg-clip-text text-transparent hero-gradient tracking-tight drop-shadow-lg"
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

                    {/* Typed subheading */}
                    <p
                        className="text-lg sm:text-2xl md:text-3xl font-semibold italic text-blue-200 mt-4 sm:mt-6 mb-4 text-center lg:text-left"
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
                        />
                    </p>

                    {/* Main buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-8 mt-2 sm:mt-4 w-full sm:w-auto">
                        <a
                            href="#register"
                            className="px-8 py-4 text-lg sm:text-xl md:text-2xl rounded-xl font-bold text-white
                         bg-blue-600/90 shadow-lg hover:bg-blue-700/90
                         focus:outline-none focus:ring-2 focus:ring-blue-300
                         transition-all duration-300 text-center"
                        >
                            Register
                        </a>
                        <a
                            href="#events"
                            className="px-8 py-4 text-lg sm:text-xl md:text-2xl rounded-xl font-bold text-blue-200
                         border-2 border-blue-400 bg-blue-400/10
                         hover:bg-blue-400/20 hover:text-white
                         transition-all duration-300 text-center"
                        >
                            Events
                        </a>
                    </div>

                    {/* Gallery button */}
                    <div className="w-full flex justify-center lg:justify-start px-0 sm:px-4 mt-5 sm:mt-6">
                        <a
                            href="#gallery"
                            className="inline-flex items-center gap-2
                         rounded-full bg-blue-600/90 px-6 py-3
                         text-sm sm:text-base font-semibold text-white
                         shadow-lg shadow-blue-500/40
                         hover:-translate-y-0.5 hover:scale-[1.02]
                         border border-blue-400/60
                         transition-all duration-300"
                        >
                            View Gallery
                            <span className="text-lg leading-none">↓</span>
                        </a>
                    </div>
                </div>

                <style>{`
          @keyframes waveGradient {
            0% { background-position: 0% 90%; }
            50% { background-position: 100% 10%; }
            100% { background-position: 0% 90%; }
          }
        `}</style>
            </div>
        </section>
    );
}
