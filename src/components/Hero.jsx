import hero from "../assets/hero-dev.png";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* TEXTE */}
        <div>
          <p className="text-xs tracking-widest text-ink/60 uppercase">
            Développeuse Full Stack — React / Node.js
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Vanessa <span className="text-cocoa">Biamonti</span>
          </h1>

          <p className="mt-6 max-w-xl text-ink/80 leading-relaxed">
            Développeuse full stack en formation RNCP niveau 5, spécialisée
            React / Node.js. Je conçois et implémente des applications web
            complètes (front & back), avec une attention particulière à
            l’architecture, la base de données et l’UX.
          </p>

          {/* boutons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:scale-105 transition"
            >
              Voir mes projets
            </a>

            <a
              href="https://github.com/VanessDev"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium hover:border-black/30 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/vanessa-biamonti-a10a6b364/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium hover:border-black/30 transition"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
              className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium hover:border-black/30 transition"
            >
              Me contacter
            </a>
          </div>

          {/* chips */}
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="bg-white border border-black/10 px-3 py-1 rounded-full">
              Bordeaux
            </span>

            <span className="bg-white border border-black/10 px-3 py-1 rounded-full">
              Mobilité : France entière
            </span>

            <span className="bg-white border border-black/10 px-3 py-1 rounded-full">
              Anglais courant
            </span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            src={hero}
            alt="Developer workspace illustration"
            className="max-w-md w-full animate-float"
          />
        </div>
      </div>
    </section>
  );
}
