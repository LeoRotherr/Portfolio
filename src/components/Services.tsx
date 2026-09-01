import { Code2, Rocket, Server, Smartphone } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    icon: Code2,
    title: "Desenvolvimento Web",
    text: "Sites e aplicações web modernas, construídos com as tecnologias mais atuais do mercado.",
  },
  {
    icon: Smartphone,
    title: "Aplicações Responsivas",
    text: "Interfaces que funcionam perfeitamente em qualquer tela, do celular ao desktop.",
  },
  {
    icon: Server,
    title: "APIs & Back-end",
    text: "APIs robustas e escaláveis, com autenticação, banco de dados e boas práticas de arquitetura.",
  },
  {
    icon: Rocket,
    title: "Otimização & Performance",
    text: "Melhorias de velocidade, SEO e experiência para o seu produto render mais.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="border-t border-hairline bg-navy-950/40 py-24 md:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Meus serviços</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tightest md:text-5xl">
            Como posso te ajudar
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-accent" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card group h-full p-6 transition-all hover:-translate-y-1 hover:border-accent/50">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-navy-950">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
