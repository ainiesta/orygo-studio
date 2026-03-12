const cases = [
  {
    tag:         "Salud digital",
    title:       "App de gestión para clínicas",
    desc:        "Rediseñamos por completo la experiencia de pacientes y personal de una red de clínicas. Menos clics, menos errores, menos estrés.",
    metric:      "−40%",
    metricLabel: "Tiempo en gestión de citas",
  },
  {
    tag:         "E-commerce B2B",
    title:       "Plataforma de venta directa",
    desc:        "Construimos desde cero la plataforma de pedidos de un fabricante que vendía por teléfono. Ahora lo hace en automático, sin perder el trato personal.",
    metric:      "×3",
    metricLabel: "Volumen de pedidos en 6 meses",
  },
  {
    tag:         "EdTech",
    title:       "Formación corporativa digital",
    desc:        "Ayudamos a transformar cursos presenciales en una experiencia digital que la gente realmente usa — y termina.",
    metric:      "78%",
    metricLabel: "Tasa de finalización",
  },
];

export default function Cases() {
  return (
    <section id="casos" className="py-36 px-[5vw] bg-off text-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-black/25 mb-12">
        <span className="w-5 h-px bg-morado flex-shrink-0" />
        Casos de éxito
      </div>

      <h2 className="reveal font-display font-light italic text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.1] mb-20">
        Proyectos que<br />
        <em className="not-italic text-morado">nos enorgullecen</em>
      </h2>

      <div className="flex flex-col">
        {cases.map((c) => (
          <div
            key={c.title}
            className="reveal group grid md:grid-cols-3 gap-10 md:gap-16 items-start py-16 border-t border-black/[0.08] last:border-b hover:bg-morado/[0.03] transition-colors duration-300 -mx-[5vw] px-[5vw]"
          >
            <div>
              <span className="block text-[0.65rem] font-normal tracking-[0.2em] uppercase text-morado mb-4">
                {c.tag}
              </span>
              <h3 className="font-display font-light italic text-[1.8rem] leading-[1.2] text-black">
                {c.title}
              </h3>
            </div>
            <p className="text-[0.9rem] font-light text-mid leading-[1.75] pt-1">
              {c.desc}
            </p>
            <div>
              <div className="font-display font-light italic text-[3rem] leading-none text-morado">
                {c.metric}
              </div>
              <div className="text-[0.75rem] font-light text-mid tracking-[0.08em] mt-1">
                {c.metricLabel}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
