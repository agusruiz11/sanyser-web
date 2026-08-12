/**
 * Historia destacada 1 — SERVICIOS
 * Formato 1080x1920. Ver README: en historias todo lo importante va en el
 * centro; Instagram tapa 250px arriba y ~330px abajo.
 *
 * La slide 7 deja el pie libre a proposito: ahi va el sticker de link a
 * WhatsApp, que se agrega en la app al subir la historia.
 */

export const meta = {
  slug: 'destacado-1-servicios',
  titulo: 'Destacado: Servicios',
  formato: 'historia',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'naranja',
    kicker: 'Servicios',
    titulo: '¿Qué hacemos en Sanyser?',
    bajada: 'Cinco cosas, además de vender materiales.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Servicio',
    numero: '01',
    titulo: 'Ingeniería de proyecto',
    texto: 'Planos, memorias de cálculo y cómputos para instalación sanitaria, gas, contra incendio y calefacción.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Servicio',
    numero: '02',
    titulo: 'Fabricación de colectores a medida',
    texto: 'En acero inoxidable y polipropileno. Con tu ingeniería o con la nuestra.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Servicio',
    numero: '03',
    titulo: 'Capacitación a profesionales',
    texto: 'Talleres y charlas técnicas para instaladores.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Servicio',
    numero: '04',
    titulo: 'Logística inmediata',
    texto: 'Stock permanente y despachos ágiles con transporte propio en CABA y GBA.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Servicio',
    numero: '05',
    titulo: 'Asesoramiento técnico',
    texto: 'Te acompañamos en la elección de materiales para cada obra.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: 'Pedí tu presupuesto',
    cta: 'Contanos qué necesitás y te respondemos <strong>el mismo día hábil</strong>.',
    web: 'sanyser.com.ar',
  },
];
