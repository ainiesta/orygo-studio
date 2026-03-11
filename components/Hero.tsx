export default function Hero() {
  const items = [
    { color: "bg-blue", label: "Diseño de producto" },
    { color: "bg-coral", label: "Estrategia digital" },
    { color: "bg-yellow", label: "Desarrollo web y app" },
    { color: "bg-blue", label: "Consultoría de IA" },
    { color: "bg-coral", label: "UX Research" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen bg-black grid md:grid-cols-2 items-center px-[5vw] pt-32 pb-20 relative overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue rounded-full opacity-10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-16 left-[5vw] w-2.5 h-2.5 bg-yellow rounded-full" />

      {/* Content */}
      <div className="relative z-10">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-coral border border-coral px-3 py-1 rounded-sm mb-7">
          Producto digital · Con alma
        </span>
        <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-black leading-none tracking-tight text-white mb-6">
          Tu producto<br />
          merece a<br />
          <span className="text-blue">personas reales</span>
        </h1>
        <p className="text-lg text-[#b0b0b0] max-w-[440px] leading-relaxed mb-10">
          Te ayudamos a construir, mejorar y lanzar productos digitales.
          Usamos la IA, pero quien piensa y decide siempre es alguien de carne y hueso.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contacto"
            className="bg-blue text-white font-bold text-base px-8 py-3 rounded hover:bg-coral transition-all hover:-translate-y-0.5"
          >
            Hablamos
          </a>
          <a
            href="#servicios"
            className="border border-white/30 text-white font-semibold text-base px-8 py-3 rounded hover:border-blue hover:text-blue transition-colors"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Card */}
      <div className="relative z-10 flex md:justify-end mt-12 md:mt-0">
        <div className="float-card bg-[#242424] border border-[#333] rounded-xl p-8 w-full max-w-[340px]">
          <p className="text-[0.72rem] font-bold tracking-widest uppercase text-[#666] mb-4">
            Lo que hacemos
          </p>
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 py-2.5 border-b border-[#333] last:border-none"
            >
              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
              <span className="text-[0.9rem] text-white">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
