import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE } from "./Reveal";

/**
 * Tela de carregamento: o monograma e uma barra que avança sozinha até 90% e só
 * completa quando a página termina de carregar (fontes, foto do hero, prints).
 * `onDone` dispara junto com a saída da cortina, para o hero já entrar por baixo.
 */
export function Loader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(8);

  useEffect(() => {
    const started = Date.now();
    let done = false;

    // avanço "otimista" enquanto os assets carregam
    const tick = window.setInterval(() => {
      setProgress((p) => (p >= 90 ? p : p + Math.max(1, (92 - p) * 0.12)));
    }, 90);

    const finish = () => {
      if (done) return;
      done = true;
      window.clearInterval(tick);
      setProgress(100);

      // segura o mínimo para a barra não piscar em conexões rápidas
      const espera = Math.max(0, (reduced ? 0 : 620) - (Date.now() - started));
      window.setTimeout(() => {
        setVisible(false);
        onDone();
      }, espera);
    };

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);

    // rede lenta ou asset que não responde: não deixa a cortina presa
    const teto = window.setTimeout(finish, 4000);

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(teto);
      window.removeEventListener("load", finish);
    };
  }, [onDone, reduced]);

  // trava a rolagem enquanto a cortina está na frente
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduced ? 0 : 0.6, ease: EASE } }}
        >
          <motion.img
            src="/assets/logo-monograma.png"
            alt=""
            aria-hidden="true"
            className="h-16 w-16 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduced ? 0 : 0.6, ease: EASE }}
          />

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">
            Leonardo Rother
          </p>

          <div
            className="mt-6 h-px w-40 overflow-hidden bg-hairline"
            role="progressbar"
            aria-label="Carregando o site"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "8%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
