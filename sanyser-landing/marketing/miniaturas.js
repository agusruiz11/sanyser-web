#!/usr/bin/env node
/**
 * Miniaturas (portadas) de las historias destacadas de Instagram.
 *
 *   node miniaturas.js
 *
 * POR QUE ESTO NO ES render.js
 * Una miniatura no es una placa chica: es otra pieza. Se sube como historia
 * de 1080x1920, pero Instagram recorta el cuadrado del centro y lo enmascara
 * en un circulo que en el perfil mide unos 110 px. A ese tamano no entra
 * texto: lo unico que sobrevive es un color plano y una forma simple.
 * Por eso las miniaturas no llevan titulo, ni logo, ni bajada. El nombre del
 * destacado ya lo escribe Instagram debajo del circulo; repetirlo adentro es
 * gastar el unico espacio que hay.
 *
 * ICONOS
 * Salen de Lucide, el mismo set que usa sanyser.com.ar (`lucide-react` esta
 * en las dependencias del sitio). Los paths estan copiados aca abajo en vez
 * de importados, por la misma razon que las fuentes van en base64 en
 * render.js: el render no depende de la red ni de que haya un paquete
 * instalado, y sale igual siempre.
 *
 * COLORES
 * Alternan naranja y navy para que la fila de destacados tenga ritmo. Es la
 * unica variedad que se permite: la forma y el peso son iguales en las cinco,
 * asi se leen como un set y no como cinco decisiones sueltas.
 *
 * SALIDA
 * out/miniaturas/<slug>.png  — 1080x1920, listo para subir como historia
 * out/miniaturas/_preview.html — las cinco YA RECORTADAS EN CIRCULO y al
 *   tamano real del perfil, sobre fondo claro y oscuro. Es el control que
 *   importa: si a 110 px no se entiende que es, no sirve.
 *
 * Al subirla, Instagram deja correr el encuadre con el dedo. El motivo esta
 * centrado y sobra margen, asi que aguanta el movimiento.
 */

import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const aqui = dirname(fileURLToPath(import.meta.url));

let puppeteer;
try {
  const req = createRequire(resolve(aqui, '../package.json'));
  const mod = req('puppeteer');
  puppeteer = mod.default ?? mod;
} catch {
  console.error('No encontre puppeteer. Instalalo con: npm i -D puppeteer');
  process.exit(1);
}

// --------------------------------------------------------------- la marca

const NAVY = '#0F1E37';
const NARANJA = '#FF5500';

// ------------------------------------------------------------- los iconos
// Lucide v1.35, viewBox 0 0 24 24. Solo el contenido del <svg>.

const ICONOS = {
  wrench: `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>`,

  'building-2': `<path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>`,

  'clipboard-list': `<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>`,

  'file-check-2': `<path d="M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="m14 20 2 2 4-4"/>`,

  'message-circle-question': `<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>`,
};

// ------------------------------------------------------ ESTO ES LO QUE SE EDITA
// El orden es el de la fila del perfil, de izquierda a derecha.
// `nombre` no se imprime: lo escribe Instagram. Esta aca para el preview.

const DESTACADOS = [
  { slug: 'destacado-1-servicios', nombre: 'SERVICIOS', icono: 'wrench', fondo: NARANJA },
  { slug: 'destacado-2-obras', nombre: 'OBRAS', icono: 'building-2', fondo: NAVY },
  { slug: 'destacado-3-pedidos', nombre: 'PEDIDOS', icono: 'clipboard-list', fondo: NARANJA },
  { slug: 'destacado-4-proyectos', nombre: 'PROYECTOS', icono: 'file-check-2', fondo: NAVY },
  { slug: 'destacado-5-faq', nombre: 'FAQ', icono: 'message-circle-question', fondo: NARANJA },
];

// ----------------------------------------------------------------- medidas

const ANCHO = 1080;
const ALTO = 1920;
const ICONO = 400; // lado del icono, centrado
const ANILLO = 452; // radio del aro fino que repite el borde del circulo
const TRAZO = 1.75; // stroke-width en unidades del viewBox de 24

