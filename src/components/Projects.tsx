import { useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

type Project = {
  slug: string;
  title: string;
  category: string;
  text: string;
  tags: string[];
  link: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "clinizen",
    title: "Clinizen",
    category: "Sistema de gestão para clínicas",
    text: "Agenda, prontuário e rotina do consultório em um só lugar. No ar e em produção.",
    tags: ["React", "TypeScript", "Supabase"],
    link: "https://clinizenapp.com.br",
    featured: true,
  },
  {
    slug: "arena-burger",
    title: "Arena Burger",
    category: "Cardápio digital & pedidos online",
    text: "Aplicação para uma hamburgueria, com experiência rápida e pensada para o celular. No ar.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://arenaburgerapp.com.br",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="border-t border-hairline py-24 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Projetos em destaque</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tightest md:text-5xl">
                Trabalho selecionado
              </h2>
            </div>
            <a
              href="https://github.com/leorotherr"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent"
            >
              Ver todos no GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <ProjectCard project={p} />
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <a
              href="#contato"
              className="card group flex h-full flex-col items-center justify-center gap-3 border-dashed p-8 text-center transition-colors hover:border-accent/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Sparkles className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold">O próximo pode ser o seu</h3>
              <p className="text-sm leading-relaxed text-muted">
                Tem uma ideia em mente? Vamos tirar do papel juntos.
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Falar comigo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const [hasShot, setHasShot] = useState(true);
  const domain = p.link.replace(/^https?:\/\//, "");

  return (
    <a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      className="card group flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:border-accent/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-hairline bg-navy-800">
        {hasShot ? (
          <img
            src={`/projetos/${p.slug}.png`}
            alt={`Preview do projeto ${p.title}`}
            loading="lazy"
            onError={() => setHasShot(false)}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col bg-gradient-to-br from-navy-700 to-navy-950">
            <div className="flex items-center gap-1.5 border-b border-hairline/60 px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-muted/40" />
              <span className="h-2 w-2 rounded-full bg-muted/40" />
              <span className="h-2 w-2 rounded-full bg-muted/40" />
              <span className="ml-2 truncate rounded bg-navy-950/60 px-2 py-0.5 text-[10px] text-muted">
                {domain}
              </span>
            </div>
            <div className="flex flex-1 items-center justify-center text-2xl font-bold tracking-tightest text-accent/50">
              {p.title}
            </div>
          </div>
        )}

        {p.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-navy-950">
            Em destaque
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <ArrowUpRight className="h-5 w-5 flex-none text-muted transition-colors group-hover:text-accent" />
        </div>
        <p className="mt-1 text-sm text-accent">{p.category}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.text}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-hairline bg-navy-800/60 px-2.5 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
