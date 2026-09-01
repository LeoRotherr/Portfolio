# Assets públicos

Arquivos servidos na raiz do site (`/assets/...`). As versões otimizadas aqui são
geradas a partir dos originais em `assets-originais/` pelo script
`scripts/otimizar-assets.py` — edite o original e rode o script de novo:

```bash
pip install pillow rembg onnxruntime
python3 scripts/otimizar-assets.py
```

`rembg` é o que recorta você do fundo da foto do hero. A segmentação roda
localmente (a foto não é enviada para lugar nenhum); só o modelo (~176 MB) é
baixado na primeira execução. Sem ele o script pula o recorte e gera o resto.

## O que tem aqui

- `assets/perfil-recorte.png` — você recortado do fundo, para o hero.
- `assets/hero-fundo.jpg` — o fundo da mesma foto (mar, céu e skyline)
  espelhado para cobrir a largura toda, sem repetir a pessoa do recorte.
- `assets/foto-header.jpg` — a foto inteira, usada como `og:image`.
- `assets/logo-monograma.png` — monograma dourado (nav + favicon).
- `assets/logo-lockup.png` — monograma + nome (rodapé).
- `assets/favicon.png` e `assets/apple-touch-icon.png`.
- `assets/tech/*` — logos das tecnologias, recoloridos para o fundo escuro.

## O que ainda falta

- `projetos/clinizen.png` e `projetos/arena-burger.png` — screenshots dos projetos
  (recomendado: 1600×1000px). Sem eles o card mostra um mock de navegador com o
  domínio.
