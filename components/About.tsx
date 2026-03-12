const stats = [
  { num: "+40",  label: "Proyectos" },
  { num: "6",    label: "Años" },
  { num: "100%", label: "Repiten" },
  { num: "0",    label: "Buzzwords" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-36 px-[5vw] bg-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-off/25 mb-16">
        <span className="w-5 h-px bg-lima flex-shrink-0" />
        Nosotros
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-center">
        <div className="reveal">
          <h2 className="font-display font-light italic text-[clamp(2.8rem,5vw,5rem)] leading-[1.1] text-off mb-10">
            Un equipo pequeño<br />
            que hace cosas <em className="not-italic text-lima">grandes.</em>
          </h2>
          <div className="space-y-5 text-[0.95rem] font-light text-off/40 leading-[1.85]">
            <p>
              Orygo Studio no es una gran agencia. Somos un equipo de personas con mucho oficio en
              producto digital — diseñadores, desarrolladores y estrategas que prefieren hacer bien
              pocas cosas a hacer mal muchas.
            </p>
            <p>
              <strong className="text-off/75 font-normal">La IA forma parte de cómo trabajamos</strong>,
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
            style={{ background: "rgba(245,244,240,0.06)" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-black p-10">
                <div className="font-display font-light italic text-[3.2rem] leading-none text-off mb-1">
                  {s.num}
                </div>
                <div className="text-[0.72rem] font-normal tracking-[0.12em] uppercase text-off/25">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p className="font-display font-light italic text-[1.25rem] text-off/35 leading-[1.6] pl-6 border-l border-lima">
            "Lo hacemos simple porque simple funciona."
          </p>
        </div>
      </div>
    </section>
  );
}
