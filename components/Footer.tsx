export default function Footer() {
  return (
    <footer className="bg-[#111] px-[5vw] py-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#222]">
      <span className="text-lg font-black text-blue">
        orygo<span className="text-coral">.</span>studio
      </span>
      <p className="text-sm text-[#555]">
        <a href="mailto:hola@orygo.studio" className="hover:text-blue transition-colors">hola@orygo.studio</a>
        {" · "}
        <a href="tel:659859313" className="hover:text-blue transition-colors">659 859 313</a>
        {" · "}
        © {new Date().getFullYear()} Orygo Studio
      </p>
    </footer>
  );
}