const pieza = (d) => `
  <section class="mini" data-slug="${d.slug}" style="background:${d.fondo}">
    <svg class="aro" width="${ANCHO}" height="${ANCHO}" viewBox="0 0 ${ANCHO} ${ANCHO}">
      <circle cx="540" cy="540" r="${ANILLO}" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="7"/>
    </svg>
    <svg class="icono" width="${ICONO}" height="${ICONO}" viewBox="0 0 24 24"
         fill="none" stroke="#fff" stroke-width="${TRAZO}"
         stroke-linecap="round" stroke-linejoin="round">${ICONOS[d.icono]}</svg>
  </section>`;

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#111}
  .mini{
    width:${ANCHO}px; height:${ALTO}px; position:relative;
    display:flex; align-items:center; justify-content:center;
  }
  /* El aro y el icono se centran sobre el cuadrado del medio, que es lo que
     Instagram recorta: centro vertical de la pieza, no de la historia. */
  .mini .aro, .mini .icono{ position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); }
</style></head>
<body>${DESTACADOS.map(pieza).join('\n')}</body></html>`;

// --------------------------------------------------------------- ejecucion

const salida = join(aqui, 'out', 'miniaturas');
mkdirSync(salida, { recursive: true });

const navegador = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});
const pagina = await navegador.newPage();
await pagina.setViewport({ width: ANCHO, height: ALTO, deviceScaleFactor: 1 });
await pagina.setContent(html, { waitUntil: 'load' });

const secciones = await pagina.$$('.mini');
const png = [];
for (let i = 0; i < secciones.length; i++) {
  const archivo = join(salida, `${DESTACADOS[i].slug}.png`);
  await secciones[i].screenshot({ path: archivo });
  png.push(archivo);
  console.log('✓', archivo.replace(aqui + '/', ''));
}

// --- control: como se ven de verdad en el perfil ----------------------------
// Instagram recorta el cuadrado del centro y lo enmascara en circulo. Aca se
// reproduce eso a 110 px, que es el tamano real, y a 220 px para mirar de cerca.

const b64 = (p) => readFileSync(p).toString('base64');
const fila = (tam) => DESTACADOS.map((d, i) => `
  <div class="col">
    <div class="circ" style="width:${tam}px;height:${tam}px;
      background-image:url('data:image/png;base64,${b64(png[i])}')"></div>
    <span style="font-size:${tam > 150 ? 13 : 11}px">${d.nombre}</span>
  </div>`).join('');

writeFileSync(join(salida, '_preview.html'), `<!doctype html><meta charset="utf-8"><style>
  body{margin:0;padding:28px;background:#000;color:#eee;font:13px system-ui}
  h1{font-size:15px;font-weight:600;margin:0 0 4px}
  p{margin:0 0 20px;opacity:.55;max-width:760px;line-height:1.5}
  h2{font-size:13px;font-weight:600;margin:28px 0 12px;opacity:.7}
  .fila{display:flex;gap:20px;align-items:flex-start}
  .col{display:flex;flex-direction:column;align-items:center;gap:7px;opacity:.95}
  /* El circulo toma el cuadrado del centro de la historia: background-position
     center y un size que escala el ancho de 1080 al diametro del circulo. */
  .circ{border-radius:50%;background-size:100% auto;background-position:center;
        background-repeat:no-repeat;border:2px solid #333}
  .claro{background:#fff;color:#111;padding:22px;border-radius:10px;margin-top:8px}
  .claro .col{color:#111}
</style>
<h1>Miniaturas de destacados · control de tamaño real</h1>
<p>Así se ven en el perfil: Instagram recorta el cuadrado del centro de la historia
y lo enmascara en círculo. La primera fila está al tamaño real (110&nbsp;px). Si a
ese tamaño no se entiende qué es, la miniatura no sirve, por linda que se vea grande.</p>

<h2>Tamaño real — 110 px, fondo oscuro</h2>
<div class="fila">${fila(110)}</div>

<div class="claro">
  <h2 style="color:#111">Tamaño real — 110 px, fondo claro</h2>
  <div class="fila">${fila(110)}</div>
</div>

<h2>Al doble, para mirar el trazo — 220 px</h2>
<div class="fila">${fila(220)}</div>
`);
console.log('✓', 'out/miniaturas/_preview.html (control de tamaño real)');

await navegador.close();
console.log(`\n${png.length} miniaturas en out/miniaturas/`);
