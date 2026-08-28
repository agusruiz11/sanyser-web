/**
 * Carrusel 2 — Septiembre 2026
 * Criterio de producto: el arquitecto especifica, compras recorta.
 *
 * PORTADA NARANJA PLANA: tratamiento B (ver README). El carrusel 1 de
 * septiembre abre navy + foto, y la ultima tapa publicada (carrusel 4 de
 * agosto) tambien es navy + foto. Naranja plano corta con las dos.
 *
 * ---------------------------------------------------------------------------
 * ESTRUCTURA: el conflicto se muestra, no se cuenta.
 *
 * Las slides 2 y 3 son la misma placa espejada — mismo layout, mismo largo,
 * fondos opuestos (claro / navy). Las dos posiciones se ven enfrentadas antes
 * de leerlas. Por eso las frases del guion se cortaron en dos partes: la
 * postura arriba y el motivo abajo, iguales en las dos placas.
 *
 * El guion decia "el arquitecto defiende la especificacion porque ahi esta su
 * diseno y su reputacion" en un renglon corrido. Partido rinde mas y deja ver
 * el paralelismo con la de compras.
 *
 * ---------------------------------------------------------------------------
 * VERIFICADO CONTRA EL SITIO
 *
 * "mas de 25 marcas" es correcto: src/data/faq.js las lista una por una y
 * src/data/marcas.js tiene 30 activas. El sitio ya dice "25+" en nosotros.js.
 *
 * "acuerdos directos de fabrica" ya se uso en el carrusel 3 de agosto.
 *
 * OJO — "DISTRIBUIDOR OFICIAL" NO ESTA EN EL SITIO. El FAQ dice "trabajamos
 * con mas de 25 marcas lideres" y la pregunta es "¿que marcas distribuyen?".
 * Nunca dice "distribuidor oficial", que es un escalon mas fuerte: implica un
 * acuerdo formal de distribucion autorizada con cada fabricante. La frase la
 * escribio el cliente sobre su propio negocio, asi que va como la mando, pero
 * conviene que la confirmen: el publico de esta pieza son arquitectos y jefes
 * de compras, que son justo los que pueden chequearlo con el fabricante.
 *
 * Si prefieren la version del sitio, la slide 5 pasa a:
 *   'Trabajamos con más de 25 marcas, con acuerdos directos de fábrica.'
 */

export const meta = {
  slug: '2026-09-carrusel-02',
  titulo: 'Criterio de producto — especificación vs. presupuesto',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'naranja',
    kicker: 'Criterio de producto',
    titulo: 'Alguien se va a quedar sin lo que pidió',
    bajada: 'El arquitecto pidió una marca puntual. Compras tiene que bajar el número.',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'declaracion',
    fondo: 'claro',
    kicker: 'El arquitecto',
    texto: 'Defiende la especificación.',
    destacado: 'Ahí están su diseño y su reputación profesional.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    kicker: 'Compras',
    texto: 'Defiende el presupuesto.',
    destacado: 'Tiene que responder por toda la obra, no por un ítem.',
  },

  {
    layout: 'declaracion',
    fondo: 'claro',
    kicker: 'La discusión, mal planteada',
    texto: 'No es ceder en la marca o ceder en el presupuesto.',
    destacado: 'Hay una tercera opción: sostener las dos cosas a la vez.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    kicker: 'Cómo la sostenemos',
    texto: 'Somos distribuidor oficial de más de 25 marcas, con acuerdos directos de fábrica.',
    destacado: 'Por eso podemos mantener la marca especificada a un precio competitivo.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Contanos qué necesita tu proyecto',
    cta: 'Pasanos la especificación y vemos <strong>cómo sostenerla sin romper el presupuesto</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
