const steps = [
  { n: "01", title: "Lo entendemos bien",         desc: "Antes de proponer nada, nos tomamos el tiempo de entender tu negocio, tus usuarios y el problema que quieres resolver. Sin escuchar no se puede ayudar." },
  { n: "02", title: "Algo concreto, sin rodeos",   desc: "Nada de propuestas genéricas. Te presentamos exactamente qué vamos a hacer, cuándo y cuánto cuesta — y lo discutimos hasta que tenga sentido para los dos." },
  { n: "03", title: "Contigo, no para ti",         desc: "Somos un equipo externo que trabaja como uno interno. Tienes acceso directo a quien hace, no a intermediarios que traducen lo que necesitas." },
  { n: "04", title: "No desaparecemos",            desc: "Entregamos lo que prometimos. Y si algo no cuadra, lo hablamos y lo arreglamos. No desaparecemos al final del proyecto." },
];

export default function HowWeWork() {
  return (
    <section id="como" className="py-36 px-[5vw] bg-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-off/25 mb-16">
        <span className="w-5 h-px bg-lima flex-shrink-0" />
        Proceso
      </div>

      <div className="grid md:grid-cols-[1fr_1.2fr] gap-24 items-start">
        {/* Sticky heading */}
        <div className="reveal md:sticky md:top-32">
          <h2 className="font-display font-light italic text-[clamp(2.8rem,5vw,5rem)] leading-[1.1] text-off mb-8">
            Sin misterios,<br />
            sin <em className="not-italic text-cian">sorpresas.</em>
          </h2>
          <div className="w-8 h-px bg-lima mb-6" />
          <p className="text-[0.9rem] font-light text-off/35 leading-[1.8] max-w-[280px]">
            Cada proyecto es distinto, pero nuestra forma de trabajar no cambia:
            directa, transparente y siempre contigo en el loop.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((s) => (
            <div
              key={s.n}
              className="reveal grid grid-cols-[2.5rem_1fr] gap-6 py-10 border-t border-off/[0.06] last:border-b"
            >
              <span className="text-[0.62rem] font-normal tracking-[0.15em] text-lima pt-1">
                {s.n}
              </span>
              <div>
                <h3 className="font-display font-normal italic text-xl text-off mb-3">
                  {s.title}
                </h3>
                <p className="text-[0.9rem] font-light text-off/35 leading-[1.75]">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
