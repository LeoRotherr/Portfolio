import { Code2, Lightbulb, Palette } from "lucide-react";
import { Reveal } from "./Reveal";

const facets = [
  {
    icon: Code2,
    title: "Desenvolvedor",
    text: "Arquiteto e escrevo software de ponta a ponta — frontend, backend e tudo que conecta os dois. Foco em código limpo, performático e que escala.",
  },
  {
    icon: Lightbulb,
    title: "Empreendedor",
    text: "Penso produto e negócio juntos. Da validação ao go-to-market, gosto de transformar ideias em algo que gera valor real para pessoas e empresas.",
  },
  {
    icon: Palette,
    title: "Criativo",
    text: "Acredito que estética é função. Cuido da experiência, da identidade visual e dos detalhes que fazem um produto parecer inevitável.",
  },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-hairline py-24 md:py-32">
      <div className="container-x grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Sobre
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tightest md:text-5xl">
            Três facetas,
            <br />
            uma só forma de
            <span className="italic text-accent"> trabalhar</span>.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Não me encaixo numa única caixa — e isso é proposital. A combinação de
            engenharia, negócio e design é o que me permite construir produtos
            completos, do conceito ao lançamento.
          </p>
        </Reveal>

        <div className="space-y-px">
          {facets.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div className="group flex gap-6 border-t border-hairline py-8 first:border-t-0 md:border-t md:first:border-t">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-accent group-hover:text-ivory">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold">{f.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
