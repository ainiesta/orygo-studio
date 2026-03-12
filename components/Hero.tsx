// Pre-compute char animations at module level (static delays)
type CharData = { char: string; cls: string; delay: number };

const LINES: Array<Array<{ text: string; cls: string }>> = [
  [{ text: "Tu producto",  cls: "" }],
  [{ text: "merece",       cls: "" }],
  [{ text: "a\u00A0",      cls: "" }, { text: "personas", cls: "text-lima" }],
  [{ text: "reales.",      cls: "italic text-off/40" }],
];

let _d = 0.4;
const PROCESSED_LINES: CharData[][] = LINES.map((words) => {
  const chars = words.flatMap(({ text, cls }) =>
    [...text].map((char) => {
      const delay = _d;
      _d += char === " " || char === "\u00A0" ? 0.02 : 0.038;
      return { char, cls, delay };
    })
  );
  _d += 0.1;
  return chars;
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-[5vw] pt-32 pb-20 relative overflow-hidden bg-black"
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 80% 20%, rgba(131,56,235,0.15) 0%, transparent 60%),
            radial-gradient(ellipse 50% 60% at 10% 80%, rgba(0,187,250,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(192,255,0,0.04) 0%, transparent 70%)
          `,
          animation: "meshShift 12s ease-in-out infinite alternate",
        }}
      />
      <div className="absolute left-0 right-0 top-1/2 h-px bg-off/[0.04] pointer-events-none" />

      {/* Pre-label */}
      <p
        className="text-[0.7rem] font-normal tracking-[0.3em] uppercase text-off/30 mb-10 relative z-10"
        style={{ opacity: 0, animation: "charReveal 1s 0.3s forwards" }}
      >
        Consultora de producto digital · Madrid
      </p>

      {/* Animated title */}
      <h1
        className="font-display font-light text-[clamp(3.5rem,8vw,8rem)] leading-[1.05] tracking-tight text-off mb-14 relative z-10"
        aria-label="Tu producto merece a personas reales"
      >
        {PROCESSED_LINES.map((chars, li) => (
          <span key={li} className="block overflow-hidden">
            {chars.map(({ char, cls, delay }, ci) =>
              char === " " || char === "\u00A0" ? (
                <span key={ci} className="inline-block w-[0.3em]" />
              ) : (
                <span
                  key={ci}
                  className={`inline-block ${cls}`}
                  style={{
                    animation: `charReveal 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s forwards`,
                    transform: "translateY(110%)",
                    opacity: 0,
                  }}
                >
                  {char}
                </span>
              )
            )}
          </span>
        ))}
      </h1>

      {/* Bottom row */}
      <div
        className="flex flex-wrap justify-between items-end gap-10 relative z-10"
        style={{ opacity: 0, animation: "charReveal 1.2s 2.2s forwards" }}
      >
        <p className="text-base font-light text-off/45 max-w-[400px] leading-[1.8]">
          Te ayudamos a construir, mejorar y lanzar productos digitales. Usamos la IA,
          pero{" "}
          <strong className="text-off/75 font-normal">
            quien piensa y decide siempre es alguien de carne y hueso.
          </strong>
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#contacto"
            className="bg-lima text-black text-[0.78rem] font-semibold tracking-[0.15em] uppercase px-8 py-4 hover:-translate-y-0.5 transition-transform duration-200"
          >
            Hablamos
          </a>
          <a
            href="#servicios"
            className="text-[0.78rem] font-normal tracking-[0.12em] uppercase text-off/30 hover:text-off transition-colors flex items-center gap-2"
          >
            Ver servicios <span className="transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-[5vw] flex items-center gap-4"
        style={{ opacity: 0, animation: "charReveal 1s 3.5s forwards" }}
      >
        <div className="relative w-10 h-px bg-off/20 overflow-hidden">
          <span
            className="absolute top-0 bottom-0 w-full bg-lima"
            style={{ animation: "lineSlide 2s ease-in-out 4s infinite", left: "-100%" }}
          />
        </div>
        <span className="text-[0.65rem] tracking-[0.2em] uppercase text-off/20">Scroll</span>
      </div>
    </section>
  );
}
