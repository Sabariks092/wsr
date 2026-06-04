"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

import faqWanted from "@/app/assets/images/faq/faq_wanted.png";
import faqCoins from "@/app/assets/images/faq/faq_coins.png";
import faqBook from "@/app/assets/images/faq/faq_book.png";
import faqCactus from "@/app/assets/images/faq/faq_cactus.png";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  image: any;
}

const faqList: FaqItem[] = [
  {
    id: 1,
    question: "Neenga UP ah ?",
    answer: "ama da ippo enna ?",
    image: faqWanted,
  },
  {
    id: 2,
    question: "Enna Bro, paytm la 200 credit aagiducha ?",
    answer: "ama da ippo enna ?",
    image: faqCoins,
  },
  {
    id: 3,
    question: "Bro Neenga Peryarist/Marxist/Ambetkarite ah ?",
    answer: "ama da ippo enna ?",
    image: faqBook,
  },
  {
    id: 4,
    question: "Neenga Anti Brahmanism/RSS/BJP ah ?",
    answer: "ama da ippo enna ?.",
    image: faqCactus,
  },
];

export default function Faq() {
  const [activeId, setActiveId] = useState<number | null>(1);
  const [lastImage, setLastImage] = useState<any>(faqWanted);

  const handleToggle = (item: FaqItem) => {
    setActiveId((prev) => (prev === item.id ? null : item.id));
    setLastImage(item.image);
  };

  return (
    <section id="faq" className="relative w-full bg-[#0D0D0D] py-20 pb-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center border-t border-[#8A2C1D]/20">
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A0A05] to-[#0D0D0D] pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      <div className="scratches-overlay z-10" />

      {/* Grid container with container width only (no max-width limits) */}
      <div className="relative w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20 px-2">
        
        {/* Left Grid: Dynamic Cover Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] p-10 rounded border-4 double border-[#8A2C1D] overflow-hidden bg-[#0D0D0D] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={lastImage.src}
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={lastImage}
                alt="Wild South Raiders FAQ Visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-10" />
        </motion.div>

        {/* Right Grid: FAQ Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              Frequently Accused Dispatches
            </span>
            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold pb-4 border-b border-[#8A2C1D]/40">
              Outlaw FAQ
            </h2>
          </div>

          <div className="flex flex-col">
            {faqList.map((item) => (
              <div key={item.id} className="border-b border-[#8A2C1D]/40 py-5">
                <button
                  onClick={() => handleToggle(item)}
                  className="w-full flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className={`font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.06em] transition-colors duration-200 ${activeId === item.id ? 'text-desert-orange' : 'text-vintage-beige/70 group-hover:text-[#E7D2AE]'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeId === item.id ? 'bg-[#C91A1A]/10 border-[#C91A1A] text-brand-red rotate-180' : 'border-[#D9B06A] text-[#D9B06A] group-hover:border-desert-orange group-hover:text-desert-orange'}`}>
                    {activeId === item.id ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {activeId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 font-body text-xs sm:text-sm text-vintage-beige/60 leading-relaxed uppercase tracking-[0.06em]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
