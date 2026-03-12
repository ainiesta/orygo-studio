import OrygoLogo from "@/components/OrygoLogo";

export default function Footer() {
  return (
    <footer className="bg-black px-[5vw] py-8 flex flex-wrap items-center justify-between gap-4 border-t border-off/[0.05]">
      <OrygoLogo width={88} className="text-off/20" accent="#C0FF00" />
      <p className="text-[0.72rem] text-off/15">
        © {new Date().getFullYear()} Orygo Studio · Madrid
      </p>
    </footer>
  );
}
