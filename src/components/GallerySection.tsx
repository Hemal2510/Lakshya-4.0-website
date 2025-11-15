"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SportCard from "@/components/SportsCard";
import ExpandedSportModal from "@/components/ExpandedSportModal";
import { sportsGallery } from "@/data/sportsGallery"; // Array of { name, lottie, photos }

export default function GallerySection() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const swiperRef = useRef<any>(null);

    return (
        <div className="relative w-full max-w-screen-xl mx-auto">
            {activeIdx === null && (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    centeredSlides
                    slidesPerView={3}
                    spaceBetween={40}
                    loop={true}
                    navigation
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    className="pb-12"
                    onSwiper={swiper => (swiperRef.current = swiper)}
                >
                    {sportsGallery.map((sport, i) => (
                        <SwiperSlide key={sport.name}>
                            <SportCard
                                name={sport.name}
                                lottiePath={sport.lottie}
                                photos={sport.photos}
                                isActive={hoveredIdx === i}
                                onHoverStart={() => {
                                    setHoveredIdx(i);
                                    swiperRef.current?.autoplay?.stop();
                                }}
                                onHoverEnd={() => {
                                    setHoveredIdx(null);
                                    swiperRef.current?.autoplay?.start();
                                }}
                                onCardClick={() => setActiveIdx(i)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {activeIdx !== null && (
                <ExpandedSportModal
                    sport={sportsGallery[activeIdx]}
                    onClose={() => setActiveIdx(null)}
                />
            )}
        </div>
    );
}
