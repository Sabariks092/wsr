"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import front images
import Kakashi from "@/app/assets/images/raiders/Kakashi Hatake.webp";
import Mani from "@/app/assets/images/raiders/Mankatha Mani.webp";
import SpaceMonkey from "@/app/assets/images/raiders/Space Monkey 01.webp";
import Tobirama from "@/app/assets/images/raiders/Tobirama Senju.webp";

// Import back flip images
import FlipTobirama from "@/app/assets/images/raiders/flip-tobirama-senju.webp";
import FlipKakashi from "@/app/assets/images/raiders/flip-kakashi-hatake.webp";
import FlipSpaceMonkey from "@/app/assets/images/raiders/flip-space-monkey-01.webp";
import FlipMani from "@/app/assets/images/raiders/flip-mankatha-mani.webp";

// Gun assets
import gunleft from "@/app/assets/images/guns/gunleft.webp";
import gunright from "@/app/assets/images/guns/gunright.webp";
import bgPaper from "@/app/assets/images/bg/bg-paper3.webp";

interface Member {
  name: string;
  codename: string;
  link: string;
  role: string;
  weapon: string;
  bounty: string;
  image: any;
  fliptitle:string; 
  flipImage: any;
  description: string;
  stats: { label: string; value: number }[];
}

const members: Member[] = [
  {
    name: "Tobirama Senju",
    codename: "THE RATIONAL OUTLAW",
    link: "https://www.instagram.com/tobiramasenju_wsr/",
    role: "Core Host & Strategist",
    weapon: "Stencil Logic & Facts",
    bounty: "150,000,000",
    image: Tobirama,
    fliptitle:"Panni Kari Sapdriya Dae ?",
    flipImage: FlipTobirama,
    description: "Suvaya irukkum dae !",
    stats: [
      { label: "Logic", value: 98 },
      { label: "Debate", value: 95 },
      { label: "Roast", value: 88 },
      { label: "Lore", value: 92 },
    ],
  },
  {
    name: "Kakashi Hatake",
    codename: "THE CINEMATIC ROASTER",
    link: "https://www.instagram.com/kakashi_hatake_fitness/",
    role: "Movie & Pop Culture Critic",
    weapon: "Sarcastic Chidori",
    bounty: "120,000,000",
    image: Kakashi,   
    fliptitle:"Sensei In Parallel Universe ?",
    flipImage: FlipKakashi,
    description: "aatatha podu mamae !",
    stats: [
      { label: "Wit", value: 96 },
      { label: "Cinema IQ", value: 94 },
      { label: "Roast", value: 92 },
      { label: "Sarcasm", value: 98 },
    ],
  },
  {
    name: "Space Monkey 01",
    link: "https://www.instagram.com/spacemonkey01.wsr/",
    codename: "THE COSMIC GEEK",
    role: "Tech & Gaming Historian",
    weapon: "Keyboard Cannon",
    bounty: "115,000,000",
    image: SpaceMonkey,
        fliptitle:"Indha Paal Kudi Bro !",
    flipImage: FlipSpaceMonkey,
    description: "Nalla irukku nae !",
    stats: [
      { label: "Tech", value: 96 },
      { label: "Gaming", value: 95 },
      { label: "Logic", value: 90 },
      { label: "Roast", value: 87 },
    ],
  },
  {
    name: "Mankatha Mani",
    link: "https://www.instagram.com/mankatha_mani_wsr/",
    codename: "THE LIFESTYLE GUNSLINGER",
    role: "Sports & Trends Expert",
    weapon: "Style & Sports Intuition",
    bounty: "110,000,000",
    image: Mani,
        fliptitle:"Rooster Fight Ku Varingla na ?",
    flipImage: FlipMani,
    description: " rare footage of Tsunami with kelattu kozhi",
    stats: [
      { label: "Style", value: 95 },
      { label: "Sports IQ", value: 92 },
      { label: "Charisma", value: 94 },
      { label: "Roast", value: 85 },
    ],
  },
];

