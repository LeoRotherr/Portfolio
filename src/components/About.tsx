import { Award, CheckCircle2, Clock, Github, Linkedin, Mail, MapPin, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Clock, label: "+2 anos de experiência" },
  { icon: CheckCircle2, label: "Projetos em produção" },
  { icon: Award, label: "Disponível para freelance" },
  { icon: Target, label: "Focado em resultados" },
];

const info = [
  { icon: MapPin, label: "Localização", value: "Brasil · Trabalho remoto" },
  { icon: Mail, label: "Email", value: "leorotherr@gmail.com", href: "mailto:leorotherr@gmail.com" },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/leorotherr",
    href: "https://github.com/leorotherr",
  },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/leorother", href: "#" },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-hairline py-24 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="eyebrow">Sobre mim</p>
          <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tightest md:text-5xl">
            Construindo soluções
            <br />
            que fazem a <span className="text-accent">diferença</span>
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Sou desenvolvedor Full Stack apaixonado por tecnologia e por criar
            experiências digitais que resolvem problemas reais. Trabalho de ponta a
            ponta — interface, API e infraestrutura — com foco em performance,
            escalabilidade e boas práticas de código.
          </p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h.label} className="flex items-center gap-3 text-sm">
                <h.icon className="h-5 w-5 flex-none text-accent" />
                <span>{h.label}</span>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn-primary mt-10">
            Vamos trabalhar juntos
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card p-6 md:p-8">
            <ul className="divide-y divide-hairline">
              {info.map((item) => (
                <li key={item.label} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.12em] text-muted">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="link-underline mt-1 block break-words text-sm font-medium transition-colors hover:text-accent"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 break-words text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
