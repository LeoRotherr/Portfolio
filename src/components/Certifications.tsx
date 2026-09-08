import { BadgeCheck, Brain, ExternalLink, Layers, Rocket, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Credential = {
  title: string;
  /** instituição que emitiu — some do card quando não informada */
  issuer?: string;
  /** período ou ano de conclusão, ex.: "2025" ou "2025 — 2026" */
  period?: string;
  /** etiqueta do card: "Verificado", "Concluída", "Em andamento"… */
  badge?: string;
  description: string;
  skills?: string[];
  icon: LucideIcon;
  /** imagem do selo em public/ — sem ela o card usa o ícone */
  image?: string;
  /** link público de verificação da credencial */
  credentialUrl?: string;
};

const posGraduacao: Credential[] = [
  {
    title: "Arquitetura de Software",
    badge: "Pós-graduação",
    icon: Layers,
    description:
      "Padrões de arquitetura, sistemas distribuídos e as decisões técnicas que sustentam software em escala — do desenho da solução ao trade-off de cada escolha.",
  },
  {
    title: "Inteligência Artificial",
    badge: "Pós-graduação",
    icon: Brain,
    description:
      "Machine learning, modelos de linguagem e aplicação prática de IA em produto: como transformar dados e modelos em funcionalidades que resolvem problema real.",
  },
];

const certificacoes: Credential[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    badge: "Verificado",
    icon: ShieldCheck,
    description:
      "Fundamentos de segurança da informação: como as ameaças agem, o impacto delas nos negócios e as práticas que protegem dados e usuários no dia a dia do desenvolvimento.",
    skills: [
      "Cyber Best Practices",
      "Cybersecurity",
      "Network Vulnerabilities",
      "Privacy & Data Confidentiality",
      "Threat Detection",
    ],
  },
  {
    title: "Rocketseat ONE",
    issuer: "Rocketseat",
    badge: "Concluído",
    icon: Rocket,
    description:
      "Formação em desenvolvimento full-stack com foco em prática: projetos reais do front-end ao back-end, seguindo o que o mercado usa no dia a dia.",
    skills: ["React", "Node.js", "TypeScript", "APIs REST"],
  },
];

const grupos = [
  { label: "Pós-graduação", items: posGraduacao },
  { label: "Certificações", items: certificacoes },
];

function CredentialCard({ item }: { item: Credential }) {
  return (
    <article className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow">
      <div className="flex items-start gap-4">
        {item.image ? (
          <img
            src={item.image}
            alt={`Selo ${item.title}`}
            loading="lazy"
            className="h-14 w-14 shrink-0 rounded-xl object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-navy-950">
            <item.icon className="h-6 w-6" />
          </span>
        )}

        <div className="min-w-0">
          {item.badge && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-accent">
              <BadgeCheck className="h-3 w-3" />
              {item.badge}
            </span>
          )}
          <h4 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h4>
          {(item.issuer || item.period) && (
            <p className="mt-1 text-sm text-muted">
              {[item.issuer, item.period].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{item.description}</p>

      {item.skills && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-hairline bg-navy-800/60 px-3 py-1.5 text-xs text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              {skill}
            </li>
          ))}
        </ul>
      )}

      {item.credentialUrl && (
        <a
          href={item.credentialUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent"
        >
          Ver credencial
          <ExternalLink className="h-4 w-4" />
        </a>
      )}
    </article>
  );
}

export function Certifications() {
  return (
    <section id="formacao" className="border-t border-hairline py-24 md:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Formação</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tightest md:text-5xl">
            Estudo que vira entrega
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            Pós-graduações e certificações que sustentam a forma como eu construo:
            arquitetura sólida, IA aplicada e segurança desde o primeiro commit.
          </p>
        </Reveal>

        <div className="mt-14 space-y-12">
          {grupos.map((grupo, i) => (
            <div key={grupo.label}>
              <Reveal delay={i * 0.06}>
                <h3 className="border-t border-hairline pt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {grupo.label}
                </h3>
              </Reveal>

              <Stagger className="mt-6 grid gap-6 md:grid-cols-2" delay={0.08}>
                {grupo.items.map((item) => (
                  <StaggerItem key={item.title} className="h-full">
                    <CredentialCard item={item} />
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
