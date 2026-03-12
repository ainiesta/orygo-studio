const items = [
  "Diseño de producto", "Estrategia digital", "Desarrollo web",
  "UX Research", "Consultoría de IA", "Creación de marca", "Lanzamiento",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="border-t border-b border-off/[0.06] overflow-hidden py-4 flex">
      <div
        className="flex gap-16 whitespace-nowrap flex-shrink-0"
        style={{ animation: "marqueeScroll 24s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-16">
            <span className="font-display font-light italic text-sm tracking-wide text-off/20">
              {item}
            </span>
            <span className="text-lima opacity-60 text-[8px]">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
