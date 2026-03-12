"use client";
import { useReveal } from "@/components/useReveal";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <HowWeWork />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
