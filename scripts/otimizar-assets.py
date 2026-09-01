from PIL import Image
import os, re

SRC = "assets-originais"
OUT = "public/assets"
os.makedirs(OUT + "/tech", exist_ok=True)

INK = (232, 241, 248)


def trim(im, pad_ratio=0.0):
    bbox = im.getbbox()
    im = im.crop(bbox)
    if pad_ratio:
        w, h = im.size
        p = int(max(w, h) * pad_ratio)
        canvas = Image.new("RGBA", (w + 2 * p, h + 2 * p), (0, 0, 0, 0))
        canvas.paste(im, (p, p))
        im = canvas
    return im


def lighten_dark(im, threshold=110, max_sat=60, color=INK):
    """Repinta os pixels escuros (wordmarks) para eles aparecerem no fundo escuro.

    `max_sat` preserva as partes coloridas da marca (o raio do Supabase, por
    exemplo); passe um valor alto para repintar também texto escuro colorido.
    """
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            lum = 0.299 * r + 0.587 * g + 0.114 * b
            sat = max(r, g, b) - min(r, g, b)
            if lum < threshold and sat < max_sat:
                px[x, y] = (*color, a)
    return im


def fit(im, max_w, max_h):
    im.thumbnail((max_w, max_h), Image.LANCZOS)
    return im


# ---------------------------------------------------------------- hero photo
foto = Image.open(f"{SRC}/foto-header.png").convert("RGB")
w, h = foto.size
# o rosto fica à direita do centro — recorte 4:5 ancorado nele
cx = int(w * 0.605)
cw = int(h * 0.8)
left = max(0, min(w - cw, cx - cw // 2))
perfil = foto.crop((left, 0, left + cw, h)).resize((900, 1125), Image.LANCZOS)
perfil.save(f"{OUT}/perfil.jpg", quality=86, optimize=True, progressive=True)

# versão larga (fallback / og:image)
wide = foto.copy()
wide.thumbnail((1600, 1600), Image.LANCZOS)
wide.save(f"{OUT}/foto-header.jpg", quality=84, optimize=True, progressive=True)

# ---------------------------------------------------------------- logo
logo = Image.open(f"{SRC}/logo-leonardo-rother.jpeg").convert("RGB")
alpha = logo.convert("L").point(lambda v: min(255, int(v * 1.35)))
logo = logo.convert("RGBA")
logo.putalpha(alpha)

lockup = trim(logo.crop((0, 495, 1024, 880)), pad_ratio=0.02)
lockup = fit(lockup, 900, 900)
lockup.save(f"{OUT}/logo-lockup.png", optimize=True)

mono = trim(logo.crop((0, 495, 1024, 772)))
mw, mh = mono.size
side = int(max(mw, mh) * 1.14)
square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
square.paste(mono, ((side - mw) // 2, (side - mh) // 2))
square.resize((512, 512), Image.LANCZOS).save(f"{OUT}/logo-monograma.png", optimize=True)

# favicons — monograma sobre o navy do site
for size, name in [(64, "favicon.png"), (180, "apple-touch-icon.png")]:
    bg = Image.new("RGBA", (side, side), (10, 22, 34, 255))
    bg.alpha_composite(square)
    bg.convert("RGB").resize((size, size), Image.LANCZOS).save(f"{OUT}/{name}", optimize=True)

# ---------------------------------------------------------------- tech logos
react = trim(Image.open(f"{SRC}/react.webp").convert("RGBA"))
fit(react, 220, 220).save(f"{OUT}/tech/react.png", optimize=True)

for src, max_sat in [
    ("vercel.png", 60),
    ("supabase.png", 60),
    # o wordmark do Mercado Pago é azul-escuro, não cinza
    ("mercado-pago.png", 255),
]:
    im = lighten_dark(trim(Image.open(f"{SRC}/{src}").convert("RGBA")), 125, max_sat)
    fit(im, 480, 220).save(f"{OUT}/tech/{src}", optimize=True)

# Node.js: o wordmark é #333, invisível no fundo escuro
svg = open(f"{SRC}/node.svg", encoding="utf-8").read()
svg = re.sub(r'fill="#333"', 'fill="#E8F1F8"', svg)
open(f"{OUT}/tech/node.svg", "w", encoding="utf-8").write(svg)

for root, _, files in os.walk(OUT):
    for f in sorted(files):
        p = os.path.join(root, f)
        print(f"{p:44} {os.path.getsize(p)/1024:8.1f} KB")
