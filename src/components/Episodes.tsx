"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ThumbsUp } from "lucide-react";

// Manually imported images
import kovil from "@/app/assets/images/episodes/kovil.jpg";
import goc from "@/app/assets/images/episodes/gameofcaste.jpg";
import pea from "@/app/assets/images/episodes/post-election-analysis.webp";
import mumbai from "@/app/assets/images/episodes/maja-mumbai.jpg";

interface Episode {
    title: string;
    episodeNumber: string;
    description: string;
    image: any;
    link: string;
}

const episodesList: Episode[] = [
    {
        title: "கோவில் யாருக்கு சொந்தம்?",
        episodeNumber: "S01E01",
        description: "A deep dive into the history, administration, and entry rights of temples in Tamil Nadu under the HR&CE department.",
        image: kovil,
        link: "https://open.spotify.com/show/3Vyzr177KDIGxUPjEHzfMD#login",
    },
    {
        title: "Game of Caste",
        episodeNumber: "S01E05",
        description: "An in-depth critical analysis of the origin, structure, and evolution of the caste system throughout history.",
        image: goc,
        link: "https://open.spotify.com/episode/2YQjiWo1iEZkjmLzGSXHxU",
    },
    {
        title: "Maja Mumbai",
        episodeNumber: "S01E09",
        description: "The gang recounts their epic trip to the Spotify office in Mumbai, sharing creator meet stories and urban adventures.",
        image: mumbai,
        link: "https://open.spotify.com/episode/6ad0Je0yxtxujqTvIglhhC",
    },
    {
        title: "Post Election Analysis 2026",
        episodeNumber: "S01E15",
        description: "A sharp, unfiltered look at the 2026 Tamil Nadu assembly elections, analyzing voting patterns and alliance results.",
        image: pea,
        link: "https://open.spotify.com/episode/2xXMIz7v1j6K16KHsGKhsm",
    },
];

export default function Episodes() {
    return (
        <section id="episodes" className="relative w-full bg-[#0D0D0D] md:py-20 py-4 px-6 md:px-12 overflow-hidden flex flex-col justify-center border-t border-[#8A2C1D]/20">
            {/* Background aesthetic textures */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-[#1A0A05] to-[#0D0D0D] pointer-events-none z-0" />
            <div className="dust-overlay z-10" />
            <div className="scratches-overlay z-10" />

            {/* Main Container */}
            <div className="relative w-full container mx-auto z-20 px-2 flex flex-col space-y-12">

                {/* Section Header */}
                <div className="text-center pb-4">
                    <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
                        Most Played Dispatches
                    </span>
                    <h2 className="font-display text-3xl sm:text-3xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold">
                        Top Streamed Episodes
                    </h2>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {episodesList.map((episode, index) => (
                        <motion.div
                            key={episode.episodeNumber}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col  bg-transparent rounded-none p-2 hover:border-desert-orange transition-colors duration-300 group justify-between"
                        >
                            <div className="flex flex-col text-center space-y-4">
                                {/* 1. Episode Image (Strictly 16:9 or cover ratio) */}
                                <div className="relative w-full h-80 overflow-hidden border border-[#8A2C1D]/40">
                                    <Image
                                        src={episode.image}
                                        alt={episode.title}
                                        fill
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                    />
                                    {/* Absolute Episode Number Badge */}
                                    {/* <span className="absolute top-2 left-2 bg-[#C91A1A] text-vintage-beige font-display text-[10px] tracking-widest px-2 py-0.5 border border-[#8A2C1D]">
                                        {episode.episodeNumber}
                                    </span> */}
                                </div>

                                {/* 2. Episode Title */}
                                <h3 className="font-display text-lg tracking-wide text-vintage-beige uppercase line-clamp-1 group-hover:text-desert-orange transition-colors duration-200">
                                    {episode.title}
                                </h3>

                                {/* 3. Episode Description */}
                                <p className="font-body text-xs text-vintage-beige/65 leading-relaxed uppercase tracking-[0.04em] line-clamp-3">
                                    {episode.description}
                                </p>
                            </div>

                            {/* 4. Listen Now Button */}
                            <div className="mt-3 pt-4 border-t border-[#8A2C1D]/20">
                                <a
                                    href={episode.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center max-w-[300px] mx-auto px-8 justify-between rounded-full gap-2 w-full bg-[#C91A1A] hover:bg-[#F08E2A] text-vintage-beige hover:text-black font-display text-xs tracking-[0.15em] uppercase py-3  border-2 border-[#8A2C1D] shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-all duration-300 transform active:scale-95 cursor-pointer"
                                >
                                    <span className="flex text-[14px] items-center justify-center gap-2 "><Play size={14} className="fill-current" />
                                        Listen now</span>

                                    <span>
                                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M38.1966 21.2764C30.4604 16.6821 17.6998 16.2597 10.3146 18.5011C9.12845 18.861 7.87433 18.1915 7.51523 17.0056C7.15585 15.8189 7.82446 14.5656 9.01123 14.2051C17.4891 11.6318 31.5819 12.1288 40.4879 17.4155C41.5549 18.0488 41.9045 19.4265 41.2723 20.4914C40.6395 21.5581 39.2607 21.9098 38.1966 21.2764ZM37.9433 28.0812C37.4005 28.9619 36.249 29.2381 35.3694 28.6973C28.92 24.733 19.0848 23.5843 11.4544 25.9005C10.4651 26.1994 9.41991 25.6417 9.11927 24.6539C8.82122 23.6645 9.37921 22.6214 10.3671 22.3204C19.0837 19.6752 29.9199 20.9563 37.3277 25.5088C38.2072 26.0504 38.4841 27.2025 37.9433 28.0812ZM35.0066 34.6163C34.5753 35.3236 33.6545 35.5451 32.9498 35.1141C27.314 31.6696 20.2203 30.8918 11.8662 32.7999C11.0612 32.9844 10.2588 32.48 10.0753 31.6753C9.89077 30.8703 10.3935 30.0678 11.2002 29.8841C20.3424 27.7943 28.1844 28.6936 34.5102 32.5591C35.2155 32.9899 35.4376 33.9113 35.0066 34.6163ZM23.9999 0C10.7454 0 0 10.7451 0 23.9996C0 37.2555 10.7454 48 23.9999 48C37.2549 48 48 37.2555 48 23.9996C48 10.7451 37.2549 0 23.9999 0Z" fill="black" />
                                        </svg>

                                    </span>
                                </a>
                            </div>
                        </motion.div>
                    ))}

                    
                </div>
 <span className="text-[10px] text-center sm:text-xs flex items-end gap-1 mx-auto font-body text-vintage-beige/60 leading-relaxed uppercase tracking-[0.16em] drop-shadow-md">
            IPPOVE POI KELU ! ILLANA SAAMI KANNA KUTHADHU  <ThumbsUp/>
          </span>
            </div>
        </section>
    );
}