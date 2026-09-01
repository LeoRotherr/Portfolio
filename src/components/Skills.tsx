import { Reveal } from "./Reveal";

const groups = [
  {
    label: "Front-end",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    label: "Back-end & Dados",
    items: ["Node.js", "PostgreSQL", "Supabase", "REST APIs", "Autenticação", "Prisma"],
  },
  {
    label: "Produto & Design",
    items: ["UI/UX", "Design system", "Figma", "Discovery", "MVP", "Métricas"],
  },
];

export function Skills() {
  return (
    <section id="stack" className="border-t border-hairline bg-navy-950/40 py-24 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">Stack</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tightest md:text-5xl">
            Ferramentas
            <br />
            do ofício
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            Um conjunto de tecnologias que me deixa autônomo do primeiro commit ao
            deploy — sem depender de terceiros para entregar.
          </p>
        </Reveal>

        <div className="space-y-8">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.08}>
              <div className="border-t border-hairline pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                  {g.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-hairline bg-navy-850 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
