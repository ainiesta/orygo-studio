"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      nombre:   (form.elements.namedItem("nombre")   as HTMLInputElement).value,
      email:    (form.elements.namedItem("email")    as HTMLInputElement).value,
      proyecto: (form.elements.namedItem("proyecto") as HTMLInputElement).value,
      mensaje:  (form.elements.namedItem("mensaje")  as HTMLTextAreaElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else          setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const fieldCls = "w-full bg-transparent border-none outline-none font-sans text-base font-light text-black placeholder-black/25";

  return (
    <section id="contacto" className="py-36 px-[5vw] bg-off text-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-black/25 mb-16">
        <span className="w-5 h-px bg-cian flex-shrink-0" />
        Contacto
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-start">
        {/* Left */}
        <div className="reveal">
          <h2 className="font-display font-light italic text-[clamp(2.8rem,5vw,5rem)] leading-[1.1] mb-6">
            ¿Tienes un proyecto?<br />
            <em className="not-italic text-magenta">Cuéntanoslo.</em>
          </h2>
          <p className="text-[0.95rem] font-light text-mid leading-[1.8] mb-10">
            Sin formularios eternos ni reuniones de media hora.
            Escríbenos y te respondemos en 24 horas.
          </p>
          <div className="flex flex-col gap-3">
            <a href="mailto:hola@orygo.studio" className="text-[0.85rem] font-normal text-mid hover:text-black transition-colors flex items-center gap-3">
              <span className="text-magenta text-[0.75rem]">→</span>
              hola@orygo.studio
            </a>
            <a href="tel:659859313" className="text-[0.85rem] font-normal text-mid hover:text-black transition-colors flex items-center gap-3">
              <span className="text-magenta text-[0.75rem]">→</span>
              659 859 313
            </a>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="reveal flex flex-col">
          <div className="grid sm:grid-cols-2">
            <div className="py-5 border-t border-black/10 sm:border-r sm:border-black/10 focus-within:border-cian transition-colors sm:pr-8">
              <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-black/40 mb-1">Nombre</label>
              <input name="nombre" type="text" placeholder="Tu nombre" required className={fieldCls} />
            </div>
            <div className="py-5 border-t border-black/10 sm:pl-8 focus-within:border-cian transition-colors">
              <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-black/40 mb-1">Email</label>
              <input name="email" type="email" placeholder="tu@email.com" required className={fieldCls} />
            </div>
          </div>
          <div className="py-5 border-t border-black/10 focus-within:border-cian transition-colors">
            <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-black/40 mb-1">Proyecto</label>
            <input name="proyecto" type="text" placeholder="¿De qué va?" className={fieldCls} />
          </div>
          <div className="py-5 border-t border-black/10 focus-within:border-cian transition-colors">
            <label className="block text-[0.62rem] tracking-[0.2em] uppercase text-black/40 mb-1">Mensaje</label>
            <textarea name="mensaje" placeholder="Cuéntanos un poco más. Sin presión." rows={3} className={`${fieldCls} resize-none`} />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="mt-8 self-start flex items-center gap-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase text-black hover:text-magenta transition-colors disabled:opacity-50"
          >
            <span>
              {status === "idle"    && "Enviar mensaje"}
              {status === "sending" && "Enviando…"}
              {status === "success" && "¡Enviado! Te respondemos pronto."}
              {status === "error"   && "Algo ha fallado. Inténtalo de nuevo."}
            </span>
            <span className="w-11 h-11 rounded-full border border-black flex items-center justify-center text-base hover:bg-magenta hover:border-magenta hover:text-white transition-all duration-300">
              ↗
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
