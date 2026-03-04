const githubUrl = "https://github.com/VanessDev";
// LinkedIn: on mettra le lien quand il sera prêt
const email = "vanessa.biamonti@gmail.com";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 pt-24 pb-10">
      <div className="rounded-3xl bg-sand border border-black/5 p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.28em] text-ink/60">
          Développeuse Full Stack — React / Node.js
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
          Vanessa <span className="text-cocoa">Biamonti</span>
        </h1>

        <p className="mt-4 max-w-2xl text-ink/80 leading-relaxed">
          Développeuse full stack en formation RNCP niveau 5, spécialisée React
          / Node.js. Je conçois et implémente des applications web complètes
          (front & back), avec une attention particulière à l’architecture, la
          base de données et l’UX.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-ink text-white px-6 py-3 text-sm font-medium hover:scale-105 transition"
          >
            Voir mes projets
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium hover:border-black/30 transition"
          >
            GitHub
          </a>

          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium hover:border-black/30 transition"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-ink/70">
          <span className="rounded-full bg-white px-3 py-1 border border-black/5">
            Bordeaux
          </span>
          <span className="rounded-full bg-white px-3 py-1 border border-black/5">
            Mobilité : France entière (priorité Marseille, Lille, Bordeaux)
          </span>
          <span className="rounded-full bg-white px-3 py-1 border border-black/5">
            Anglais courant
          </span>
        </div>
      </div>
    </section>
  );
}
