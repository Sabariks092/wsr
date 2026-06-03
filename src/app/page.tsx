"use client";

import Hero from "../components/Hero";
import About from "../components/About";
import Episodes from "../components/Episodes";
import Raiders from "../components/Raiders";
import ListenersJoys from "../components/ListenersJoys";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-charcoal">
      <Hero />
      <About />
      <Raiders />
      <Episodes />
      <ListenersJoys />
      <Contact />
    </main>
  );
}
