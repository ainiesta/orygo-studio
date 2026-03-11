"use client";
import Link from "next/link";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como", label: "Cómo trabajamos" },
  { href: "#casos", label: "Casos" },
  { href: "#nosotros", label: "Nosotros" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-5 bg-[#EAEAEA]/90 backdrop-blur-md border-b border-blue/10">
      <Link href="#hero" className="text-xl font-black text-blue tracking-tight">
        orygo<span className="text-coral">.</span>studio
      </Link>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm font-semibold text-black hover:text-blue transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className="bg-blue text-white text-sm font-bold px-4 py-2 rounded hover:bg-coral transition-colors"
      >
        Hablamos
      </a>
    </nav>
  );
}
