"use client";

import React from "react";
import logo from "../app/assets/images/logo/logo-without-bg.png"
export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cream-bg flex flex-col select-none overflow-hidden"
      style={{ padding: "18px" }}
    >
      {/* ── Outer rounded window ── */}
      <div className="relative w-full h-full rounded-[8px] sm:rounded-[16px] overflow-hidden bg-charcoal flex flex-col">
        {/* Background Video */}
        <video
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-charcoal/10 z-10 pointer-events-none" />
        <div className="dust-overlay z-10" />
        <div className="scratches-overlay z-10" />

        {/* Outer border outline overlay (drawn at z-40, letting z-50 navbar cover the top section) */}
        <div className="absolute inset-0 rounded-[4px] sm:rounded-[8px] border-2 border-[rgba(180,140,80,0.35)] pointer-events-none z-40" />

        {/* ── Trapezoid Center Navbar ── */}
        <div className="absolute top-0 left-1/2 -translate-x-2/2 z-50 w-full max-w-4xl">
          {/* Outer Border shape (Golden Sand/Leather Border) */}
          <div
            className="bg-dark-rust p-[2px]"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, calc(100% - 24px) 100%, 24px 100%)",
            }}
          >
            {/* Inner Content box (Cream Background) */}
            <div
              className="bg-cream-bg h-[40px] text-black flex items-top justify-center py-12 px-12"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, calc(100% - 23.5px) 100%, 23.5px 100%)",
              }}
            >
              <nav className="flex gap-6 sm:gap-10 text-[14px] font-display tracking-[0.14em] uppercase text-black">
                <a
                  href="#home"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  About WSR
                </a>
                <a
                  href="#riders"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Riders
                </a>
                <a
                  href="#listeners"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Listeners Joys
                </a>
                <a
                  href="#contact"
                  className="hover:text-brand-red transition-colors duration-200"
                >
                  Get in Touch
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Logo (Top-Left) */}
        <div className="absolute top-1/9 left-1/7 z-50">
          <img
            src={logo.src}
            alt="Wild South Raiders Logo"
            className="w-[280px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Welcome Title & Description */}
        <div className="absolute  space-y-3 inset-0 flex flex-col justify-end items-center text-center z-30 px-6 mt-12 bottom-8 pointer-events-none">
          <span className="text-desert-orange font-display text-[10px] sm:text-xs tracking-[0.25em] uppercase drop-shadow">
            South India's Cinematic Tamil Podcast
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[0.95] tracking-[0.06em] text-vintage-beige text-shadow-cinematic uppercase">
            Wild South <br className="sm:hidden" /> Raiders
          </h1>
          <p className="text-[10px] sm:text-xs font-body text-vintage-beige/60 max-w-md sm:max-w-lg mt-6 leading-relaxed uppercase tracking-[0.16em] drop-shadow-md">
            A deep dive into history, pop culture, and cinematic lore. Recorded weekly in Tamil.
          </p>
        </div>

      </div>
    </div>
  );
}
