# Portfólio — Leonardo Rother

Site de portfólio pessoal (dev · empreendedor · criativo). Single-page com seções
Sobre, Projetos, Skills e Contato. Visual editorial elegante.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- framer-motion (animações de scroll)
- lucide-react (ícones)
- Fontes self-hosted via `@fontsource` (Fraunces + Inter)

## Rodar localmente

```bash
bun install   # ou: npm install
bun run dev   # ou: npm run dev
```

Abre em `http://localhost:5174`.

## Build de produção

```bash
bun run build      # gera /dist
bun run preview    # serve o build localmente
```

## Onde editar o conteúdo

Tudo fica em `src/components/`:

- `Hero.tsx` — nome, headline, bio e stats
- `About.tsx` — as três facetas
- `Projects.tsx` — array `projects`
- `Skills.tsx` — array `groups`
- `Contact.tsx` — links sociais (email, GitHub, LinkedIn)

Cores e fontes ficam em `tailwind.config.js`.

## Imagens & assets

- `assets-originais/` — os arquivos originais, do jeito que vieram (fora do
  `public/`, então não vão para o build).
- `public/assets/` — as versões otimizadas que o site consome
  (`/assets/perfil.jpg`, `/assets/logo-monograma.png`, `/assets/tech/*`…).

Para regerar as versões otimizadas depois de trocar um original:

```bash
pip install pillow
python3 scripts/otimizar-assets.py
```

Detalhes de cada arquivo em `public/README.md`.

> Conteúdo atual é placeholder — troque nome, bio, projetos e links pelos seus dados reais.
