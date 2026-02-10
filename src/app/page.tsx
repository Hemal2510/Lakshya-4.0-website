import IntroHero from "@/components/Intro";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorSection";
import ResourcesSection from "@/components/Resource";
export default function LandingPage() {
    return (
        <>
            <IntroHero />
            <AboutSection />
            <ResourcesSection />
            <SponsorsSection />
            <GallerySection />
        </>
    );
}
