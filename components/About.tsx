const stats = [
  { num: "+40", label: "Proyectos entregados" },
  { num: "6",   label: "Años en activo" },
  { num: "100%", label: "Clientes que repiten" },
  { num: "0",   label: "Buzzwords en nuestras propuestas" },
];

export default function About() {
  return (
    <section
      id="nosotros"
      className="py-28 px-[5vw] bg-blue grid md:grid-cols-2 gap-16 items-center"
    >
      <div className="reveal">
        <span className="text-xs font-bold tracking-widest uppercase text-yellow mb-3 block">Sobre nosotros</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white mb-8">
          Un equipo pequeño<br />que hace cosas <span className="text-coral">grandes</span>
        </h2>
        <div className="space-y-4 text-[1.05rem] text-white/80 leading-relaxed">
          <p>
            Orygo Studio no es una gran agencia. Somos un equipo de personas con mucho oficio en
            producto digital — diseñadores, desarrolladores y estrategas que prefieren hacer bien
            pocas cosas a hacer mal muchas.
          </p>
          <p>
            <strong className="text-white">La IA forma parte de cómo trabajamos</strong>, pero no es
            lo que nos define. Nos define el cuidado con el que tratamos cada proyecto y la honestidad
            con la que hablamos con cada cliente.
          </p>
          <p>
            Si algo no podemos hacerlo, te lo decimos. Y si podemos, nos ponemos a ello desde el
            primer día.
          </p>
        </div>
      </div>

      <div className="reveal grid grid-cols-2 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-white leading-none mb-1">{s.num}</div>
            <div className="text-sm text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
