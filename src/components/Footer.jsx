export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10">
      <div className="mx-auto max-w-5xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink/70">
        <p>© {new Date().getFullYear()} Vanessa Biamonti</p>

        <div className="flex gap-6">
          <a
            href="mailto:vanessa.biamonti@gmail.com"
            className="hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://github.com/VanessDev"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vanessa-biamonti-a10a6b364/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
