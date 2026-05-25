import { Reveal } from "./Reveal";

const groups = [
  {
    label: "Desenvolvimento",
    items: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "PostgreSQL", "Supabase", "Vite"],
  },
  {
    label: "Produto & Negócio",
    items: ["Discovery", "Roadmap", "Go-to-market", "Métricas", "User research", "MVP"],
  },
  {
    label: "Design & Criativo",
    items: ["UI/UX", "Design system", "Identidade visual", "Motion", "Prototipagem", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline bg-surface py-24 md:py-32">
      <div className="container-x grid gap-16 md:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Skills
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold tracking-tightest md:text-5xl">
            Ferramentas
            <br />
            do ofício
          </h2>
          <p className="mt-6 max-w-xs leading-relaxed text-muted">
            Um conjunto de habilidades que atravessa as três disciplinas — e me
            deixa autônomo do primeiro commit ao lançamento.
          </p>
        </Reveal>

        <div className="space-y-10">
          {groups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.1}>
              <div className="border-t border-hairline pt-6">
                <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-muted">
                  {g.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-hairline bg-ivory px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
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
