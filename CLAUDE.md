# Sanyser — contexto de trabajo

Cliente de Posicionarte. **SANYSER — Sanitarios y Servicios**, Banfield / Lomas de
Zamora. Vende materiales sanitarios a obras, constructoras e instaladores (B2B).
Web: sanyser.com.ar · IG: @sanyser.sanitarios

Este repo cubre dos frentes: **el sitio** y **las piezas de redes**. Los dos usan
la misma marca, y esa es la razón de que vivan juntos.

## Idioma

Español rioplatense, voseo, en todo: respuestas, copies, commits y comentarios de
código. Sin tildes de más ni jerga de marketing. El cliente y su público son
gente de obra: hablales como tales.

## Mapa

```
sanyser-landing/
  src/            Landing en React + Vite + Tailwind (+ GSAP)
  dist/           Build de producción — SE VERSIONA a propósito (deploy)
  marketing/      Generador de placas de Instagram
  video/          Escenas en Remotion
docs/             Despliegue y brochure institucional
```

## Marca (no se negocia)

| | |
|---|---|
| Titulares y números | **Bebas Neue** (solo mayúsculas, la fuente no tiene minúsculas) |
| Todo el resto | **Inter** |
| Naranja | `#FF5500` — acento, dato destacado, CTA |
| Navy | `#0F1E37` — fondos oscuros |
| Gris claro | `#F5F5F5` — fondo por defecto |
| Gris texto | `#333333` — cuerpo sobre fondo claro |

Nunca una tercera tipografía ni un quinto color. Fuente de verdad:
`sanyser-landing/tailwind.config.js`, replicado en `marketing/brand.css`.
Si aparece otro color en una pieza, casi siempre viene de un elemento de stock
que hay que reemplazar.

## Sitio

```bash
npm install --prefix sanyser-landing
npm run dev --prefix sanyser-landing      # desarrollo
npm run build --prefix sanyser-landing    # build + prerender con react-snap
npm run lint --prefix sanyser-landing
```

Deploy a Hostinger por subtree, **solo cuando el usuario lo pide**:

```bash
git push origin main
npm run build --prefix sanyser-landing
git subtree push --prefix sanyser-landing/dist origin deploy
```

Ojo: `docs/despliegue-hostinger.md` dice que `dist/` está en el `.gitignore`.
Está desactualizado — `dist/` se trackea a propósito (ver `.gitignore`).

El sitio está optimizado para SEO/AEO y tiene GTM instalado. Antes de tocar
`<head>`, structured data o rutas, mirá `src/components/seo/`.

## Piezas de Instagram

El generador toma un archivo JS con los textos y escupe PNG listos para subir.
No se diseña a mano: se edita el archivo y se re-renderiza.

```bash
cd sanyser-landing/marketing
node render.js carruseles/2026-08-carrusel-07.js
```

Salida en `out/<slug>/Slide 1.png`, … más un `_preview.html` para iterar en el
navegador sin re-renderizar. Requiere Chrome (`CHROME_PATH` si no está en
`/usr/bin/google-chrome`).

- **Carrusel de feed** → 1080×1350. Layouts: `portada`, `grafico`, `declaracion`,
  `lista`, `cierre`.
- **Historia / destacado** → 1080×1920, con `meta.formato: 'historia'`.
  Ejemplos en `carruseles/destacado-*.js`.

Para uno nuevo: copiá el archivo más parecido, cambiá `meta.slug` y los textos.

**Las reglas completas de diseño y contenido están en
`sanyser-landing/marketing/README.md`. Leelo antes de armar o modificar una
pieza** — incluye la rotación obligatoria de portadas (para que la grilla del
perfil no quede monótona), los márgenes, el interlineado mínimo de Bebas y las
perillas de foto (`foco`, `anclaje`, `tituloChico`).

`marketing/brief-diseno.md` es la versión para pasarle a un diseñador humano
externo. Si cambia una regla, tiene que cambiar en los dos.

### Las tres reglas de contenido que más se rompen

1. **Todo dato numérico lleva fuente.** Sin fuente no se publica: va en
   `fuentePendiente` y la placa sale con un cartel amarillo hasta que se complete.
2. **Nada de botones dibujados.** En un posteo orgánico nada de la imagen es
   clickeable; un botón pintado promete un tap que no existe. El contacto va como
   información para leer y guardar.
3. **Una idea por slide.** Si la portada ya dio el número, la slide 2 aporta algo
   nuevo. Sin clipart genérico.

## Cómo trabajar

- Antes de escribir código o copy, leé los archivos que vas a tocar y el README
  de la carpeta. Las reglas de este proyecto ya están escritas; no las reinventes.
- Cambios acotados. No refactorices de paso ni "mejores" lo que no se pidió.
- Después de tocar el sitio, corré el build o el lint antes de decir que está listo.
- Después de generar placas, abrí el `_preview.html` y revisá que no se corte texto.
- Commiteá solo cuando te lo piden. Mensajes en español, en minúscula, sin
  emojis, describiendo el cambio real.
- Si un dato del negocio no está en el repo (precios, stock, marcas nuevas,
  teléfonos), preguntá. No lo inventes: termina impreso en una placa.