export default function Raiders() {
  return (
    <section id="riders" className="relative w-full bg-[#0D0D0D] py-10 md:py-20 px-7 md:px-12 overflow-hidden flex flex-col justify-center">
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A0A05] to-[#0D0D0D] pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      <div className="scratches-overlay z-10" />

      {/* Decorative top border line */}
      <div className="w-full max-w-7xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#8A2C1D]/60 to-transparent mb-12 z-20" />

      {/* Section Title */}
      <div className="relative text-center mb-12 z-20">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic"
        >
          Introducing the Outlaws
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl sm:text-3xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold relative inline-block pb-4"
        >
          Wanted Raiders
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10px] sm:text-xs font-body text-vintage-beige/60 max-w-md sm:max-w-2xl leading-relaxed uppercase tracking-[0.16em] drop-shadow-md mx-auto"
        >
          MEET THE GUNSLINGERS CAPABLE OF QUESTIONING ANY IDEOLOGY AND ROASTING ANY HYPOCRISY. DEAD OR ALIVE.
        </motion.p>
      </div>

      {/* 4-Column Raiders Grid */}
      <div className="relative w-full container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 z-20 px-2">
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group w-full perspective-1000 select-none h-[470px] md:h-[580px]"
          >
            <a href={member.link} className="block w-full h-full cursor-pointer">
              {/* Inner card container that handles the 180deg flip */}
              <div className="relative w-full h-full preserve-3d transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]">
                
                {/* ── CARD FRONT ── */}
                <div
                  style={{
                    backgroundImage: `url(${bgPaper.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-between md:p-8 p-6 py-8 md:py-10 rounded border-4 double border-black/10 text-black shadow-[0_10px_25px_rgba(0,0,0,0.4)]"
                >
                  {/* Wanted poster header */}
                  <div className="w-full text-center border-b-2 border-dashed border-black pb-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-display text-4xl tracking-[0.1em] text-black block transform skew-x-[-4deg]">
                        WANTED
                      </span>
                    </div>
                    <span className="font-body text-[8px] py-1 font-bold tracking-[0.2em] text-black/80 block uppercase">
                      Reward for information
                    </span>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full flex-1 min-h-0 my-3 shadow-[0_10px_25px_rgba(0,0,0,0.3)] overflow-hidden rounded border border-black/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
                    />
                  </div>

                  {/* Card Footer (Wanted Details) */}
                  <div className="w-full text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <img className="w-[24px] h-[24px] object-contain" src={gunleft.src} alt="Gun" />
                      <h3 className="font-display text-base tracking-wide text-black truncate uppercase">
                        {member.name}
                      </h3>
                      <img className="w-[24px] h-[24px] object-contain" src={gunright.src} alt="Gun" />
                    </div>
                    
                    <div className="block mt-1">
                      <span className="font-body text-[8px] tracking-widest text-black/70 uppercase block leading-none">
                        BOUNTY
                      </span>
                      <div className="mt-1.5 py-1 px-2 rounded border border-black/80 inline-block w-full">
                        <span className="font-display text-xs sm:text-sm tracking-wider block text-center text-black">
                          $ {member.bounty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── CARD BACK ── */}
                <div
                  style={{
                    backgroundImage: `url(${bgPaper.src})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="absolute inset-0 w-full h-full backface-hidden flex flex-col justify-between md:p-8 p-6 py-8 md:py-10 rounded border-4 double border-black/10 text-black shadow-[0_10px_25px_rgba(0,0,0,0.4)] [transform:rotateY(180deg)]"
                >
                  {/* Codename header */}
                  <div className="w-full text-center border-b-2 border-dashed border-black pb-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-display text-3xl tracking-[0.05em] text-black block transform skew-x-[-2deg]  w-full">
                        {member.fliptitle}
                      </span>
                    </div>
                    <span className="font-body text-[8px] font-bold tracking-[0.2em] text-[#C91A1A] block uppercase mt-0.5">
                      {member.codename}
                    </span>
                  </div>

                  {/* Flip character image container */}
                  <div className="relative w-full flex-1 min-h-0 my-3 overflow-hidden flex items-center justify-center">
                    <img
                      src={member.flipImage.src}
                      alt={`Flip ${member.name}`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)] transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Description Footer */}
                  <div className="w-full text-center mt-2 pt-2 border-t border-dashed border-black/30">
                    <p className="font-body text-[10px] sm:text-xs text-black/90 font-medium tracking-wide uppercase leading-relaxed max-w-xs mx-auto">
                      {member.description}
                    </p>
                  </div>
                </div>

              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Decorative bottom border line */}
      <div className="w-full max-w-7xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#8A2C1D]/60 to-transparent mt-16 z-20" />
    </section>
  );
}
