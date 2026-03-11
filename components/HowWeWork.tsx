const steps = [
  { n: "01", title: "Lo entendemos bien", desc: "Antes de proponer nada, nos tomamos el tiempo de entender tu negocio, tus usuarios y el problema que quieres resolver. Sin escuchar no se puede ayudar." },
  { n: "02", title: "Proponemos algo concreto", desc: "Nada de propuestas genéricas. Te presentamos exactamente qué vamos a hacer, cuándo y cuánto cuesta — y lo discutimos hasta que tenga sentido para los dos." },
  { n: "03", title: "Trabajamos contigo, no para ti", desc: "Somos un equipo externo que trabaja como uno interno. Tienes acceso directo a quien hace, no a intermediarios que traducen lo que necesitas." },
  { n: "04", title: "Entregamos y acompañamos", desc: "Entregamos lo que prometimos. Y si algo no cuadra, lo hablamos y lo arreglamos. No desaparecemos al final del proyecto." },
];

export default function HowWeWork() {
  return (
    <section id="como" className="py-28 px-[5vw] bg-black">
      <div className="reveal">
        <span className="text-xs font-bold tracking-widest uppercase text-blue mb-3 block">Cómo trabajamos</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white mb-4">
          Sin misterios,<br /><span className="text-coral">sin sorpresas</span>
        </h2>
        <p className="text-lg text-[#999] leading-relaxed max-w-xl mb-14">
          Cada proyecto es distinto, pero nuestra forma de trabajar no cambia: directa,
          transparente y siempre contigo en el loop.
        </p>
      </div>

      <div className="flex flex-col max-w-2xl">
        {steps.map((s) => (
          <div
            key={s.n}
            className="reveal group flex gap-8 py-8 border-b border-[#2a2a2a] last:border-none"
          >
            <span className="text-5xl font-black text-blue opacity-30 group-hover:opacity-100 transition-opacity duration-300 leading-none w-12 flex-shrink-0">
              {s.n}
            </span>
            <div>
              <h3 className="text-[1.05rem] font-bold text-white mb-2">{s.title}</h3>
              <p className="text-[0.95rem] text-[#888] leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
