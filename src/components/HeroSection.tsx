"use client";
const LAKSHYA_LOGO = "/images/logo.png"; // Update as needed

export default function HeroSection() {
    return (
        <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-20">
            {/* Subtle blue radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68rem] h-[34rem] rounded-full bg-gradient-to-br from-blue-800 via-indigo-900 to-transparent opacity-15 blur-2xl pointer-events-none"
            />

            {/* Main Content Grid: Logo Left, Text/Buttons Right */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-row items-center justify-center gap-10 md:gap-28 px-4">
                {/* Left: Big Logo */}
                <div className="flex flex-1 items-center justify-center">
                    <img
                        src={LAKSHYA_LOGO}
                        alt="Lakshya Logo"
                        className="w-[28dc0px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-2xl"
                    />
                </div>
                {/* Right: Everything else, vertically centered */}
                <div className="flex flex-col justify-center items-center flex-1">
                    {/* LAKSHYA 4.0 at top, big */}
                    <div className="flex flex-col items-center">
                        <span
                            className="text-[2.8rem] sm:text-[5.1rem] md:text-[6.3rem] lg:text-[7.1rem] font-extrabold bg-clip-text text-transparent hero-gradient tracking-tight drop-shadow-lg whitespace-nowrap"
                            style={{
                                backgroundImage: 'linear-gradient(120deg, #38bdf8 15%, #6366f1 55%, #a78bfa 90%)',
                                backgroundSize: '400% 400%',
                                animation: 'waveGradient 4s ease-in-out infinite',
                                lineHeight: 1.01
                            }}
                        >
                        LAKSHYA 4.0
                        </span>
                    </div>
                    {/* Centered Defy the Odds */}
                    <p
                        className="text-2xl sm:text-3xl md:text-4xl font-semibold italic text-blue-200 mt-6 mb-4 text-center"
                        style={{
                            textShadow: "0 2px 24px #38bdf8"
                        }}
                    >
                        Defy the Odds
                    </p>
                    {/* Buttons group, large and centered directly below everything */}
                    <div className="flex justify-center gap-10 mt-4">
                        <a
                            href="#register"
                            className="px-10 py-5 text-xl md:text-2xl rounded-xl font-bold text-white bg-blue-600/90 shadow-lg hover:bg-blue-700/90 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                        >
                            Register
                        </a>
                        <a
                            href="#events"
                            className="px-10 py-5 text-xl md:text-2xl rounded-xl font-bold text-blue-200 border-2 border-blue-400 bg-blue-400/10 hover:bg-blue-400/20 hover:text-white transition-all duration-300"
                        >
                            Event
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
