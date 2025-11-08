"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Intro from "@/components/Intro";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

export default function SplashHome() {
    const router = useRouter();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    function handleFinish() {
        router.replace("/home"); // or your route
    }

    return (
        <Intro
            videoSrc="/videos/intro1.mp4"
            logoSrc="/images/logo.png"
            HeroComponent={HeroSection}
            AboutComponent={AboutSection}

            onFinish={handleFinish}
        />
    );
}
