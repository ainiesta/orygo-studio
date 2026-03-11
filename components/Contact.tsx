"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto" className="py-28 px-[5vw] bg-black text-center">
      <div className="reveal">
        <span className="text-xs font-bold tracking-widest uppercase text-blue mb-3 block">Contacto</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white max-w-xl mx-auto mb-4">
          ¿Tienes un proyecto en mente?{" "}
          <span className="text-coral">Cuéntanoslo.</span>
        </h2>
        <p className="text-lg text-[#888] leading-relaxed max-w-lg mx-auto mb-12">
          Sin formularios eternos ni reuniones de descubrimiento de media hora.
          Escríbenos qué tienes en mente y te respondemos en 24 horas.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="reveal max-w-lg mx-auto flex flex-col gap-4 text-left"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Tu nombre"
            required
            className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
          />
          <input
            type="email"
            placeholder="tu@email.com"
            required
            className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="¿De qué va el proyecto?"
          className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
        />
        <textarea
          placeholder="Cuéntanos un poco más. Sin presión."
          rows={4}
          className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors resize-y"
        />
        <button
          type="submit"
          disabled={sent}
          className="bg-coral text-white font-bold text-base py-3 rounded-lg hover:bg-blue transition-all hover:-translate-y-0.5 disabled:opacity-80 disabled:cursor-default"
        >
          {sent ? "¡Mensaje enviado! Te respondemos pronto." : "Enviar mensaje →"}
        </button>
      </form>

      <p className="reveal mt-8 text-sm text-[#666]">
        O escríbenos directamente a{" "}
        <a href="mailto:hola@orygo.studio" className="text-blue font-semibold hover:underline">
          hola@orygo.studio
        </a>{" "}
        ·{" "}
        <a href="tel:659859313" className="text-blue font-semibold hover:underline">
          659 859 313
        </a>
      </p>
    </section>
  );
}
