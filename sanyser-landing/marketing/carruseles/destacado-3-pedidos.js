/**
 * Historia destacada 3 — PEDIDOS
 *
 * Todos los datos salen del FAQ del sitio (src/data/faq.js): plazos de
 * respuesta, ausencia de minimo de compra y cobertura de envios. Si cambian
 * ahi, hay que cambiarlos aca.
 */

export const meta = {
  slug: 'destacado-3-pedidos',
  titulo: 'Destacado: Pedidos',
  formato: 'historia',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    kicker: 'Pedidos',
    titulo: '¿Cómo pedís tu presupuesto?',
    bajada: 'Cuatro cosas que conviene saber antes de escribirnos.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Canales',
    numero: '01',
    titulo: 'Por WhatsApp, teléfono o el formulario del sitio',
    texto: 'El que te quede más cómodo. Los tres llegan al mismo equipo.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Tiempos',
    numero: '02',
    titulo: 'Respondemos dentro del mismo día hábil',
    texto: 'Para materiales de stock, el despacho sale en el día o dentro de las 48 hs hábiles.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Escala',
    numero: '03',
    titulo: 'Sin mínimo de compra',
    texto: 'Desde una obra puntual hasta pedidos de gran escala. La atención es la misma.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Envíos',
    numero: '04',
    titulo: 'CABA y GBA con transporte propio',
    texto: 'Para envíos al interior del país, consultanos y lo coordinamos.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: 'Pedinos tu presupuesto',
    cta: 'Mandanos el listado y te volvemos con <strong>precio y disponibilidad</strong>.',
    web: 'sanyser.com.ar',
  },
];
