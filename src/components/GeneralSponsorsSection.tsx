"use client";

import SponsorItem from "./SponsorItem";

export default function GeneralSponsorsSection() {
    return (
        <section className="py-20 md:py-28 px-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] md:w-[40rem] h-[20rem] md:h-[30rem] bg-blue-900/10 blur-[150px] rounded-full -z-10" />

            <h2 className="text-center text-3xl md:text-5xl font-extrabold tracking-widest text-white mb-16 md:mb-20">
                OUR SPONSORS
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                <SponsorItem logo="/images/sponsors/sponsor1.jpg" label="Beverage" />
                <SponsorItem logo="/images/sponsors/sponsor2.jpg" label="Fitness" />
                <SponsorItem logo="/images/sponsors/sponsor3.jpg" label="Vehicle" />
                <SponsorItem logo="/images/sponsors/sponsor4.jpg" label="Running" />
            </div>
        </section>
    );
}