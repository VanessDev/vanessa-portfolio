export default function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-semibold">Compétences</h2>

      <div className="grid md:grid-cols-2 gap-8 mt-6 text-sm text-ink/80">
        <div>
          <h3 className="font-semibold">Front-end</h3>
          <p className="mt-2">
            React • JavaScript (ES6+) • HTML5 • CSS3 • Tailwind
          </p>
          <p className="mt-1">
            Responsive design • Intégration UI • Appels API (fetch / axios)
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Back-end</h3>
          <p className="mt-2">
            Node.js • Express • PHP (POO) • Symfony (bases)
          </p>
          <p className="mt-1">API REST • Architecture MVC</p>
        </div>

        <div>
          <h3 className="font-semibold">Base de données</h3>
          <p className="mt-2">MySQL • SQL • Modélisation MCD / MLD</p>
        </div>

        <div>
          <h3 className="font-semibold">Outils</h3>
          <p className="mt-2">
            Git / GitHub • Postman • Docker • VS Code • Figma • Plesk • AWS S3
          </p>
        </div>
      </div>
    </section>
  );
}
