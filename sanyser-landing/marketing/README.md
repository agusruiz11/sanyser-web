# Sanyser — Carruseles de Instagram

Generador de placas 1080×1350 con la tipografía y los colores reales de la marca.
Se escribe el texto en un archivo, se corre un comando y salen los PNG listos para subir.

## Uso

```bash
cd marketing
node render.js carruseles/2026-08-carrusel-03.js
```

Los PNG quedan en `out/<slug>/Slide 1.png`, `Slide 2.png`, …
También se genera `out/<slug>/_preview.html`: abrilo en el navegador para iterar
sin re-renderizar cada vez.

Para un carrusel nuevo, copiá un archivo de `carruseles/`, cambiá `meta.slug` y los textos.

Requiere Chrome (`/usr/bin/google-chrome`, o exportá `CHROME_PATH`) y usa el puppeteer
que ya está instalado en `sanyser-landing/node_modules`.

## Layouts disponibles

| `layout` | Para qué sirve | Campos |
|---|---|---|
| `portada` | Slide 1: gancho + dato duro | `kicker`, `titulo`, `stats[]`, `fuente`, `deslizar` |
| `grafico` | Comparar 2–4 valores con barras | `titulo`, `barras[]`, `escala`, `remate` |
| `declaracion` | Una idea por placa | `kicker`, `texto`, `destacado` |
| `lista` | 2–4 items numerados | `titulo`, `items[]`, `remate` |
| `cierre` | CTA final + logo | `titulo`, `cta`, `web` |

`fondo` acepta `navy`, `naranja`, `claro` (default) o `blanco`.
Los campos `destacado`, `remate`, `cta` e `items` admiten `<strong>`.

## Reglas de marca

**Tipografías** — las mismas que sanyser.com.ar:
- **Bebas Neue** → titulares y números grandes. Siempre en mayúsculas (la fuente no tiene minúsculas).
- **Inter** → todo el resto: cuerpo, etiquetas, kickers, pies.

Nunca una tercera tipografía.

**Colores** (definidos en `sanyser-landing/tailwind.config.js`):

| | Hex | Uso |
|---|---|---|
| Naranja | `#FF5500` | Acento, datos destacados, CTA |
| Navy | `#0F1E37` | Fondos oscuros, segundo dato de una comparación |
| Gris claro | `#F5F5F5` | Fondo por defecto |
| Gris texto | `#333333` | Cuerpo sobre fondo claro |

**Layout**
- Margen de seguridad: 88px en los cuatro lados. Nada de contenido cortado por el borde.
- Logo arriba a la izquierda, 44px de alto, en todas las slides menos la de cierre
  (ahí va abajo, a 68px). Sobre naranja o navy va en blanco puro.
- Paginador arriba a la derecha (`01 / 06`).
- Alineación a la izquierda en todas las slides. No mezclar centrado y alineado.

**Contenido**
- **Todo dato numérico lleva fuente.** Si no hay fuente, no se publica el dato.
  Poné el número en el campo `fuentePendiente` y la placa sale con un cartel amarillo
  imposible de pasar por alto hasta que se complete.
- Una idea por slide. Si la portada ya dio el número, la slide 2 tiene que aportar algo nuevo.
- El CTA va en la placa, no solo en el copy del posteo.
- Sin clipart genérico (billetes, flechas, calendarios de stock). Si no aporta información,
  no va.

## Pendiente

`carruseles/2026-08-carrusel-03.js` tiene los porcentajes del carrusel original
(+38% mano de obra, +22,5% materiales) **sin fuente verificada**. Antes de reutilizar
esos números hay que confirmar de dónde salen y reemplazar `fuentePendiente` por `fuente`.
