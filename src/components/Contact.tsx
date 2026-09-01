import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";

const socials = [
  { icon: Mail, label: "leorotherr@gmail.com", href: "mailto:leorotherr@gmail.com" },
  { icon: Github, label: "github.com/leorotherr", href: "https://github.com/leorotherr" },
  { icon: Linkedin, label: "linkedin.com/in/leorother", href: "#" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative overflow-hidden border-t border-hairline py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-navy-900 via-navy-850 to-navy-900" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Contato</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tightest md:text-5xl">
            Vamos criar algo
            <br />
            <span className="text-accent">incrível juntos?</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            Tem um projeto, uma ideia ou só quer trocar uma ideia? Me manda uma
            mensagem — costumo responder em até um dia útil.
          </p>

          <ul className="mt-10 space-y-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-ink"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-hairline transition-colors group-hover:border-accent group-hover:text-accent">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="link-underline text-sm">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="card p-6 md:p-8"
          >
            <div className="space-y-5">
              <Field label="Nome" id="name" placeholder="Seu nome" />
              <Field label="Email" id="email" type="email" placeholder="voce@email.com" />
              <div>
                <label htmlFor="msg" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  required
                  placeholder="Conta um pouco sobre o que você tem em mente…"
                  className="mt-2 w-full resize-none rounded-lg border border-hairline bg-navy-900 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {sent ? "Mensagem enviada — obrigado!" : "Enviar mensagem"}
                {!sent && <Send className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-hairline bg-navy-900 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
      />
    </div>
  );
}
