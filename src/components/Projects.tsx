import { useState } from "react";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Project = {
  slug: string;
  title: string;
  category: string;
  text: string;
  tags: string[];
  link?: string;
  status: "no-ar" | "em-desenvolvimento";
  featured?: boolean;
};

const projects: Project[] = [
  {
    slug: "clinizen",
    title: "Clinizen",
    category: "Sistema de gestão para clínicas",
    text: "Plataforma de gestão para clínicas médicas e odontológicas: agenda do dia, prontuário, confirmação de consulta por WhatsApp e financeiro no mesmo sistema. Suporta várias clínicas na mesma conta.",
    tags: ["React", "TypeScript", "Supabase"],
    link: "https://clinizenapp.com.br",
    status: "no-ar",
    featured: true,
  },
  {
    slug: "arena-burger",
    title: "Arena Burger",
    category: "Cardápio digital & pedidos online",
    text: "Cardápio digital para hamburgueria com busca por item, status de aberto/fechado em tempo real e checkout pensado primeiro para o celular — do carrinho ao pedido em poucos toques.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://arenaburgerapp.com.br",
    status: "no-ar",
  },
  {
    slug: "le-jardin",
    title: "Le Jardin",
    category: "Gestão para café & restaurante",
    text: "Sistema de salão e cozinha: painel com faturamento do dia, ticket médio e mesas ocupadas, além de cardápio, comandas via QR nas mesas, estoque, balcão e financeiro por turno.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    status: "em-desenvolvimento",
  },
  {
    slug: "hospital-contratos",
    title: "Administrativo Hospitalar",
    category: "Controle de contratos e empenhos",
    text: "Sistema interno para o administrativo de um hospital público: contratos ativos, solicitação e anulação de empenho, saldo, pagamentos mensais e análise financeira — com mural, chat e chamados da manutenção.",
    tags: ["React", "TypeScript", "Supabase", "Node.js"],
    status: "em-desenvolvimento",
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

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" delay={0.1}>
          {projects.map((p) => (
            <StaggerItem key={p.slug} className="h-full">
              <ProjectCard project={p} />
            </StaggerItem>
          ))}

          <StaggerItem className="h-full">
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
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}

function ProjectCard({ project: p }: { project: Project }) {
  const [hasShot, setHasShot] = useState(true);
  const [shotLoaded, setShotLoaded] = useState(false);
  const emDev = p.status === "em-desenvolvimento";
  const domain = p.link?.replace(/^https?:\/\//, "") ?? "em breve";

  const Wrapper = p.link ? "a" : "div";
  const wrapperProps = p.link
    ? { href: p.link, target: "_blank", rel: "noreferrer" as const }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`card group flex h-full flex-col overflow-hidden transition-all duration-300 ${
        p.link
          ? "hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow"
          : "hover:border-amber-300/30"
      }`}
    >
      <div className="relative aspect-[2/1] overflow-hidden border-b border-hairline bg-navy-950">
        {hasShot ? (
          <>
            {/* esqueleto enquanto a print não chega */}
            {!shotLoaded && (
              <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-navy-800 to-navy-950" />
            )}
            <img
              src={`/projetos/${p.slug}.webp`}
              alt={`Preview do projeto ${p.title}`}
              loading="lazy"
              decoding="async"
              onLoad={() => setShotLoaded(true)}
              onError={() => setHasShot(false)}
              className={`relative h-full w-full object-contain object-top transition-all duration-700 group-hover:scale-[1.04] ${
                shotLoaded ? "scale-100 opacity-100 blur-0" : "scale-[1.02] opacity-0 blur-sm"
              }`}
            />
          </>
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

        <div className="absolute right-3 top-3 flex flex-wrap items-center justify-end gap-2">
          {p.featured && (
            <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-navy-950">
              Em destaque
            </span>
          )}
          {emDev && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-navy-950/80 px-3 py-1 text-[11px] font-semibold text-amber-300 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              Em desenvolvimento
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          {p.link && (
            <ArrowUpRight className="h-5 w-5 flex-none text-muted transition-colors group-hover:text-accent" />
          )}
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
    </Wrapper>
  );
}
