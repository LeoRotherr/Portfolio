import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44">
      <div className="container-x">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-8 bg-accent" /> Portfólio · 2026
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl font-serif text-5xl font-semibold leading-[1.02] tracking-tightest md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Do código ao
          <br />
          negócio, com
          <span className="italic text-accent"> intenção</span>.
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Sou <span className="text-ink">Leonardo Rother</span> — desenvolvedor,
          empreendedor e criativo. Construo produtos digitais que unem engenharia
          sólida, visão de negócio e cuidado com cada detalhe.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
          >
            Ver projetos
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </a>
          <a href="#contato" className="link-underline text-sm font-medium">
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          {[
            { k: "8+", v: "anos construindo" },
            { k: "20+", v: "produtos enviados" },
            { k: "3", v: "facetas, 1 visão" },
          ].map((s) => (
            <div key={s.v} className="bg-ivory px-5 py-6">
              <div className="font-serif text-3xl font-semibold md:text-4xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-accent-soft blur-3xl md:h-[32rem] md:w-[32rem]" />
    </section>
  );
}
