"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot  = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const animate = () => {
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      raf = requestAnimationFrame(animate);
    };

    const addHover = () => ring.classList.add("cursor-ring-hovered");
    const rmHover  = () => ring.classList.remove("cursor-ring-hovered");

    const attachHover = () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", rmHover);
      });
    };

    document.addEventListener("mousemove", onMove);
    animate();
    attachHover();

    // re-attach after React re-renders
    const mo = new MutationObserver(attachHover);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed z-[9999] w-1.5 h-1.5 bg-lima rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={ringRef}
        className="fixed z-[9998] w-9 h-9 border border-lima/40 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ transition: "width 0.4s cubic-bezier(0.16,1,0.3,1), height 0.4s cubic-bezier(0.16,1,0.3,1), border-color 0.4s" }}
      />
    </>
  );
}
