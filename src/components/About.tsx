"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "@/app/assets/images/about.webp"
import { BicepsFlexed } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0D0D0D] pb-8 md:pb-16  pt-12 md:pt-32 px-6 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A0A05] to-[#0D0D0D] pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      <div className="scratches-overlay z-10" />

      {/* Grid container with container width only (no max-width limits) */}
      <div className="relative w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-20 px-2">
        
        {/* Left Grid: Cover Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full p-10 md:block hidden rounded border-4 double border-[#8A2C1D] overflow-hidden bg-[#0D0D0D] shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
        >
          <Image 
            src={about}
            alt="About Wild South Raiders"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Grid: About Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              SHREE GURUPYO NAMOHA
            </span>
            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold pb-4 border-b border-[#8A2C1D]/40">
              About WSR
            </h2>
          </div>

          <div className="space-y-4 font-body text-xs sm:text-sm text-vintage-beige/70 leading-relaxed uppercase tracking-[0.06em]">
            <p>
              Welcome to our podcast, where no idea is too sacred to be questioned and no hypocrisy too small to escape scrutiny. Rooted in Periyar’s rationalist vision, we believe in equality, humanity, and the power of reason over dogma. Through sharp conversations and unapologetic commentary, we examine the structures of power that shape our lives, challenge inherited beliefs, and expose the contradictions often hidden beneath politics, culture, and everyday life
            </p>
            <p>
              We take a critical look at cinema, pop culture, social narratives, and public discourse—not merely to entertain, but to provoke thought and encourage deeper reflection. Whether we're unpacking history, dissecting cultural phenomena, or confronting society’s most comfortable assumptions, our goal remains the same: to question what is accepted, challenge what is celebrated, and defend what is just.
            </p>
            <p>
              This is not a space for blind reverence or easy answers. It is a space for curiosity, skepticism, and honest conversation. If you're willing to think beyond convention and engage with ideas that challenge the status quo, you're in the right place. This isn't entertainment for the faint-hearted—it's critique with teeth.
            </p>
            <p className="text-desert-orange font-medium font-display flex items-center gap-2 tracking-widest text-[11px] sm:text-xs">
              AZHUTHUKITU IRUNDHAALUM UZHUDHUKITU IRUPPOM <BicepsFlexed size={16}/> <BicepsFlexed size={16}/> <BicepsFlexed size={16}/>
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <a 
              href="#riders" 
              className="inline-block bg-[#C91A1A] hover:bg-[#F08E2A] text-vintage-beige hover:text-black font-display text-xs sm:text-sm tracking-[0.15em] uppercase py-3.5 px-8 rounded border-2 border-[#8A2C1D] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(240,142,42,0.35)]"
            >
              Meet the Raiders
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
