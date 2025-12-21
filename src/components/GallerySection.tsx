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
        < section id="gallery" className="relative w-full max-w-screen-xl mx-auto m-32">
            {activeIdx === null && (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    centeredSlides
                    breakpoints={{
                        0: { slidesPerView: 1 },      // phones
                        640: { slidesPerView: 1 },    // small phones / small tablets
                        768: { slidesPerView: 2 },    // tablets
                        1240: { slidesPerView: 2},
                        1400 : { slidesPerView: 3 },
                        // laptops and up
                    }}
                    spaceBetween={40}
                    loop={true}
                    navigationcd
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
        </section>
    );
}
