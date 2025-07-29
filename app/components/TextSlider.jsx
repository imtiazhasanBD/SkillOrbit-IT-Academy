'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    title: "The secret of coding is to start.",
    subtitle: "Start today to become a professional in the future. Learn the language of programs from the best!"
  },
  {
    title: "Learn by doing, not just watching.",
    subtitle: "Interactive coding lessons that make you job-ready faster."
  },
  {
    title: "Your career in tech starts here.",
    subtitle: "Step-by-step guidance from zero to full-stack developer."
  },
  {
    title: "Think like a developer.",
    subtitle: "Master the mindset, tools, and skills of real-world programmers."
  }
];

export default function TextSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full mx-auto text-white py-10">
      <div className="relative"> 
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col items-start justify-center">
                <h2 className="text-xl md:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-base md:text-lg mb-6">{slide.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Horizontal Progress Lines */}
      <div className="flex justify-start gap-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-15 md:w-20 rounded-full transition-colors duration-300 ${
              activeIndex === i ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}