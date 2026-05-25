import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  year: string;
  title: string;
  category: string;
  text: string;
  tags: string[];
  link?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    year: "2025",
    title: "Clinizen",
    category: "SaaS · Healthtech",
    text: "Plataforma de gestão para clínicas: agenda, prontuário e rotina do consultório em um só lugar. No ar e em produção.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    link: "https://clinizenapp.com.br",
    featured: true,
  },
  {
    year: "2025",
    title: "Arena Burger",
    category: "Web App · Food",
    text: "Aplicação para uma hamburgueria — cardápio digital e pedidos online com experiência rápida no celular. No ar.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://arenaburgerapp.com.br",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="border-t border-hairline py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">
                <span className="h-px w-8 bg-accent" /> Projetos
              </p>
              <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tightest md:text-5xl">
                Trabalho selecionado
              </h2>
            </div>
            <span className="hidden text-sm text-muted md:block">2025</span>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-hairline">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href={p.link ?? "#contato"}
                target={p.link ? "_blank" : undefined}
                rel={p.link ? "noreferrer" : undefined}
                className="group grid grid-cols-1 gap-6 border-b border-hairline py-10 transition-colors hover:bg-surface md:grid-cols-[auto_1fr_auto] md:items-start md:gap-12 md:px-4"
              >
                <span className="font-serif text-sm text-muted md:pt-2">{p.year}</span>

                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-3xl font-semibold tracking-tightest md:text-4xl">
                      {p.title}
                    </h3>
                    {p.featured && (
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
                        Em destaque
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm uppercase tracking-wide text-accent">
                    {p.category}
                  </p>
                  <p className="mt-4 max-w-xl leading-relaxed text-muted">{p.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-hairline px-3 py-1 text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-ink transition-all group-hover:bg-ink group-hover:text-ivory">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
