"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  handle: string;
  location: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "This show is pure fire! The movie roasts are absolutely hilarious. The chemistry between Tobirama and Kakashi is gold.",
    author: "Karthik Raja",
    handle: "@tamil_outlaw",
    location: "Chennai, TN",
    stars: 4
  },
  {
    quote: "A much-needed rationalist perspective in Tamil media. They question everything and make you laugh out loud while doing it.",
    author: "Nandhini Murugan",
    handle: "@periyar_geek",
    location: "Coimbatore, TN",
    stars: 5
  },
  {
    quote: "Each episode feels like a cinematic journey. The Arthur Murugan theme song slaps, and Space Monkey's gaming lore is incredible.",
    author: "Vikram Sethu",
    handle: "@cinematic_rider",
    location: "Bangalore, KA",
    stars: 3
  },
  {
    quote: "Finally a Tamil podcast that doesn't hold back. Kisame's savage critiques are exactly what Tamil pop culture needs.",
    author: "Mani Kandan",
    handle: "@raider_fan01",
    location: "Madurai, TN",
stars:4
  },
  {
    quote: "The discussion on social structures was eye-opening. WSR brings logic and wit together like no other podcast in India.",
    author: "Rajesh Kumar",
    handle: "@tamil_gunslinger",
    location: "Trichy, TN",
    stars: 4
  },
  {
    quote: "I look forward to the movie roasts every week! They represent the perfect balance of Periyar's ideology and modern entertainment.",
    author: "Priya Dharshini",
    handle: "@rationalist_lass",
    location: "Salem, TN",
    stars: 4
  },
];

export default function ListenersJoys() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // We have 6 testimonials. If we display 3 on desktop, the maximum index is total - 3 (which is 3).
  // On tablet we show 2, max index is total - 2.
  // On mobile we show 1, max index is total - 1.
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 3 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="listeners" className="relative w-full bg-[#0D0D0D] py-20 pb-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center ">
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A0A05] to-[#0D0D0D] pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      <div className="scratches-overlay z-10" />

      {/* Main Container */}
      <div className="relative w-full container mx-auto z-20 px-2 flex flex-col space-y-12">

        {/* Title and Slider Controls in a single Row at the top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6  pb-6">
          <div className="text-start">
            <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              Voice of the Frontier
            </span>
            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold">
              Listeners Joys
            </h2>
          </div>

          {/* Slider Pagination Controls (Arrows) */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border-2 border-[#D9B06A] text-[#D9B06A] hover:bg-[#C91A1A] hover:text-[#E7D2AE] hover:border-[#C91A1A] rounded-none flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border-2 border-[#D9B06A] text-[#D9B06A] hover:bg-[#C91A1A] hover:text-[#E7D2AE] hover:border-[#C91A1A] rounded-none flex items-center justify-center transition-all duration-300 transform active:scale-95 cursor-pointer"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Testimonials Slider Viewport */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{
              // On desktop (3 cols): translate by currentIndex * (1/3 of container width + gap spacing)
              // We implement the sliding animation by animating translateX
              transform: `translateX(calc(-${currentIndex * 33.333}% - ${currentIndex * 16}px))`,
            }}
          >
            {/* Render all 6 testimonials in a row */}
            {testimonials.map((test, index) => (
              <div
                key={test.handle}
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <div
                  className="relative h-full flex flex-col justify-between p-6 border-2 border-[#D9B06A] bg-transparent rounded-none select-none hover:border-desert-orange transition-colors duration-300 group"
                >
                  {/* Quote Icon */}
                  <div className="flex items-start justify-between">
                    <div className="mb-4 text-[#D9B06A]/10 group-hover:text-desert-orange/20 transition-colors duration-300">
                      <Quote size={70} className="transform rotate-180" />
                    </div>

                    <div className="flex gap-1 items-center">
                      {
                        Array.from({ length: test.stars }).map((_, index) => (
                          <Star key={index} className="text-[#D9B06A]" size={20} />
                        ))
                      }
                    </div>

                  </div>

                  {/* Quote Text */}
                  <div className="relative z-10 font-body text-xs sm:text-sm text-vintage-beige/90 leading-relaxed uppercase tracking-[0.04em] mb-8">
                    "{test.quote}"
                  </div>

                  {/* Author Info */}
                  <div className="relative z-10 flex items-end justify-between border-t border-[#8A2C1D]/30 pt-4 mt-auto">
                    <div className="flex flex-col">
                      <span className="font-display text-md tracking-wide text-vintage-beige">
                        {test.author}
                      </span>
                      <span className="font-body text-[10px] text-desert-orange font-semibold tracking-wider mt-0.5">
                        {test.handle}
                      </span>
                    </div>
                    <span className="font-body text-[9px] text-vintage-beige/60 uppercase tracking-widest">
                      {test.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
