# Sanyser

Sitio institucional y material de marca de **SANYSER — Sanitarios y Servicios**
(Banfield, Lomas de Zamora). Venta de materiales sanitarios para obras y constructoras.

🔗 [sanyser.com.ar](https://sanyser.com.ar) · [@sanyser.sanitarios](https://instagram.com/sanyser.sanitarios)

## Estructura

```
sanyser-landing/        Sitio en React + Vite + Tailwind
  src/                  Código de la landing
  dist/                 Build de producción (versionado a propósito: ver deploy)
  marketing/            Generador de carruseles de Instagram
  video/                Escenas en Remotion
docs/                   Guía de despliegue y brochure institucional
```

## Sitio

```bash
cd sanyser-landing
npm install
npm run dev        # desarrollo
npm run build      # build + prerender con react-snap
```

El deploy va a Hostinger por `git subtree` desde `sanyser-landing/dist`.
Por eso `dist/` **se versiona** y no está en el `.gitignore`.
Los pasos están en [docs/despliegue-hostinger.md](docs/despliegue-hostinger.md).

## Marketing

Generador de placas 1080×1350 para Instagram con la tipografía y los colores
reales de la marca. Se escribe el texto en un archivo, se corre un comando y
salen los PNG listos para subir.

```bash
cd sanyser-landing/marketing
node render.js carruseles/2026-08-carrusel-03.js
```

Detalles y reglas de marca en [sanyser-landing/marketing/README.md](sanyser-landing/marketing/README.md).

## Marca

| | |
|---|---|
| Titulares | Bebas Neue |
| Cuerpo | Inter |
| Naranja | `#FF5500` |
| Navy | `#0F1E37` |

Definidos en `sanyser-landing/tailwind.config.js` y replicados en
`marketing/brand.css`. El brochure institucional usa Open Sans en vez de Inter
para el cuerpo; es la única divergencia conocida.
