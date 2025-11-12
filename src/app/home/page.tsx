"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { sportsGallery } from "@/data/sportsGallery";
import SportCard from "@/components/SportsCard";
import GallerySection from "@/components/GallerySection";

export default function HomePage() {
    return (
        <main className="bg-gray-900 min-h-screen text-white">
            <HeroSection />
            <AboutSection />
            <GallerySection />

        </main>
    );
}
