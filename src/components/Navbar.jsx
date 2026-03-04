export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <div className="font-semibold tracking-[0.2em] text-sm">VB</div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#projects" className="hover:text-black transition">
            Projets
          </a>

          <a href="#skills" className="hover:text-black transition">
            Compétences
          </a>

          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
