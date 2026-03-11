const cases = [
  {
    bg: "bg-[#e8f0ff]", emoji: "🏥",
    tag: "Salud digital",
    title: "App de gestión para clínicas",
    desc: "Rediseñamos por completo la experiencia de pacientes y personal de una red de clínicas. Menos clics, menos errores, menos estrés.",
    result: "↓ 40% tiempo en gestión de citas",
  },
  {
    bg: "bg-[#fff0e8]", emoji: "🛒",
    tag: "E-commerce",
    title: "Plataforma de venta directa B2B",
    desc: "Construimos desde cero la plataforma de pedidos de un fabricante que vendía por teléfono y email. Ahora lo hace en automático, sin perder el trato personal.",
    result: "↑ 3× volumen de pedidos en 6 meses",
  },
  {
    bg: "bg-[#f0ffe8]", emoji: "🎓",
    tag: "EdTech",
    title: "Plataforma de formación corporativa",
    desc: "Ayudamos a una empresa de formación a transformar sus cursos presenciales en una experiencia digital que la gente realmente usa — y termina.",
    result: "↑ 78% tasa de finalización",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-28 px-[5vw] bg-[#f5f5f5]">
      <div className="reveal">
        <span className="text-xs font-bold tracking-widest uppercase text-blue mb-3 block">Casos de éxito</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-black mb-4">
          Proyectos que<br /><span className="text-coral">nos enorgullecen</span>
        </h2>
        <p className="text-lg text-[#555] leading-relaxed max-w-xl mb-14">
          Cada proyecto tiene su historia. Aquí van algunos de los que más nos han enseñado
          — y más les han ayudado a ellos.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((c) => (
          <div
            key={c.title}
            className="reveal bg-white rounded-xl overflow-hidden border border-[#e5e5e5]
                       hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`h-44 flex items-center justify-center text-5xl ${c.bg}`}>
              {c.emoji}
            </div>
            <div className="p-6">
              <span className="text-xs font-bold tracking-widest uppercase text-coral mb-2 block">{c.tag}</span>
              <h3 className="text-[1.05rem] font-bold text-black mb-2">{c.title}</h3>
              <p className="text-[0.92rem] text-[#666] leading-relaxed">{c.desc}</p>
              <div className="mt-4 pt-4 border-t border-[#eee] text-sm font-semibold text-blue">
                {c.result}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
