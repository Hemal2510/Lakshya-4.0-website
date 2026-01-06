"use client";

export default function ResourcesSection() {
    return (
        <section className="w-full flex flex-col items-center text-center px-6 my-28">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-semibold text-white mb-4">
                Event Resources
            </h2>

            {/* Description */}
            <p className="text-white/70 max-w-2xl mb-12 text-base sm:text-lg">
                Get complete details about formats, rules, schedules, and participation
                guidelines. View the official documents below.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
                <AnimatedButton
                    href="/resources/rulebook.pdf"
                    label="View Rulebook (PDF)"
                />

                <AnimatedButton
                    href="/resources/brochure.pdf"
                    label="View Brochure (PDF)"
                />
            </div>
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
        font-medium text-white
        bg-gradient-to-r from-[#0b1f3a] via-[#0e2a52] to-[#0b1f3a]
        transition-all duration-300
        hover:scale-105
        hover:shadow-[0_0_25px_rgba(0,140,255,0.35)]
      "
        >
            {/* Idle moving light */}
            <span className="absolute inset-0 pointer-events-none">
        <span
            className="
            absolute -inset-y-full left-[-120%] w-[200%]
            bg-gradient-to-r from-transparent via-white/20 to-transparent
            rotate-12 animate-buttonSweep
          "
        />
      </span>

            {/* Hover glow */}
            <span
                className="
          absolute inset-0 opacity-0
          bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.25),transparent_60%)]
          transition-opacity duration-300
          group-hover:opacity-100
        "
            />

            <span className="relative z-10">{label}</span>
        </a>
    );
}
