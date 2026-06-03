"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

// Import social media 3D icons
import whatsappIcon from "@/app/assets/images/sm/3dicons-whatsapp-front-color.png";
import xIcon from "@/app/assets/images/sm/3dicons-x-front-color.png";
import instagramIcon from "@/app/assets/images/sm/3dicons-instagram-front-color.png";
import discordIcon from "@/app/assets/images/sm/3dicons-discord-front-color.png";
import bg from "@/app/assets/images/bg/contact-bg.jpg"

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
    <section id="contact" className="relative w-full  py-20 px-6 md:px-12 overflow-hidden flex flex-col justify-center " style={{ backgroundImage: `url(${bg.src})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      {/* Background aesthetic textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/90 via-[#1A0A05]/40 to-[#0D0D0D]/90 pointer-events-none z-0" />
      <div className="dust-overlay z-10" />
      {/* <div className="scratches-overlay z-10" /> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Centered container */}
      <div className="relative w-full container mx-auto flex flex-col items-center justify-center z-20 px-2">

        {/* Centered Left Grid: Contact Details & Social Media */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center text-center space-y-8 w-full max-w-2xl mx-auto"
        >
          <div>
            <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              Join the Gang
            </span>
            <h2 className="font-display text-4xl sm:text-4xl md:text-5xl text-vintage-beige tracking-[0.05em] uppercase text-shadow-gold ">
              Get in Touch
            </h2>
          </div>

          <p className="font-body text-xs sm:text-sm max-w-lg text-vintage-beige/70 leading-relaxed uppercase tracking-[0.06em] text-center mx-auto">
            Have a proposal, want to sponsor a roast, collaborate on a podcast, make a donation, or send a friendly (or threatening) dispatch from the frontier? Leave us a message.
          </p>

          {/* Contact Details List */}
          {/* <div className="space-y-4 font-body text-xs sm:text-sm text-vintage-beige/80 uppercase tracking-widest">
            <div className="flex items-center max-w-lg gap-4 p-3 bg-black/20 rounded border border-[#8A2C1D]/30">
              <Mail className="text-desert-orange" size={20} />
              <div>
                <span className="block text-[8px] text-vintage-beige/50 font-bold tracking-widest leading-none">DISPATCH EMAIL</span>
                <span className="block mt-1 lowercase tracking-normal">southraidersofficial@gmail.com</span>
              </div>
            </div>


          </div> */}
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
            <form onSubmit={handleSubmit} className="space-y-5 w-full max-w-xl border px-8 py-10 mx-auto text-left">
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

          {/* Social Media Links with 3D Icons */}
          <div className="space-y-4">
            <span className="text-desert-orange font-display text-xs sm:text-sm tracking-[0.3em] uppercase block mb-3 text-shadow-cinematic">
              Follow Our Dispatches
            </span>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-16 h-16  rounded-lg flex items-center justify-center shadow-lg hover:scale-110 hover:border-[#D9B06A] transition-all duration-300 group"
                  title={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="object-contain grayscale w-[100%] h-[100%] transform group-hover:rotate-12 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Grid: Interactive Form */}
       

      </div>
      <div>
        
      </div>
      </div>
        
      
    </section>
  );
}
