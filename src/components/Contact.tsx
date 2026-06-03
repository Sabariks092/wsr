"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Copyright, Mail, MapPin, Phone } from "lucide-react";

// Import social media 3D icons
import whatsappIcon from "@/app/assets/images/sm/3dicons-whatsapp-front-color.png";
import xIcon from "@/app/assets/images/sm/3dicons-x-front-color.png";
import instagramIcon from "@/app/assets/images/sm/3dicons-instagram-front-color.png";
import discordIcon from "@/app/assets/images/sm/3dicons-discord-front-color.png";
import logo from "@/app/assets/images/logo/logo-without-bg.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    regarding: "podcast-collaboration",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Outlaw Contact Form submitted:", formData);
    setSubmitted(true);
    // Reset form after submit
    setFormData({
      name: "",
      email: "",
      mobile: "",
      regarding: "podcast-collaboration",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "WhatsApp", icon: whatsappIcon, url: "https://whatsapp.com/channel/0029Va9aaK78F2pKhVgphi0q" },
    { name: "X", icon: xIcon, url: "https://x.com/southraidersoff" },
    { name: "Instagram", icon: instagramIcon, url: "https://www.instagram.com/southraiders_official/" },
    { name: "Discord", icon: discordIcon, url: "https://discord.com/invite/mz3kNKJ2dw" },
  ];

  return (
    <section id="contact" className="relative w-full bg-[#0D0D0D] py-20 px-6 md:px-12 overflow-hidden flex flex-col justify-center ">
      {/* Background Video */}
      <video
        src="/arthur-morgan-sunset.1920x1080.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top z-0 pointer-events-none"
      />
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#1A0A05]/40 to-[#0D0D0D]/90 pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      {/* <div className="scratches-overlay z-10" /> */}

      {/* Grid container with container width only (no max-width limits) */}
      <div className="relative w-full container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start z-20 px-2">

        {/* Left Grid: Contact Details & Social Media */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
            Join the Gang
          </span>
          <img src={logo.src} width={150} className="shadow-lg" alt="" />

          <div>

            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold pb-4 ">
              Get in Touch
            </h2>
          </div>

          <p className="font-body text-xs sm:text-sm max-w-lg text-vintage-beige/70 leading-relaxed uppercase tracking-[0.06em]">
            Have a proposal, want to sponsor a roast, collaborate on a podcast, make a donation, or send a friendly (or threatening) dispatch from the frontier? Leave us a message.
          </p>


          {/*  <div className="space-y-4 font-body text-xs sm:text-sm text-vintage-beige/80 uppercase tracking-widest">
            <div className="flex items-center max-w-lg gap-4 p-3 bg-black/20 rounded border border-[#8A2C1D]/30">
              <Mail className="text-desert-orange" size={20} />
              <div>
                <span className="block text-[8px] text-vintage-beige/50 font-bold tracking-widest leading-none">DISPATCH EMAIL</span>
                <span className="block mt-1 lowercase tracking-normal">southraidersofficial@gmail.com</span>
              </div>
            </div>


          </div> */}

          {/* Social Media Links with 3D Icons */}
          <div className="space-y-4">
            {/* <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              Follow Our Dispatches
            </span> */}
            <div className="flex flex-wrap gap-4 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 bg-black/40 border border-[#8A2C1D]/40 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 hover:border-[#D9B06A] transition-all duration-300 group"
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="object-contain w-[100%] h-[100%] transform group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Grid: Interactive Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-none bg-transparent flex justify-center"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 space-y-4"
            >
              <span className="font-display text-5xl text-desert-orange block">
                DISPATCH SENT
              </span>
              <p className="font-body text-xs sm:text-sm text-vintage-beige/90 uppercase tracking-widest leading-relaxed">
                Your message has been locked in the saddlebag. The Raiders will read it at the next campfire.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 w-full  border px-8 py-10 mx-auto text-left">
              {/* Name */}


              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div className="flex flex-col space-y-1.5">
                  {/* <label className="font-display text-[10px] text-vintage-beige tracking-widest uppercase">
                          RAIDER NAME
                        </label> */}
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your alias"
                    className="w-full bg-transparent border-b-1 border-gold rounded-none p-3 font-body text-xs sm:text-sm text-vintage-beige focus:border-desert-orange outline-none uppercase tracking-wider transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  {/* <label className="font-display text-[10px] text-vintage-beige tracking-widest uppercase">
                            EMAIL ADDRESS
                          </label> */}
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mail@frontier.com"
                    className="w-full bg-transparent border-b-1 border-gold rounded-none p-3 font-body text-xs sm:text-sm text-vintage-beige focus:border-desert-orange outline-none tracking-wider transition-colors duration-200"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5">
                {/* <label className="font-display text-[10px] text-vintage-beige tracking-widest uppercase">
                          RAIDER NAME
                        </label> */}
                <input
                  type="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full bg-transparent border-b-1 border-gold rounded-none p-3 font-body text-xs sm:text-sm text-vintage-beige focus:border-desert-orange outline-none uppercase tracking-wider transition-colors duration-200"
                />
              </div>

              {/* Regarding Dropdown */}
              <div className="flex flex-col space-y-1.5">
                {/* <label className="font-display text-[10px] text-vintage-beige tracking-widest uppercase">
                          REGARDING
                        </label> */}
                <div className="relative">
                  <select
                    name="regarding"
                    value={formData.regarding}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-1 border-gold rounded-none p-3 font-body text-xs sm:text-sm text-vintage-beige focus:border-desert-orange outline-none uppercase tracking-wider appearance-none transition-colors duration-200 cursor-pointer"
                  >
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="podcast-collaboration">Podcast Collaboration</option>
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="promotion-collaboration">Promotion Collaboration</option>
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="donation">Donation</option>
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="threatening">Threatening</option>
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="threatening">APPRECIATION</option>
                    <option className="bg-[#0D0D0D] text-vintage-beige" value="threatening">SOMMA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#D9B06A]">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-1.5">
                {/* <label className="font-display text-[10px] text-vintage-beige tracking-widest uppercase">
                          THE DISPATCH MESSAGE
                        </label> */}
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="State your business..."
                  className="w-full bg-transparent border-b-1 border-gold rounded-none p-3 font-body text-xs sm:text-sm text-vintage-beige focus:border-desert-orange outline-none uppercase tracking-wider transition-colors duration-200 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#C91A1A] hover:bg-[#F08E2A] text-vintage-beige hover:text-black font-display text-sm tracking-[0.2em] uppercase py-4 rounded-none border-2 border-[#8A2C1D] shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(240,142,42,0.35)] cursor-pointer"
              >
                Send Dispatch
              </button>
            </form>
          )}
        </motion.div>

      </div>
      <div className="w-full max-w-7xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-[#8A2C1D]/60 to-transparent mt-16 z-20" />
      <div className="flex justify-between items-center container mx-auto mt-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10px] sm:text-xs font-body text-vintage-beige/60  leading-relaxed flex items-center gap-2 uppercase tracking-[0.16em] drop-shadow-md mx-auto"
        >
          <Copyright/> 2026 All rightsn Reserved By Wild South Raiders. 
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10px] sm:text-xs font-body text-vintage-beige/60 leading-relaxed uppercase tracking-[0.16em] drop-shadow-md mx-auto"
        >
         Online Presence Powered By <a href="https://samhub.in" target="_blank" rel="noopenner" className="hover: underline underline-offset-8 decoration-dessert-orange">Samhub Innovations</a>
        </motion.p>
      </div>
    </section>
  );
}