"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { sportsGallery } from "@/data/sportsGallery";
import SportCard from "@/components/SportsCard";

export default function HomePage() {
    return (
        <main className="bg-gray-900 min-h-screen text-white">
            <HeroSection />
            <AboutSection />

            {/* Gallery Section */}
            <section className="p-6 max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Sports Gallery</h2>

                <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4  ">
                    {sportsGallery.map((sport) => (
                        <SportCard
                            key={sport.name}
                            name={sport.name}
                            lottiePath={sport.lottie}
                            photos={sport.photos}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
