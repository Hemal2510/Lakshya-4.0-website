import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
export default function HomePage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <HeroSection />
            <AboutSection />
        </main>

    );
}
