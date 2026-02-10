"use client";

import { useEffect } from "react";
import Image from "next/image";
import imageKitLoader from "@/lib/imagekitLoader";

const SPONSOR_LOGOS = [
  "/lakshya/sponsors/sponsor1.jpg",
  "/lakshya/sponsors/sponsor2.jpg",
  "/lakshya/sponsors/sponsor3.jpg",
  "/lakshya/sponsors/sponsor4.jpg",
  "/lakshya/sponsors/sponsor5.jpg",
  "/lakshya/sponsors/sponsor6.jpg",
  "/lakshya/sponsors/sponsor7.jpg",
  "/lakshya/sponsors/sponsor8.jpg",
  "/lakshya/sponsors/sponsor9.jpg",
  "/lakshya/sponsors/sponsor10.jpg",
  "/lakshya/sponsors/sponsor11.jpg",
  "/lakshya/sponsors/sponsor12.jpg",
  "/lakshya/sponsors/sponsor13.jpg",
];

export default function SponsorsSection() {
  const loopLogos = [...SPONSOR_LOGOS, ...SPONSOR_LOGOS];

  /* 🔥 OPTIONAL but recommended:
     Warm browser cache once on page load */
  useEffect(() => {
    SPONSOR_LOGOS.forEach((src) => {
      const img = new window.Image();

      img.src = imageKitLoader({
        src,
        width: 160,
        quality: 80,
      });
    });
  }, []);

  return (
    <section id="sponsors" className="w-full mt-48">
      <div className="mx-auto px-4">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-slate-100">
          Past Sponsors
        </h2>

        <p className="text-center text-sm text-slate-400 mb-8">
          A glimpse of the brands that have powered Lakshya.
        </p>

        <div className="relative overflow-hidden py-6">
          {/* Side fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent z-10" />

          {/* Moving row */}
          <div
            className="flex"
            style={{
              animation: "sponsor-slide-left 30s linear infinite",
              width: "max-content",
            }}
          >
            {loopLogos.map((src, i) => (
              <div
                key={i}
                className="px-6 sm:px-8 flex items-center justify-center"
              >
                <div className="flex items-center justify-center rounded-3xl bg-slate-900/85 border border-slate-700/70 px-6 py-3 sm:px-8 sm:py-4 shadow-[0_12px_30px_rgba(15,23,42,0.9)]">
                  <Image
                    loader={imageKitLoader}
                    src={src}
                    alt={`Sponsor ${i % SPONSOR_LOGOS.length + 1}`}
                    width={160}
                    height={80}
                    className="object-contain max-h-24 w-auto"
                    loading="lazy"
                    sizes="(max-width: 640px) 120px, 160px"
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
