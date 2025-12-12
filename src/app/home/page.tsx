"use client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import { sportsGallery } from "@/data/sportsGallery";
import SportCard from "@/components/SportsCard";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorSection";

export default function HomePage() {
    return (
        <main className="min-h-screen text-white">
            <HeroSection />
            <AboutSection />
            <SponsorsSection />
            <GallerySection />

        </main>
    );
}
