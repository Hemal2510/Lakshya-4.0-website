"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SportCard from "@/components/SportsCard";
import { sportsGallery } from "@/data/sportsGallery";

export default function GallerySection() {
    const swiperRef = useRef<any>(null);
    const [activeIdx, setActiveIdx] = useState(
        Math.floor(sportsGallery.length / 2)
    );
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.realIndex !== activeIdx &&
            swiperRef.current.activeIndex !== activeIdx
        ) {
            swiperRef.current.slideTo(activeIdx, 0);
        }
    }, [activeIdx]);

    // Determine which card is currently playing (hovered if any, else active)
    const playingIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;

    // Advance next only if not paused and no hover is active
    const handleCycleComplete = () => {
        if (!paused && hoveredIdx === null && swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    // Set hovered index and pause auto sliding
    const handleHoverStart = (idx: number) => {
        setHoveredIdx(idx);
        setPaused(true);
    };

    // Clear hover and resume auto sliding
    const handleHoverEnd = () => {
        setHoveredIdx(null);
        setPaused(false);
    };

    return (
        <section className="p-6 w-full max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Sports Gallery</h2>
            <Swiper
                modules={[Navigation]}
                centeredSlides={true}
                slidesPerView={3}
                initialSlide={1}
                spaceBetween={40}
                loop={true}
                navigation
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                    if (activeIdx !== swiper.realIndex) {
                        setActiveIdx(swiper.realIndex);
                    }
                }}
                className="pb-12"
                style={{ padding: "1rem 0" }}
            >
                {sportsGallery.map((sport, i) => (
                    <SwiperSlide key={sport.name} className="flex items-stretch">
                        <SportCard
                            name={sport.name}
                            lottiePath={sport.lottie}
                            photos={sport.photos}
                            isActive={i === playingIdx}
                            onCycleComplete={handleCycleComplete}
                            onHoverStart={() => handleHoverStart(i)}
                            onHoverEnd={handleHoverEnd}
                            cardHeight={350}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
