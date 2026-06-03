"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images
import Kakashi from "@/app/assets/images/raiders/Kakashi Hatake.jpg";
import Kisame from "@/app/assets/images/raiders/Kisame Hoshikagae.jpg";
import Mani from "@/app/assets/images/raiders/Mankatha Mani.jpg";
import SpaceMonkey from "@/app/assets/images/raiders/Space Monkey 01.jpg";
import Tobirama from "@/app/assets/images/raiders/Tobirama Senju.jpg";
import crossedgun from "@/app/assets/images/guns/crossed-gun.png"
import gunleft from "@/app/assets/images/guns/gunleft.png"
import gunright from "@/app/assets/images/guns/gunright.png"
interface Member {
  name: string;
  codename: string;
  link:string;
  role: string;
  weapon: string;
  bounty: string;
  image: any;
  stats: { label: string; value: number }[];
}

const members: Member[] = [
  {
    name: "Tobirama Senju",
    codename: "THE RATIONAL OUTLAW",
    link:"https://www.instagram.com/tobiramasenju_wsr/",
    role: "Core Host & Strategist",
    weapon: "Stencil Logic & Facts",
    bounty: "150,000,000",
    image: Tobirama,
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
    link:"https://www.instagram.com/kakashi_hatake_fitness/",
    role: "Movie & Pop Culture Critic",
    weapon: "Sarcastic Chidori",
    bounty: "120,000,000",
    image: Kakashi,
    stats: [
      { label: "Wit", value: 96 },
      { label: "Cinema IQ", value: 94 },
      { label: "Roast", value: 92 },
      { label: "Sarcasm", value: 98 },
    ],
  },
  {
    name: "Space Monkey 01",
    link:"https://www.instagram.com/spacemonkey01.wsr/",
    codename: "THE COSMIC GEEK",
    role: "Tech & Gaming Historian",
    weapon: "Keyboard Cannon",
    bounty: "115,000,000",
    image: SpaceMonkey,
    stats: [
      { label: "Tech", value: 96 },
      { label: "Gaming", value: 95 },
      { label: "Logic", value: 90 },
      { label: "Roast", value: 87 },
    ],
  },

  {
    name: "Mankatha Mani",
    link:"https://www.instagram.com/mankatha_mani_wsr/",
    codename: "THE LIFESTYLE GUNSLINGER",
    role: "Sports & Trends Expert",
    weapon: "Style & Sports Intuition",
    bounty: "110,000,000",
    image: Mani,
    stats: [
      { label: "Style", value: 95 },
      { label: "Sports IQ", value: 92 },
      { label: "Charisma", value: 94 },
      { label: "Roast", value: 85 },
    ],
  },

  {
    name: "Kisame Hoshikagae",
    link:"https://www.instagram.com/kisamenord/",
    codename: "THE COMEDY RENEGADE",
    role: "Social & Media Critic",
    weapon: "Samehada Movie Roasts",
    bounty: "135,000,000",
    image: Kisame,
    stats: [
      { label: "Humor", value: 97 },
      { label: "Critique", value: 95 },
      { label: "Roast", value: 96 },
      { label: "Savage", value: 93 },
    ],
  },
];

