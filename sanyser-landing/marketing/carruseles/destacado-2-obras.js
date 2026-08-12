/**
 * Historia destacada 2 — OBRAS
 *
 * SIN CIFRAS. Los tipos de obra salen de src/data/obras.js, que los describe
 * por categoria y no da metros, pisos ni plazos. No agregue ninguno: el brief
 * pedia explicitamente "si no hay dato, va solo la foto sin cifra inventada".
 *
 * PARA MEJORARLO, en orden de impacto:
 *  1. Una cifra real y confirmada de una obra concreta (pisos, m2, plazo,
 *     unidades). Es lo que convierte esta historia de linda a convincente.
 *  2. Fotos de entrega en obra grande. Las de aca son las que habia en los
 *     assets del sitio; si hay fotos propias de una torre o un complejo,
 *     reemplazan a estas y suben bastante el nivel.
 *  3. Nombre de la obra o del cliente, si esta autorizado a publicarse.
 */

export const meta = {
  slug: 'destacado-2-obras',
  titulo: 'Destacado: Obras',
  formato: 'historia',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    foto: 'bg/obra1.jpeg',
    kicker: 'Obras',
    titulo: 'Obras que abastecemos',
    bajada: 'Desde torres residenciales hasta plantas industriales.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/obra2.jpeg',
    kicker: 'Residencial',
    texto: 'Edificios de alta gama y complejos privados.',
    destacado: 'Instalación completa de sistemas presurizados y cloacales.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/obra4.jpeg',
    kicker: 'Industrial',
    texto: 'Plantas industriales en GBA.',
    destacado: 'Provisión sostenida durante todo el plazo de obra.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/cano-vereda.jpg',
    kicker: 'También',
    texto: 'Hotelería y centros de salud.',
    destacado: 'Cada rubro tiene su exigencia técnica. Las conocemos.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: 'Sumate a las obras que confían en Sanyser',
    cta: 'Contanos en qué estás trabajando y te acompañamos <strong>desde el cómputo</strong>.',
    web: 'sanyser.com.ar',
  },
];
