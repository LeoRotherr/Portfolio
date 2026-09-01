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
  return (
    <section id="top" className="relative overflow-hidden pt-20">
      {/* foto de fundo + escurecimento para o texto respirar */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-fundo.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* retrato recortado — sangra até a borda da tela e encosta na base da
          seção, atravessando as margens do conteúdo */}
      <motion.img
        src="/assets/perfil-recorte.png"
        alt="Leonardo Rother"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-0 right-0 z-10 w-[12rem] max-w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] sm:w-[20rem] lg:right-[6%] lg:w-[27rem] xl:w-[31rem]"
      />

      <div className="container-x relative grid items-center gap-8 pb-[17rem] pt-12 sm:pb-[22rem] md:pt-16 lg:min-h-[38rem] lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div className="relative z-10 max-w-xl">
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
            <a href="#contato" className="btn-ghost bg-navy-950/40 backdrop-blur-sm">
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
                  className="rounded-lg border border-white/10 bg-navy-950/70 px-3 py-1.5 text-xs font-medium text-ink/80 backdrop-blur-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
