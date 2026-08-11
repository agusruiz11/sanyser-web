#!/usr/bin/env node
/**
 * Renderiza un carrusel de Instagram a PNG (1080x1350) usando Chrome headless.
 *
 *   node render.js carruseles/2026-08-carrusel-03.js
 *
 * Fuentes y logo se embeben en base64, asi que el render no depende de la red
 * ni de que las tipografias esten instaladas en el sistema: siempre sale igual.
 */

import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

const aqui = dirname(fileURLToPath(import.meta.url));

// puppeteer ya esta instalado en el proyecto (lo arrastra react-snap):
// lo reutilizamos para no duplicar una descarga de ~300 MB.
let puppeteer;
try {
  const req = createRequire(resolve(aqui, '../package.json'));
  const mod = req('puppeteer');
  puppeteer = mod.default ?? mod;
} catch {
  console.error('No encontre puppeteer. Instalalo con: npm i -D puppeteer');
  process.exit(1);
}

const LOGO = resolve(aqui, '../src/assets/LOGO.png');
const b64 = (p) => readFileSync(p).toString('base64');

// ---------------------------------------------------------------- plantillas

const esc = (s = '') => String(s).replace(/&(?!#?\w+;)/g, '&amp;').replace(/</g, '&lt;');

/** Los campos de copy admiten <strong> a proposito; el resto se escapa. */
const rico = (s = '') => String(s).replace(/&(?!#?\w+;)/g, '&amp;');

/** Data URI del logo; se completa en construirHtml antes de armar las slides. */
let LOGO_SRC = '';

const paginador = (i, total) =>
  `<span class="paginador">${String(i + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>`;

const encabezado = (i, total) => `
  <header class="encabezado">
    <img class="logo" src="${LOGO_SRC}" alt="Sanyser" />
    ${paginador(i, total)}
  </header>`;

const pieFuente = (s) => {
  if (s.fuentePendiente) return `<p class="fuente fuente--pendiente">${esc(s.fuentePendiente)}</p>`;
  if (s.fuente) return `<p class="fuente">${esc(s.fuente)}</p>`;
  return '<span></span>';
};

const layouts = {
  portada: (s) => `
    <div class="cuerpo">
      ${s.kicker ? `<p class="kicker">${esc(s.kicker)}</p>` : ''}
      <h1 class="display">${esc(s.titulo)}</h1>
      <div class="stats">
        ${(s.stats || []).map((st) => `
          <div class="stat ${st.secundario ? 'stat--secundario' : ''}">
            <div class="stat__valor">${esc(st.valor)}</div>
            <div class="stat__etiqueta">${esc(st.etiqueta)}</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="pie">
      ${pieFuente(s)}
      ${s.deslizar ? `<span class="deslizar">${esc(s.deslizar)}</span>` : ''}
    </div>`,

  grafico: (s) => {
    const tope = s.escala || Math.max(...s.barras.map((b) => b.valor)) * 1.15;
    // El ancho util descuenta el espacio del numero al final de la barra.
    const utilPx = 1080 - 88 * 2 - 230;
    return `
    <div class="cuerpo">
      <h2 class="titulo">${esc(s.titulo)}</h2>
      <div class="grafico">
        ${s.barras.map((b) => `
          <div class="barra ${b.secundario ? 'barra--secundaria' : ''}">
            <div class="barra__etiqueta">${esc(b.etiqueta)}</div>
            <div class="barra__riel">
              <div class="barra__relleno" style="width:${Math.round((b.valor / tope) * utilPx)}px"></div>
              <div class="barra__valor">${esc(b.mostrar ?? b.valor)}</div>
            </div>
          </div>`).join('')}
      </div>
      ${s.remate ? `<p class="remate">${rico(s.remate)}</p>` : ''}
    </div>
    <div class="pie">${pieFuente(s)}</div>`;
  },

  declaracion: (s) => `
    <div class="cuerpo">
      ${s.kicker ? `<p class="kicker">${esc(s.kicker)}</p>` : ''}
      <p class="texto">${rico(s.texto)}</p>
      ${s.destacado ? `<p class="texto texto--destacado" style="margin-top:48px">${rico(s.destacado)}</p>` : ''}
    </div>
    <div class="pie">${pieFuente(s)}</div>`,

  lista: (s) => `
    <div class="cuerpo">
      <h2 class="titulo">${esc(s.titulo)}</h2>
      <div class="lista">
        ${(s.items || []).map((t, i) => `
          <div class="item">
            <span class="item__num">${String(i + 1).padStart(2, '0')}</span>
            <span class="item__texto">${rico(t)}</span>
          </div>`).join('')}
      </div>
      ${s.remate ? `<p class="remate">${rico(s.remate)}</p>` : ''}
    </div>
    <div class="pie">${pieFuente(s)}</div>`,

  cierre: (s) => `
    <div class="cuerpo">
      <h2 class="display display--sm">${esc(s.titulo)}</h2>
      ${s.cta ? `<p class="cierre__cta">${rico(s.cta)}</p>` : ''}
    </div>
    <div class="pie">
      <img class="logo logo--cierre" src="${LOGO_SRC}" alt="Sanyser" />
      ${s.web ? `<span class="cierre__web">${esc(s.web)}</span>` : ''}
    </div>`,
};

function construirHtml(slides, css, logoUri, fontUris) {
  LOGO_SRC = `data:image/png;base64,${logoUri}`;

  const cuerpos = slides.map((s, i) => {
    const armar = layouts[s.layout];
    if (!armar) throw new Error(`Layout desconocido: "${s.layout}" (slide ${i + 1})`);
    const fondo = { navy: 'slide--navy', naranja: 'slide--naranja', blanco: 'slide--blanco', claro: '' }[s.fondo] ?? '';
    // El cierre trae su propio pie con logo grande: arriba solo va el paginador.
    const cabecera = s.layout === 'cierre'
      ? `<header class="encabezado"><span></span>${paginador(i, slides.length)}</header>`
      : encabezado(i, slides.length);
    return `<section class="slide ${fondo}" data-n="${i + 1}">${cabecera}${armar(s)}</section>`;
  }).join('\n');

  return `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<style>
@font-face{font-family:'Bebas Neue';font-style:normal;font-weight:400;font-display:block;
  src:url(data:font/woff2;base64,${fontUris.bebas}) format('woff2');}
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;
  src:url(data:font/woff2;base64,${fontUris.interLatin}) format('woff2');
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;}
@font-face{font-family:'Inter';font-style:normal;font-weight:100 900;font-display:block;
  src:url(data:font/woff2;base64,${fontUris.interExt}) format('woff2');
  unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1EFF,U+2020,U+20A0-20AB,U+2113,U+2C60-2C7F,U+A720-A7FF;}
${css}
</style></head>
<body>${cuerpos}</body></html>`;
}

// ------------------------------------------------------------------- ejecucion

const arg = process.argv[2];
if (!arg) {
  console.error('Uso: node render.js carruseles/<archivo>.js');
  process.exit(1);
}

const modulo = await import(pathToFileURL(resolve(aqui, arg)).href);
const { slides, meta } = modulo;

const html = construirHtml(
  slides,
  readFileSync(join(aqui, 'brand.css'), 'utf8'),
  b64(LOGO),
  {
    bebas: b64(join(aqui, 'fonts/bebasneue-latin.woff2')),
    interLatin: b64(join(aqui, 'fonts/inter-latin.woff2')),
    interExt: b64(join(aqui, 'fonts/inter-latinext.woff2')),
  },
);

const salida = join(aqui, 'out', meta.slug);
mkdirSync(salida, { recursive: true });
writeFileSync(join(salida, '_preview.html'), html); // abrir en el navegador para iterar rapido

const navegador = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});
const pagina = await navegador.newPage();
await pagina.setViewport({ width: 1080, height: 1350, deviceScaleFactor: 1 });
await pagina.setContent(html, { waitUntil: 'load' });
await pagina.evaluate(() => document.fonts.ready);

const secciones = await pagina.$$('.slide');
const png = [];
for (let i = 0; i < secciones.length; i++) {
  const archivo = join(salida, `Slide ${i + 1}.png`);
  await secciones[i].screenshot({ path: archivo });
  png.push(archivo);
  console.log('✓', archivo.replace(aqui + '/', ''));
}

// --- chequeo de grilla ------------------------------------------------------
// La grilla del perfil de Instagram recorta a 3:4. Sobre una imagen 4:5 eso
// come ~34px de cada lado: si el diseno no respeta el margen de seguridad, se
// pierde contenido. Esta hoja muestra como queda cada slide ya recortada.
const hojaGrilla = `<!doctype html><meta charset="utf-8"><style>
  body{margin:0;padding:24px;background:#111;color:#eee;font:13px system-ui}
  h1{font-size:15px;font-weight:600;margin:0 0 4px}
  p{margin:0 0 18px;opacity:.55}
  .fila{display:flex;gap:14px;flex-wrap:wrap}
  .tile{width:230px;height:307px;background-size:cover;background-position:center;
        border:1px solid #333;position:relative}
  .tile span{position:absolute;top:6px;left:6px;background:#000a;padding:2px 7px;
             border-radius:3px;font-size:11px}
</style>
<h1>Vista de grilla del perfil · recorte 3:4</h1>
<p>Si algo se corta acá, falta margen en el diseño. El lienzo sigue siendo 1080×1350.</p>
<div class="fila">${png.map((p, i) =>
  `<div class="tile" style="background-image:url('data:image/png;base64,${readFileSync(p).toString('base64')}')"><span>${i + 1}</span></div>`,
).join('')}</div>`;

await pagina.setViewport({ width: 1080, height: 460, deviceScaleFactor: 2 });
await pagina.setContent(hojaGrilla, { waitUntil: 'load' });
await pagina.screenshot({ path: join(salida, '_grilla.png'), fullPage: true });
console.log('✓', `out/${meta.slug}/_grilla.png (control de recorte 3:4)`);

await navegador.close();
console.log(`\n${secciones.length} slides en out/${meta.slug}/`);
