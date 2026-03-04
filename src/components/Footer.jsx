export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-8">
      <div className="mx-auto max-w-5xl px-4 text-sm text-ink/60">
        © {new Date().getFullYear()} Vanessa Biamonti — Portfolio
      </div>
    </footer>
  );
}