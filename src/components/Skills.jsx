const blocks = [
  {
    title: "Front-end",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Responsive",
      "API (fetch/axios)",
      "CKEditor",
    ],
  },
  {
    title: "Back-end",
    items: [
      "Node.js",
      "Express.js",
      "PHP (POO)",
      "Symfony",
      "API REST",
      "Architecture MVC",
    ],
  },
  {
    title: "Base de données",
    items: [
      "MySQL",
      "SQL",
      "Modélisation MCD / MLD",
      "Conception relationnelle",
    ],
  },
  {
    title: "Outils",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Docker",
      "VS Code",
      "Plesk",
      "AWS S3",
      "UX/UI (Figma)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-10">
      <h2 className="text-2xl font-semibold">Compétences</h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl bg-sand border border-black/5 p-6"
          >
            <h3 className="font-semibold">{b.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {b.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full bg-white border border-black/5 px-3 py-1 text-xs text-ink/75"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
