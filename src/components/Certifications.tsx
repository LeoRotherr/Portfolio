import { BadgeCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Certification = {
  title: string;
  issuer: string;
  description: string;
  skills: string[];
  /** imagem do selo em public/ — sem ela o card usa o ícone de escudo */
  image?: string;
  /** link público de verificação da credencial */
  credentialUrl?: string;
};

const certifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    description:
      "Fundamentos de segurança da informação: como as ameaças agem, o impacto delas nos negócios e as práticas que protegem dados e usuários no dia a dia do desenvolvimento.",
    skills: [
      "Cyber Best Practices",
      "Cybersecurity",
      "Network Vulnerabilities",
      "Privacy & Data Confidentiality",
      "Threat Detection",
    ],
  },
];

export function Certifications() {
  return (
    <section id="certificacoes" className="border-t border-hairline py-24 md:py-28">
      <div className="container-x">
        <Reveal className="text-center">
          <p className="eyebrow">Certificações</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tightest md:text-5xl">
            Formação contínua
          </h2>
          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-accent" />
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted">
            Credenciais que sustentam a forma como eu construo: código que entrega
            valor sem abrir mão de segurança.
          </p>
        </Reveal>

        <Stagger className="mx-auto mt-14 grid max-w-3xl gap-6" delay={0.1}>
          {certifications.map((cert) => (
            <StaggerItem key={cert.title}>
              <article className="card group flex flex-col gap-6 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-glow sm:flex-row sm:items-start sm:p-8">
                <div className="shrink-0">
                  {cert.image ? (
                    <img
                      src={cert.image}
                      alt={`Selo ${cert.title}`}
                      loading="lazy"
                      className="h-28 w-28 rounded-2xl object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <span className="flex h-28 w-28 items-center justify-center rounded-2xl border border-hairline bg-accent-soft text-accent transition-all duration-300 group-hover:scale-105 group-hover:bg-accent group-hover:text-navy-950">
                      <ShieldCheck className="h-12 w-12" />
                    </span>
                  )}
                </div>

                <div className="min-w-0">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verificado
                  </span>

                  <h3 className="mt-4 text-xl font-semibold md:text-2xl">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>

                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {cert.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-hairline bg-navy-800/60 px-3 py-1.5 text-xs text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent link-underline"
                    >
                      Ver credencial
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
