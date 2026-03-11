const services = [
  { icon: "🎯", name: "Estrategia de producto", desc: "Te ayudamos a definir qué construir y por qué. Identificamos lo que importa de verdad a tus usuarios y priorizamos sin rodeos." },
  { icon: "✏️", name: "Diseño UX/UI", desc: "Interfaces que la gente entiende a la primera. Diseñamos con criterio, probamos con usuarios reales y ajustamos hasta que funciona." },
  { icon: "💻", name: "Desarrollo web y app", desc: "Construimos lo que diseñamos. Webs, aplicaciones, integraciones — todo con código limpio y enfocado en que escale contigo." },
  { icon: "🤖", name: "Consultoría de IA", desc: "Te ayudamos a integrar la IA donde de verdad tiene sentido. Sin hype, sin promesas vacías. Solo lo que te ahorra tiempo y te hace más capaz." },
  { icon: "🔍", name: "UX Research", desc: "Hablamos con tus usuarios para entender qué les frena, qué les encanta y qué ni saben que necesitan. Luego te lo contamos sin datos de relleno." },
  { icon: "🚀", name: "Lanzamiento y Growth", desc: "El producto está listo. Ahora toca que llegue a quien tiene que llegar. Te ayudamos con la estrategia de lanzamiento y los primeros pasos de crecimiento." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-[5vw] bg-white">
      <div className="reveal">
        <span className="text-xs font-bold tracking-widest uppercase text-blue mb-3 block">Servicios</span>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-black mb-4">
          Qué podemos<br /><span className="text-coral">hacer juntos</span>
        </h2>
        <p className="text-lg text-[#555] leading-relaxed max-w-xl mb-14">
          Desde la primera idea hasta el lanzamiento — y más allá. Trabajamos contigo en cada fase,
          sin delegarlo todo a herramientas automáticas.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.name}
            className="reveal group bg-[#fafafa] border border-[#e0e0e0] rounded-xl p-8 relative overflow-hidden
                       hover:shadow-[0_10px_40px_rgba(1,102,255,0.1)] hover:-translate-y-1 hover:border-blue/20
                       transition-all duration-300"
          >
            {/* Top bar */}
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-blue scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            <div className="w-11 h-11 bg-blue/[0.08] rounded-lg flex items-center justify-center text-xl mb-5">
              {s.icon}
            </div>
            <h3 className="text-[1.05rem] font-bold text-black mb-2">{s.name}</h3>
            <p className="text-[0.95rem] text-[#666] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
