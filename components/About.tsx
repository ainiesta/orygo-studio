const stats = [
  { num: "+40",  label: "Proyectos" },
  { num: "+20",  label: "Años de experiencia" },
  { num: "100%", label: "Repiten (o no)" },
  { num: "0,5",  label: "Buzzwords" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-36 px-[5vw] bg-off text-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-black/40 mb-16">
        <span className="w-5 h-px bg-magenta flex-shrink-0" />
        Nosotros
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="reveal">
          <h2 className="font-display font-light italic text-[clamp(2.8rem,5vw,5rem)] leading-[1.1] text-black mb-10">
            Un equipo pequeño<br />
            que hace cosas <em className="not-italic text-magenta">grandes.</em>
          </h2>
          <div className="space-y-5 text-[0.95rem] font-light text-black/60 leading-[1.85]">
            <p>
              Orygo Studio no es una gran agencia. Somos un equipo de personas con mucho oficio en
              producto digital — diseñadores, desarrolladores y estrategas que prefieren hacer bien
              pocas cosas a hacer mal muchas.
            </p>
            <p>
              <strong className="text-black font-normal">La IA forma parte de cómo trabajamos</strong>,
              pero no es lo que nos define. Nos define el cuidado con el que tratamos cada proyecto
              y la honestidad con la que hablamos con cada cliente.
            </p>
            <p>
              Si algo no podemos hacerlo, te lo decimos. Y si podemos, nos ponemos a ello desde
              el primer día.
            </p>
          </div>
        </div>

        <div className="reveal flex flex-col gap-6">
          {/* Stats grid */}
          <div
            className="grid grid-cols-2 gap-px"
            style={{ background: "rgba(131,56,235,0.15)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-morado p-10">
                <div className="font-display font-light italic text-[3.2rem] leading-none text-lima mb-1">
                  {s.num}
                </div>
                <div className="text-[0.72rem] font-normal tracking-[0.12em] uppercase text-off/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="font-display font-light italic text-[1.25rem] text-black/45 leading-[1.6] pl-6 border-l border-magenta/40">
            "Lo hacemos simple porque simple funciona."
          </p>
        </div>
      </div>
    </section>
  );
}
