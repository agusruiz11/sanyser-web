/**
 * Carrusel 1 — Agosto 2026
 * Termotanques: comparativa de tres marcas en stock.
 *
 * PORTADA NAVY PLANA: quinto y ultimo tratamiento del ciclo (ver README).
 * C3 navy+foto · C4 navy+foto · C5 naranja · C6 claro · C7 naranja+foto ·
 * C1 navy plano. Con esto quedan usados los cinco.
 *
 * ---------------------------------------------------------------------------
 * EL PROBLEMA DE FONDO DE LA VERSION ORIGINAL NO ERA EL DISENO: ERA QUE LA
 * COMPARATIVA NO SE PODIA COMPARAR.
 *
 * Cada placa mostraba atributos distintos:
 *   Sherman -> tipo + capacidad + conexion
 *   Rheem   -> tipo + capacidad
 *   SAIAR   -> tipo + capacidad + garantia
 *
 * Asi no se compara nada: son tres avisos sueltos. Aca las tres fichas usan
 * la misma grilla de cuatro atributos en el mismo orden. Los datos que no
 * teniamos salen marcados en amarillo como "DATO A CONFIRMAR": hay que
 * pedirselos al proveedor antes de publicar.
 *
 * Los unicos datos reales son los que traia la version de Jero, que
 * presumiblemente salieron del catalogo. No agregue ninguno.
 * ---------------------------------------------------------------------------
 *
 * Errores de forma que no reproduje:
 *  - el rojo #F03A24 del patron de puntos y de las cajas del CTA, que no es
 *    el naranja de marca
 *  - los tres logos en tratamientos distintos (Rheem con glow blanco, SAIAR
 *    gris sobre gris casi ilegible)
 *  - cuatro estilos de icono mezclados: rayo 3D, llama degradada, gota
 *    brillante y termotanque flat
 *  - "Comentanos TERMO", el CTA de comentario que ya sabemos que no funciona
 */

export const meta = {
  slug: '2026-08-carrusel-01',
  titulo: 'Termotanques: tres marcas en stock',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    kicker: 'Termotanques',
    titulo: '¿La obra se frena por un termotanque?',
    bajada: 'Tres marcas en stock, comparadas con los mismos criterios.',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'ficha',
    fondo: 'blanco',
    kicker: 'En stock · 01',
    marca: 'Sherman',
    logo: 'sherman-logo.png',
    specs: [
      ['Tipo', 'Gas y eléctrico'],
      ['Capacidad', '50 a 120 L'],
      ['Conexión', 'Superior o inferior'],
      ['Garantía', null], // ← pedir al proveedor
    ],
  },

  {
    layout: 'ficha',
    fondo: 'blanco',
    kicker: 'En stock · 02',
    marca: 'Rheem',
    logo: 'rheem-logo.png',
    specs: [
      ['Tipo', 'Eléctrico'],
      ['Capacidad', '125 L'],
      ['Conexión', null], // ← pedir al proveedor
      ['Garantía', null], // ← pedir al proveedor
    ],
  },

  {
    layout: 'ficha',
    fondo: 'blanco',
    kicker: 'En stock · 03',
    marca: 'SAIAR',
    logo: 'saiar-logo.png',
    specs: [
      ['Tipo', 'Eléctrico'],
      ['Capacidad', '125 L'],
      ['Conexión', null], // ← pedir al proveedor
      ['Garantía', '7 años'],
    ],
  },

  {
    layout: 'lista',
    fondo: 'claro',
    titulo: 'Decinos tres cosas',
    items: [
      'Gas o eléctrico',
      'Cuántos litros',
      'Conexión superior o inferior',
    ],
    remate: 'Con eso alcanza: te cotizamos <strong>el mismo día hábil</strong>.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Que el termotanque no te frene la obra',
    cta: 'Pasanos los tres datos y te confirmamos <strong>precio y disponibilidad</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
