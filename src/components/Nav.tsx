import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#top", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const current = links
        .map((l) => document.querySelector(l.href === "#top" ? "#top" : l.href))
        .filter((el): el is Element => Boolean(el))
        .reduce<string>((acc, el) => {
          const top = el.getBoundingClientRect().top;
          return top <= 120 ? `#${el.id}` : acc;
        }, "#top");
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-navy-950/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/assets/logo-monograma.png"
            alt="Monograma Leonardo Rother"
            className="h-11 w-11 object-contain"
          />
          <span className="leading-tight">
            <span className="block text-base font-semibold">Leonardo Rother</span>
            <span className="block text-xs text-muted">Desenvolvedor Full Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`transition-colors ${
                  active === l.href
                    ? "border-b-2 border-accent pb-1 text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contato" className="hidden btn-primary !px-5 !py-2.5 sm:inline-flex">
            Vamos Conversar
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-hairline bg-navy-950/95 px-6 py-4 text-sm backdrop-blur-md lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-muted transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
