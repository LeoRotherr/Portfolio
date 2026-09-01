import { Reveal, Stagger, StaggerItem } from "./Reveal";

const logos = [
  { name: "React", src: "/assets/tech/react.png", className: "h-9" },
  { name: "Node.js", src: "/assets/tech/node.svg", className: "h-10" },
  { name: "Supabase", src: "/assets/tech/supabase.png", className: "h-7" },
  { name: "Vercel", src: "/assets/tech/vercel.png", className: "h-6" },
  { name: "Mercado Pago", src: "/assets/tech/mercado-pago.png", className: "h-8" },
];

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
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
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
                <Stagger className="mt-4 flex flex-wrap gap-3" step={0.045}>
                  {g.items.map((item) => (
                    <StaggerItem key={item}>
                      <span className="block rounded-lg border border-hairline bg-navy-850 px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent">
                        {item}
                      </span>
                    </StaggerItem>
                  ))}
                </Stagger>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="container-x mt-16">
          <p className="text-center text-xs uppercase tracking-[0.18em] text-muted">
            Tecnologias e serviços que uso no dia a dia
          </p>
          <Stagger
            className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:gap-x-16"
            step={0.08}
          >
            {logos.map((logo) => (
              <StaggerItem key={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  title={logo.name}
                  loading="lazy"
                  className={`${logo.className} w-auto opacity-75 transition duration-300 hover:scale-110 hover:opacity-100`}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Reveal>
    </section>
  );
}
