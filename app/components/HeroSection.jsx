'use client';
import { Button } from "@/components/ui/button";
import TextSlider from "./TextSlider";
import { useRef, useEffect } from 'react';

const HeroSection = () => {
  const tags = [
    "Frontend Developer", "Backend Developer", "Graphic Design",
    "UX/UI Design", "Web Designer", "Fullstack Developer",
    "Mobile Developer", "DevOps Engineer", "Data Scientist",
    "AI Specialist", "Cloud Architect", "Cyber Security",
    "Product Manager", "Digital Marketer", "Content Creator"
  ];

  const tagsRef = useRef(null);

  useEffect(() => {
    if (tagsRef.current) {
      const container = tagsRef.current;
      const wrapper = container.querySelector('.tags-wrapper');
      
      if (wrapper) {
        // Clone tags for seamless looping
        wrapper.innerHTML += wrapper.innerHTML;
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] flex items-center justify-center p-4 md:p-8 overflow-hidden rounded-3xl mt-4 md:mt-8 border border-white/10">
      {/* Background Image with modern blur */}
      <div className="absolute inset-0 bg-cover bg-center" 
           style={{
             backgroundImage: `url(/hero-image.jpeg)`,
           }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      </div>

      {/* Content with glassmorphism effect */}
      <div className="flex flex-col gap-8 z-10 w-full max-w-6xl text-white p-2 md:p-10">
        {/* TextSlider with modern spacing */}
        <div className="w-full text-left space-y-6">
          <TextSlider />
        </div>

        {/* Modern animated tags */}
        <div className="relative w-full overflow-hidden py-4" ref={tagsRef}>
          <div className="tags-wrapper flex items-center gap-4 w-max animate-marquee hover:animation-pause">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant="ghost"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105"
              >
                <span className="text-sm md:text-base font-medium">{tag}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start mt-4">
          <Button 
            className="px-8 py-6 rounded-full bg-custom-blue hover:bg-blue-600 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;