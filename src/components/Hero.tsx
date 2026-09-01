import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind",
  "Supabase",
  "PostgreSQL",
];

export function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <section id="top" className="relative overflow-hidden pt-20">
      {/* fundo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-900" />
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-[26rem] w-[26rem] rounded-full bg-sky-500/10 blur-3xl" />

      <div className="container-x grid items-center gap-12 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <motion.p
            className="text-sm font-medium text-accent"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Leonardo Rother
            <span className="mt-2 block text-3xl font-semibold text-muted md:text-4xl lg:text-5xl">
              Desenvolvedor <span className="text-accent">Full Stack</span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            Transformo ideias em produtos digitais completos — do primeiro commit
            ao lançamento, com foco em performance e experiência.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href="#projetos" className="group btn-primary">
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contato" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Entrar em Contato
            </a>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Tecnologias que uso
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-hairline bg-navy-850/70 px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-x-6 bottom-6 top-6 -z-10 rounded-[2rem] bg-accent/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-navy-850">
            {hasPhoto ? (
              <img
                src="/assets/perfil.jpg"
                alt="Leonardo Rother"
                onError={() => setHasPhoto(false)}
                className="aspect-[4/5] w-full object-cover object-center"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950 text-6xl font-bold tracking-tightest text-accent/40">
                LR
              </div>
            )}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
          </div>

          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-hairline bg-navy-850 px-4 py-2 text-xs font-medium shadow-card">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Disponível para novos projetos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
