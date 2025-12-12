import IntroHero from "@/components/Intro";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import SponsorsSection from "@/components/SponsorSection";
export default function LandingPage() {
    return (
        <>
            <IntroHero />
            <AboutSection />
            <SponsorsSection />
            <GallerySection />
        </>
    );
}
