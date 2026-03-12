const services = [
  { num: "01", name: "Estrategia de producto",  desc: "Definimos qué construir y por qué, sin rodeos ni propuestas genéricas. Identificamos lo que importa de verdad a tus usuarios." },
  { num: "02", name: "Creación de marca",        desc: "Construimos marcas desde cero: nombre, identidad visual y voz. Sin kits genéricos, sin atajos — solo lo que hace que te recuerden." },
  { num: "03", name: "Diseño UX/UI & Research", desc: "Primero hablamos con tus usuarios para entender qué les frena. Luego diseñamos interfaces que la gente entiende a la primera." },
  { num: "04", name: "Desarrollo web y app",     desc: "Te ayudamos a montar un producto viable y acompañamos a los equipos de desarrollo para que todo sea un proceso indoloro." },
  { num: "05", name: "Consultoría de IA",        desc: "IA donde de verdad tiene sentido. Sin hype, sin promesas vacías. Solo lo que te ahorra tiempo y te hace más capaz." },
  { num: "06", name: "Lanzamiento y Growth",     desc: "El producto está listo. Ahora toca que llegue a quien tiene que llegar. Estrategia de lanzamiento y primeros pasos de crecimiento." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-36 px-[5vw] bg-off text-black">
      {/* Label */}
      <div className="reveal flex items-center gap-4 text-[0.68rem] font-normal tracking-[0.25em] uppercase text-black/25 mb-12">
        <span className="w-5 h-px bg-magenta flex-shrink-0" />
        Servicios
      </div>

      {/* Header */}
      <div className="grid md:grid-cols-2 gap-16 items-end mb-20">
        <h2 className="reveal font-display font-light italic text-[clamp(2.8rem,5.5vw,5.5rem)] leading-[1.1] text-black">
          Qué podemos<br />
          <em className="not-italic text-magenta">hacer juntos</em>
        </h2>
        <p className="reveal text-[0.95rem] font-light text-mid leading-[1.8] max-w-sm self-end">
          Desde la primera idea hasta el lanzamiento — y más allá. Trabajamos contigo
          en cada fase, sin delegarlo todo a herramientas automáticas.
        </p>
      </div>

      {/* List */}
      <div className="flex flex-col">
        {services.map((s) => (
          <div
            key={s.num}
            className="reveal group grid grid-cols-[3rem_1fr_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-center gap-8 py-7 border-t border-black/[0.08] last:border-b hover:pl-2 transition-all duration-300"
          >
            <span className="text-[0.65rem] font-normal tracking-[0.15em] text-black/30 group-hover:text-magenta transition-colors">
              {s.num}
            </span>
            <span className="font-display font-light italic text-[clamp(1.2rem,2vw,1.8rem)] group-hover:text-magenta transition-colors">
              {s.name}
            </span>
            <span className="hidden md:block text-[0.85rem] font-light text-mid leading-[1.6]">
              {s.desc}
            </span>
            <span className="text-magenta opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-base">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
