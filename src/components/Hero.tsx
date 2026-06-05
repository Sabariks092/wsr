"use client";

import React, { useState } from "react";
import logo from "@/app/assets/images/logo/logo-without-bg.png";
import mobileBg from "@/app/assets/images/mobile-menu.png";
import Platforms from "./Platforms";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About WSR", href: "#about" },
    { label: "Riders", href: "#riders" },
    { label: "Listeners Joys", href: "#listeners" },
    { label: "Get in Touch", href: "#contact" },
  ];

  return (
    <div className="w-full select-none overflow-hidden">
      {/* ──────────────────────────────────────────────────────── */}
      {/* DESKTOP LAYOUT (lg breakpoint: 1024px and above)         */}
      {/* ──────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:flex w-full h-screen bg-transparent flex-col"
        style={{ padding: "18px" }}
      >
        <div className="relative w-full h-full rounded-[16px] overflow-hidden bg-[#0D0D0D] flex flex-col">
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
          <div className="absolute inset-0 bg-[#0D0D0D]/10 z-10 pointer-events-none" />
          <div className="dust-overlay z-10" />
          <div className="scratches-overlay z-10" />

          {/* Outer border outline overlay */}
          <div className="absolute inset-0 rounded-[8px] border border-[rgba(180,140,80,0.35)] pointer-events-none z-40" />

          {/* ── Trapezoid Center Navbar ── */}
          <div className="absolute -top-3 lg:left-1/2 lg:-translate-x-1/2 2xl:-translate-x-2/2 z-50 w-full max-w-4xl">
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
                className="bg-[#0D0D0D] h-[40px] text-black flex items-top justify-center pt-4 pb-12 px-12"
                style={{
                  clipPath:
                    "polygon(0% 0%, 100% 0%, calc(100% - 23.5px) 100%, 23.5px 100%)",
                }}
              >
                <nav className="flex gap-10 text-[14px] font-display tracking-[0.14em] uppercase text-vintage-beige">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="hover:text-brand-red transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Container for Logo + Platforms (keeps it aligned on wide screens) */}
          <div className="absolute inset-0 z-30 pointer-events-none">
            <div className="relative w-full h-full container mx-auto px-12">
              {/* Logo (Top-Left, positioned relative to container margins) */}
              <div className="absolute top-32 left-32 pointer-events-auto flex flex-col items-center justify-center">
                <img
                  src={logo.src}
                  alt="Wild South Raiders Logo"
                  className="w-[150px] object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                />
                <p className="text-xs font-body text-vintage-beige/60 mt-3 leading-relaxed uppercase tracking-[0.16em] drop-shadow-md text-center">
                  Streaming Now On
                </p>
                <Platforms />
              </div>
            </div>
          </div>

          {/* Welcome Title & Description */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center z-30 px-6 pb-12 pointer-events-none">
            <div className="space-y-3 pointer-events-auto lg:max-w-full max-w-lg flex flex-col justtify-center">
              <span className="text-desert-orange font-display text-xs tracking-[0.25em] uppercase drop-shadow">
                South India's Tamil Podcast
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold relative inline-block">
                Wild South Raiders
              </h2>
              <p className="text-xs font-body text-vintage-beige/60 leading-relaxed uppercase tracking-[0.16em] drop-shadow-md">
                A deep dive into Politics, history, pop culture, and cinematic lore. Recorded weekly in Tamil.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* MOBILE & TABLET LAYOUT (lg breakpoint: hidden)           */}
      {/* ──────────────────────────────────────────────────────── */}
      <div
        className="flex lg:hidden w-full bg-transparent flex-col"
        style={{ padding: "12px" }}
      >
        <div className="relative w-full aspect-[3/4] max-h-[80vh] min-h-[480px] rounded-[12px] overflow-hidden bg-[#0D0D0D] flex flex-col shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Background Image */}
          <img
            src={mobileBg.src}
            alt="Wild South Raiders Background"
            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          />

          {/* Cinematic overlays */}
          <div className="absolute inset-0 bg-[#0D0D0D]/20 z-10 pointer-events-none" />
          <div className="dust-overlay z-10" />
          <div className="scratches-overlay z-10" />

          {/* Outer border outline overlay */}
          <div className="absolute inset-0 rounded-[6px] border border-[rgba(180,140,80,0.3)] pointer-events-none z-40" />

          {/* Top Header Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 pointer-events-auto">
            {/* Logo Left */}
            <a href="#home">
              <img
                src={logo.src}
                alt="Wild South Raiders Logo"
                className="w-[75px] sm:w-[95px] object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              />
            </a>

            {/* Hamburger Button Right */}
            <button
              onClick={toggleMenu}
              className="p-2 text-vintage-beige hover:text-desert-orange transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="w-7 h-7 sm:w-8 sm:h-8 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
            </button>
          </div>

          {/* Welcome Title & Description & Platforms (at the bottom of content) */}
          <div className="absolute inset-0 flex flex-col justify-end items-center text-center z-30 px-4 pb-6 sm:pb-8 pointer-events-none">
            <div className="space-y-2 sm:space-y-3 pointer-events-auto max-w-sm sm:max-w-md bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent p-4 rounded-b-[6px] w-full pt-8">
              <span className="text-desert-orange font-display text-[9px] sm:text-xs tracking-[0.2em] uppercase drop-shadow">
                South India's Tamil Podcast
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold relative inline-block leading-tight">
                Wild South <br className="xs:hidden" /> Raiders
              </h2>
              <p className="text-[9px] sm:text-xs font-body text-vintage-beige/60 leading-relaxed uppercase tracking-[0.12em] drop-shadow-md">
                A deep dive into Politics, history, pop culture, and cinematic lore. Recorded weekly in Tamil.
              </p>

              {/* Platforms listed at the bottom of the welcome content */}
              <div className="pt-2 border-t border-[#8A2C1D]/30 mt-2 flex justify-center">
                <Platforms />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────── */}
      {/* MOBILE SLIDE-IN NAVIGATION MENU OVERLAY                  */}
      {/* ──────────────────────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[100] flex transition-opacity duration-300 pointer-events-none ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
      >
        {/* Backdrop overlay */}
        <div
          className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300"
          onClick={closeMenu}
        />

        {/* Sidebar container (slides from left to right) */}
        <div
          className={`relative w-[280px] sm:w-[320px] h-full bg-gradient-to-br from-[#1c0a05] via-[#0D0D0D] to-[#1c0a05] border-r-2 border-[#8A2C1D] shadow-[5px_0_25px_rgba(0,0,0,0.5)] p-6 flex flex-col justify-between transition-transform duration-300 ease-in-out z-10 ${isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          {/* Dust and Scratches texturing inside side menu */}
          <div className="absolute inset-0 dust-overlay opacity-[0.03] pointer-events-none" />
          <div className="absolute inset-0 scratches-overlay opacity-[0.01] pointer-events-none" />

          <div className="relative z-20">
            {/* Header: Logo & Close Button */}
            <div className="flex justify-between items-center pb-6 border-b border-[#8A2C1D]/40">
              <img
                src={logo.src}
                alt="WSR Logo"
                className="w-[80px] object-contain"
              />
              <button
                onClick={closeMenu}
                className="p-1 text-vintage-beige hover:text-brand-red transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-8 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="font-display tracking-[0.16em] text-base sm:text-lg text-vintage-beige uppercase hover:text-desert-orange transition-colors duration-200 py-2.5 border-b border-white/[0.03]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Slogan Footer */}
          <div className="relative z-20 pt-4 border-t border-[#8A2C1D]/30 text-center">
            <p className="text-[10px] font-display text-desert-orange tracking-widest leading-relaxed">
              AZHUTHUKITU IRUNDHAALUM <br /> UZHUDHUKITU IRUPPOM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}