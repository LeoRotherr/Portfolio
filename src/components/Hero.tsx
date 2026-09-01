import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Mail, Mouse } from "lucide-react";
import { EASE } from "./Reveal";

const stack = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind",
  "Supabase",
  "PostgreSQL",
];

export function Hero({ ready = true }: { ready?: boolean }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // parallax: fundo, retrato e texto andam em velocidades diferentes na rolagem
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const fundoY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const retratoY = useTransform(scrollYProgress, [0, 1], ["0%", "9%"]);
  const textoY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textoOpacidade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const parallax = reduced ? {} : { y: fundoY };
  const parallaxRetrato = reduced ? {} : { y: retratoY };
  const parallaxTexto = reduced ? {} : { y: textoY, opacity: textoOpacidade };

  // a entrada só roda depois que a cortina de carregamento sai
  const estado = ready ? "show" : "hidden";

  const bloco: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    show: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: reduced ? 0 : delay, ease: EASE },
    }),
  };

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-20">
      {/* foto de fundo + escurecimento para o texto respirar */}
      <motion.div className="absolute inset-0" style={parallax}>
        <img
          src="/assets/hero-fundo.jpg"
          alt=""
          aria-hidden="true"
          className="h-[115%] w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
        <motion.div
          className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl"
          animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* retrato recortado — sangra até a borda da tela e encosta na base da
          seção, atravessando as margens do conteúdo */}
      <motion.img
        src="/assets/perfil-recorte.png"
        alt="Leonardo Rother"
        variants={bloco}
        initial="hidden"
        animate={estado}
        custom={0.1}
        style={parallaxRetrato}
        className="pointer-events-none absolute bottom-0 right-0 z-10 w-[12rem] max-w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)] sm:w-[20rem] lg:right-[6%] lg:w-[27rem] xl:w-[31rem]"
      />

      <div className="container-x relative grid items-center gap-8 pb-[17rem] pt-12 sm:pb-[22rem] md:pt-16 lg:min-h-[38rem] lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <motion.div className="relative z-10 max-w-xl" style={parallaxTexto}>
          <motion.p
            className="text-sm font-medium text-accent"
            variants={bloco}
            initial="hidden"
            animate={estado}
          >
            Olá, eu sou
          </motion.p>

          <motion.h1
            className="mt-3 text-5xl font-bold leading-[1.05] tracking-tightest md:text-6xl lg:text-7xl"
            variants={bloco}
            initial="hidden"
            animate={estado}
            custom={0.08}
          >
            Leonardo Rother
            <span className="mt-2 block text-3xl font-semibold text-muted md:text-4xl lg:text-5xl">
              Desenvolvedor <span className="text-accent">Full Stack</span>
            </span>
          </motion.h1>

          <motion.p
            className="mt-7 max-w-lg text-lg leading-relaxed text-muted"
            variants={bloco}
            initial="hidden"
            animate={estado}
            custom={0.2}
          >
            Transformo ideias em produtos digitais completos — do primeiro commit
            ao lançamento, com foco em performance e experiência.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            variants={bloco}
            initial="hidden"
            animate={estado}
            custom={0.32}
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
            variants={bloco}
            initial="hidden"
            animate={estado}
            custom={0.44}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              Tecnologias que uso
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {stack.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                  animate={ready ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: reduced ? 0 : 0.5 + i * 0.06,
                    ease: EASE,
                  }}
                  className="rounded-lg border border-white/10 bg-navy-950/70 px-3 py-1.5 text-xs font-medium text-ink/80 backdrop-blur-sm"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* convite discreto para rolar */}
      <motion.a
        href="#sobre"
        aria-label="Ir para a próxima seção"
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent lg:block"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: reduced ? 0 : 0.9 }}
      >
        <motion.span
          className="block"
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mouse className="h-6 w-6" />
        </motion.span>
      </motion.a>
    </section>
  );
}
