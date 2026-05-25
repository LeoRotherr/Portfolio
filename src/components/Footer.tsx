export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 text-sm text-muted md:flex-row">
        <span className="font-serif text-base text-ink">
          Leonardo Rother<span className="text-accent">.</span>
        </span>
        <p>© {new Date().getFullYear()} — Feito com cuidado e café.</p>
        <a href="#top" className="link-underline">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  );
}
