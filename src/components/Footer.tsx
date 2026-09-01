import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/leorotherr" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:leorotherr@gmail.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy-950 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <img
            src="/assets/logo-lockup.png"
            alt="Leonardo Rother"
            className="h-14 w-auto"
            loading="lazy"
          />
          <span className="text-sm text-muted">Desenvolvedor Full Stack</span>
        </div>

        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Leonardo Rother. Todos os direitos reservados.
        </p>

        <ul className="flex items-center gap-3">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-hairline text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <s.icon className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
