export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Me contacter</h2>

      <p className="mt-4 text-ink/80 max-w-xl">
        Disponible pour une alternance (3e année Bachelor IT). Mobilité : France
        entière (priorité Marseille, Lille, Bordeaux).
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="mailto:vanessa.biamonti@gmail.com"
          className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:scale-105 transition"
        >
          Envoyer un email
        </a>

        <a
          href="https://github.com/VanessDev"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-black/15 px-6 py-3 text-sm font-medium hover:border-black/30 transition"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
