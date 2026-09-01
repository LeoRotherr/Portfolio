# Assets públicos

Arquivos servidos na raiz do site (`/assets/...`). As versões otimizadas aqui são
geradas a partir dos originais em `assets-originais/` pelo script
`scripts/otimizar-assets.py` — edite o original e rode o script de novo:

```bash
pip install pillow
python3 scripts/otimizar-assets.py
```

## O que tem aqui

- `assets/perfil.jpg` — foto do hero (recorte 4:5 da `foto-header.png`).
- `assets/foto-header.jpg` — versão larga, usada como `og:image`.
- `assets/logo-monograma.png` — monograma dourado (nav + favicon).
- `assets/logo-lockup.png` — monograma + nome (rodapé).
- `assets/favicon.png` e `assets/apple-touch-icon.png`.
- `assets/tech/*` — logos das tecnologias, recoloridos para o fundo escuro.

## O que ainda falta

- `projetos/clinizen.png` e `projetos/arena-burger.png` — screenshots dos projetos
  (recomendado: 1600×1000px). Sem eles o card mostra um mock de navegador com o
  domínio.
