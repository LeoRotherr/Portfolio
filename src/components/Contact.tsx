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
    <section id="contato" className="border-t border-hairline py-24 md:py-32">
      <div className="container-x grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8 bg-accent" /> Contato
          </p>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tightest md:text-6xl">
            Vamos construir
            <br />
            algo <span className="italic text-accent">juntos</span>.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-muted">
            Tem um projeto, uma ideia ou só quer trocar uma ideia? Me manda uma
            mensagem — costumo responder em até um dia útil.
          </p>

          <ul className="mt-10 space-y-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-3 text-muted transition-colors hover:text-ink"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline transition-colors group-hover:border-accent group-hover:text-accent">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="link-underline">{s.label}</span>
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
            className="rounded-2xl border border-hairline bg-surface p-6 md:p-8"
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
                  className="mt-2 w-full resize-none rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-medium text-ivory transition-transform hover:-translate-y-0.5"
              >
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
        className="mt-2 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted/70 focus:border-accent"
      />
    </div>
  );
}
