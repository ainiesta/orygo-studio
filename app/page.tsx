"use client";
import { useReveal } from "@/components/useReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Cases from "@/components/Cases";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  useReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Cases />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
