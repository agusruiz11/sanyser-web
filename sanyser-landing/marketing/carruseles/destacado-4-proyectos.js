/**
 * Historia destacada 4 — PROYECTOS (licitaciones y obra de gran escala)
 *
 * El listado de documentacion y la experiencia en obra publica salen del FAQ
 * del sitio (src/data/faq.js, pregunta "¿Trabajan con obras públicas y
 * licitaciones?"). No agregue ninguna capacidad que el sitio no declare.
 */

export const meta = {
  slug: 'destacado-4-proyectos',
  titulo: 'Destacado: Proyectos',
  formato: 'historia',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    foto: 'bg/obra3.jpeg',
    kicker: 'Gran escala',
    titulo: '¿Trabajás con licitaciones u obras de gran escala?',
    bajada: 'Estamos preparados para ese tipo de provisión.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Documentación',
    numero: '01',
    titulo: 'Emitimos todo el legajo',
    texto: 'Facturas, remitos, certificados de calidad y fichas técnicas de cada producto.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Antecedentes',
    numero: '02',
    titulo: 'Experiencia en obra pública',
    texto: 'Ya proveímos materiales para procesos licitatorios y sabemos qué pide cada pliego.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Acompañamiento',
    numero: '03',
    titulo: 'Reunión técnica sin cargo',
    texto: 'Para proyectos de mayor escala, la coordinamos antes de que salga la orden de compra.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: 'Contanos tu proyecto',
    cta: 'Decinos a qué te presentás y preparamos <strong>el legajo completo</strong>.',
    web: 'sanyser.com.ar',
  },
];
