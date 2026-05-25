import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const projects = [
  {
    year: "2026",
    title: "MedSpace",
    category: "SaaS · Healthtech",
    text: "Plataforma completa de gestão para clínicas: agenda, prontuário eletrônico, financeiro e convênios. Multi-clínica, com controle de acesso e auditoria.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    featured: true,
  },
  {
    year: "2025",
    title: "Ledger Studio",
    category: "Produto · Fintech",
    text: "Painel financeiro para pequenos negócios com conciliação automática e relatórios visuais. Da pesquisa de usuário ao MVP em 10 semanas.",
    tags: ["Next.js", "Node", "PostgreSQL"],
  },
  {
    year: "2024",
    title: "Atelier",
    category: "Identidade · Web",
    text: "Site e identidade visual para um estúdio de design. Direção de arte, motion e desenvolvimento front-end de alta fidelidade.",
    tags: ["Design", "Framer Motion", "Branding"],
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
            <span className="hidden text-sm text-muted md:block">2024 — 2026</span>
          </div>
        </Reveal>

        <div className="mt-12 border-t border-hairline">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <a
                href="#contato"
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
