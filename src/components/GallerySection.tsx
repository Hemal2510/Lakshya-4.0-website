"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SportCard from "@/components/SportsCard";
import ExpandedSportModal from "@/components/ExpandedSportModal";
import { sportsGallery } from "@/data/sportsGallery";

export default function GallerySection() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const swiperRef = useRef<any>(null);

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };

    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <section id="gallery" className="relative w-full max-w-screen-xl mx-auto m-32">
            {activeIdx === null && (
                <>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        centeredSlides
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1240: { slidesPerView: 2 },
                            1400: { slidesPerView: 3 },
                        }}
                        spaceBetween={40}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        className="pb-12"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
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

                    {/* Custom nav buttons */}
                    {/* Left arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10
             hidden md:flex items-center justify-center
             h-10 w-10 bg-transparent"
                    >
  <span
      className="w-0 h-0
               border-t-[14px] border-b-[14px] border-r-[18px] border-l-0
               border-t-transparent border-b-transparent border-r-blue-500
               drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]
               hover:border-r-blue-400 transition-colors"
  />
                    </button>

                    {/* Right arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10
             hidden md:flex items-center justify-center
             h-10 w-10 bg-transparent"
                    >
  <span
      className="w-0 h-0
               border-t-[14px] border-b-[14px] border-l-[18px] border-r-0
               border-t-transparent border-b-transparent border-l-blue-500
               drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]
               hover:border-l-blue-400 transition-colors"
  />
                    </button>

                </>
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
