"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import OrygoLogo from "@/components/OrygoLogo";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como",      label: "Proceso" },
  { href: "#nosotros",  label: "Nosotros" },
];

const LIGHT_SECTIONS = new Set(["servicios", "nosotros", "contacto"]);
const ALL_SECTIONS   = ["hero", "servicios", "como", "nosotros", "contacto"];

export default function Nav() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    function update() {
      const navBottom = 70;
      for (const id of ALL_SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= navBottom && rect.bottom > navBottom) {
          setIsLight(LIGHT_SECTIONS.has(id));
          break;
        }
      }
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5vw] py-7">
      <Link href="#hero" className="flex items-center">
        <OrygoLogo
          width={100}
          className={isLight ? "text-black" : "text-off"}
          accent={isLight ? "#FF006E" : "#C0FF00"}
        />
      </Link>

      <ul className="hidden md:flex gap-10 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`text-[0.72rem] font-normal tracking-[0.12em] uppercase transition-colors duration-300 ${
                isLight
                  ? "text-black/40 hover:text-magenta"
                  : "text-off/40 hover:text-lima"
              }`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contacto"
        className={`text-[0.72rem] font-semibold tracking-[0.15em] uppercase px-5 py-2 transition-colors duration-300 ${
          isLight
            ? "bg-magenta text-white hover:bg-black"
            : "bg-lima text-black hover:bg-magenta hover:text-white"
        }`}
      >
        Hablamos
      </a>
    </nav>
  );
}
