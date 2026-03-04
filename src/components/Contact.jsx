const email = "vanessa.biamonti@gmail.com";
const githubUrl = "https://github.com/VanessDev";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-10">
      <div className="rounded-3xl bg-white border border-black/10 p-8 md:p-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-ink/80">
          Pour une alternance (priorité Marseille, Lille, Bordeaux) — je réponds
          rapidement.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-full bg-ink text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
          >
            {email}
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium hover:border-black/30 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
