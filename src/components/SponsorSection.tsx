"use client";

const SPONSOR_LOGOS = [
    "/images/sponsors/sponsor1.jpg",
    "/images/sponsors/sponsor2.jpg",
    "/images/sponsors/sponsor3.jpg",
    "/images/sponsors/sponsor4.jpg",
    "/images/sponsors/sponsor5.jpg",
    "/images/sponsors/sponsor6.jpg",
    "/images/sponsors/sponsor7.jpg",
    "/images/sponsors/sponsor8.jpg",
    "/images/sponsors/sponsor9.jpg",
    "/images/sponsors/sponsor10.jpg",
    "/images/sponsors/sponsor11.jpg",
    "/images/sponsors/sponsor12.jpg",
    "/images/sponsors/sponsor13.jpg",
];

export default function SponsorsSection() {
    const loopLogos = [...SPONSOR_LOGOS, ...SPONSOR_LOGOS];

    return (
        <section
            id="sponsors"
            className="w-full mt-48 "
        >
            <div className=" mx-auto px-4">
                <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-100">
                    Previous Sponsors
                </h2>
                <p className="text-center text-sm text-slate-400 mb-8">
                    A glimpse of the brands that have powered Lakshya.
                </p>

                <div className="relative overflow-hidden py-6">
                    {/* side fade */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />

                    {/* moving row */}
                    <div
                        className="flex"
                        style={{
                            animation: "sponsor-slide-left 14s linear infinite",
                            width: "max-content",
                        }}
                    >
                        {loopLogos.map((src, i) => (
                            <div
                                key={i}
                                className="px-6 sm:px-8 flex items-center justify-center"
                            >
                                <div className="flex items-center justify-center  rounded-3xl bg-slate-900/85 border border-slate-700/70 px-6 py-3 sm:px-8 sm:py-4 shadow-[0_12px_30px_rgba(15,23,42,0.9)]">
                                    <img
                                        src={src}
                                        alt={`Sponsor ${i % SPONSOR_LOGOS.length + 1}`}
                                        className="max-h-24 sm:max-h-24 w-auto object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