export default function Raiders() {
  return (
    <section id="riders" className="relative w-full bg-[#0D0D0D] py-20 px-6 md:px-12 overflow-hidden flex flex-col justify-center">
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
          className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold relative inline-block pb-4"
        >
          Wanted Raiders
          {/* Custom double-rule divider */}
          {/* <span className="absolute bottom-0 left-1/4 right-1/4 h-[3px] border-y border-[#D9B06A]"></span> */}
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

      {/* 5-Column Raiders Grid */}
      <div className="relative w-full container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4 z-20 px-2">
        {members.map((member, index) => (
         <a key={member.name} href={member.link}>
           <motion.div
            
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group relative wanted-poster flex flex-col items-center p-3 rounded overflow-hidden bg-[#E7D2AE] text-[#0D0D0D] transition-transform duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_rgba(201,26,26,0.25)] select-none border-4 double border-[#8A2C1D]"
          >
            {/* Wanted poster header */}
            <div className="w-full text-center border-b-2 border-dashed border-[#8A2C1D] pb-2 mb-3">
              {/* <Image className="w-[80px] mx-auto h-[80px] object-contain" src={crossedgun} alt="Gun" width={80} height={80} /> */}

              <div className="flex items-center justify-center gap-2">
                <span className="font-display text-2xl tracking-[0.1em] text-[#C91A1A] block transform skew-x-[-4deg]">
                  WANTED
                </span>
              </div>


              <span className="font-body text-[8px] font-bold tracking-[0.2em] text-[#8A2C1D]/80 block uppercase">
                Reward for information
              </span>
            </div>

            {/* Image Container (Strictly 4:5 Aspect Ratio) */}
            <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0D0D0D] border-2 border-[#8A2C1D] rounded">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover  group-hover:grayscale-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-105"
              />

              {/* Texture overlay on image */}
              {/* <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" /> */}

              {/* Anime-Style Slash Overlay (Reveals on Hover) */}
              {/* <div className="absolute inset-0 bg-[#0D0D0D]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-10 flex flex-col justify-between p-4 text-[#E7D2AE]">
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                  backgroundImage: "linear-gradient(45deg, #C91A1A 25%, transparent 25%), linear-gradient(-45deg, #C91A1A 25%, transparent 25%)",
                  backgroundSize: "6px 6px"
                }} />

                <div className="relative z-10 border-b border-[#F08E2A]/40 pb-2">
                  <span className="font-display text-xs tracking-wider text-[#F08E2A] uppercase block">
                    {member.codename}
                  </span>
                  <span className="font-body text-[10px] text-[#D9B06A] uppercase block tracking-wider mt-1">
                    Weapon: {member.weapon}
                  </span>
                </div>

                <div className="relative z-10 space-y-2.5 my-auto">
                  {member.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="flex justify-between text-[10px] font-body uppercase tracking-wider mb-1 text-[#E7D2AE]/80">
                        <span>{stat.label}</span>
                        <span className="text-[#F08E2A] font-bold">{stat.value}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#0D0D0D] border border-[#8A2C1D]/50 rounded-sm overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#C91A1A] to-[#F08E2A]"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative z-10 border-t border-[#F08E2A]/40 pt-2 text-center">
                  <span className="font-display text-[10px] tracking-wider text-[#E7D2AE] block uppercase">
                    Status: ACTIVE OUTLAW
                  </span>
                </div>
              </div> */}
            </div>

            {/* Card Footer (Wanted Details) */}
            <div className="w-full text-center mt-3 pt-1 z-0">

              <div className="flex items-center justify-center gap-2">
                <Image className="w-[30px] h-[30px] object-contain" src={gunleft} alt="Gun" width={35} height={35} />
                <h3 className="font-display text-lg tracking-wide text-[#0D0D0D] truncate uppercase">
                  {member.name}
                </h3>
                <Image className="w-[30px] h-[30px] object-contain" src={gunright} alt="Gun" width={35} height={35} />

              </div>

              {/* <p className="font-body text-[9px] text-[#8A2C1D] font-bold tracking-wider uppercase truncate mt-0.5">
                {member.role}
              </p> */}
              <a href={member.link} target="_blank" rel="noopener noreferrer" >
                <span className="font-body text-[9px] tracking-widest text-vintage-orange uppercase block leading-none">
                BOUNTY
              </span>
              {/* Bounty Display */}
              <div className="mt-2.5 bg-[#8A2C1D] hover:scale-105 transition duration-200 ease text-[#E7D2AE] py-3 px-2 rounded border border-[#D9B06A] inline-block w-full">

                <span className="font-display text-sm tracking-wider block mt-0.5 text-center text-[#E7D2AE]">
                  $ {member.bounty}
                </span>
              </div>
              </a>
            </div>
          </motion.div>
         </a>
        ))}
      </div>

      {/* Decorative bottom border line */}
      <div className="w-full max-w-7xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#8A2C1D]/60 to-transparent mt-16 z-20" />
    </section>
  );
}
