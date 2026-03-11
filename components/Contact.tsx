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

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            required
            className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
            className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
          />
        </div>
        <input
          name="proyecto"
          type="text"
          placeholder="¿De qué va el proyecto?"
          className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors"
        />
        <textarea
          name="mensaje"
          placeholder="Cuéntanos un poco más. Sin presión."
          rows={4}
          className="bg-[#242424] border border-[#333] text-white placeholder-[#666] rounded-lg px-4 py-3 text-base outline-none focus:border-blue transition-colors resize-y"
        />

        <button
          type="submit"
          disabled={status === "sending" || status === "success"}
          className="bg-coral text-white font-bold text-base py-3 rounded-lg hover:bg-blue transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-default disabled:hover:translate-y-0"
        >
          {status === "idle"    && "Enviar mensaje →"}
          {status === "sending" && "Enviando..."}
          {status === "success" && "¡Mensaje enviado! Te respondemos pronto."}
          {status === "error"   && "Algo ha fallado. Inténtalo de nuevo."}
        </button>

        {status === "error" && (
          <p className="text-sm text-coral text-center">
            Si el problema persiste, escríbenos directamente a{" "}
            <a href="mailto:hola@orygo.studio" className="underline">hola@orygo.studio</a>
          </p>
        )}
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
