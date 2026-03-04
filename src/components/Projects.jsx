import marsai from "../assets/marsai.png";

const projects = [
  {
    title: "Festival de courts-métrages MarsAI",
    year: "2026",
    image: marsai,
    subtitle:
      "Développement Full Stack (React / Node.js) — Projet inter-campus (équipe de 5)",
    bullets: [
      "Conception UX/UI (Figma) + modélisation MCD/MLD + architecture MVC",
      "Développement de pages React + intégration UI",
      "Back Node.js : controllers, routes, services",
      "Newsletter (CKEditor)",
      "Upload vidéos via AWS S3 + intégration API YouTube",
      "Projet fonctionnel en local (démo vidéo disponible)",
    ],
    links: [
      {
        label: "Repo",
        href: "https://github.com/LorianaD/project_marsai-bordeaux-groupe_LVETM",
      },
    ],
    tag: "Client réel / école",
  },
  {
    title: "YogiShift (en cours)",
    year: "2026",
    subtitle:
      "Projet personnel — Plateforme de mise en relation professeurs & studios de yoga",
    bullets: [
      "Conception produit complète (UX, architecture, base de données)",
      "Développement full stack (React / Node.js)",
      "Gestion des rôles, candidatures, disponibilités et messagerie (MVP)",
      "Objectif : projet démontrable pour l’examen",
    ],
    links: [],
    tag: "Projet perso",
  },
  {
    title: "Projet Médiathèque",
    year: "2025",
    subtitle: "PHP / MySQL — Architecture MVC (équipe de 3)",
    bullets: [
      "CRUD complet (livres, utilisateurs, emprunts)",
      "Gestion utilisateurs & emprunts",
      "Structure MVC + base de données relationnelle",
      "Projet évalué 19/20 — Meilleure note de la promotion",
    ],
    links: [],
    tag: "Projet école",
  },
];

function ProjectCard({ p }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white overflow-hidden hover:border-black/20 transition">
      {p.image && (
        <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
      )}

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-ink/70">{p.subtitle}</p>
          </div>

          <div className="text-right">
            <div className="text-sm font-medium text-ink/70">{p.year}</div>

            <div className="mt-2 inline-flex rounded-md bg-sand px-3 py-1 text-xs text-ink/70 border border-black/10">
              {p.tag}
            </div>
          </div>
        </div>

        <ul className="mt-4 space-y-2 text-sm text-ink/80 list-disc pl-5">
          {p.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {p.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-cocoa hover:underline"
              >
                {l.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold">Projets</h2>
        <p className="text-sm text-ink/70">Sélection — focus full stack</p>
      </div>

      <div className="mt-6 grid gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}
