/**
 * Carrusel 4 — Agosto 2026
 * Los 3 errores más caros al especificar material sanitario para obra grande.
 *
 * Rehecho sobre el guion original de Vico. Cambios de contenido respecto de la
 * versión que armó Jero:
 *
 * 1. Cada error suma una línea de consecuencia. La portada promete "los más
 *    caros": si la placa solo nombra el error y no dice qué cuesta, no cumple.
 * 2. "Logística priority" pasa a "Logística prioritaria" (era la única palabra
 *    en inglés de todo el carrusel). VERIFICAR con Vico qué significa
 *    exactamente el servicio antes de publicar.
 * 3. El cierre usa "Pedí una reunión técnica sin cargo", que estaba suelto en
 *    un PNG sin numerar y es mejor CTA que el original.
 */

export const meta = {
  slug: '2026-08-carrusel-04',
  titulo: 'Los 3 errores más caros al especificar material sanitario',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    foto: 'bg/obra1.jpeg',
    kicker: 'Compras para obra',
    titulo: 'Los 3 errores más caros al especificar material sanitario',
    bajada: 'Los tres se pagan después, cuando ya no se pueden deshacer.',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Error',
    numero: '01',
    titulo: 'Pedir por precio y no por <strong>especificación técnica completa</strong>',
    texto: 'Dos productos con el mismo nombre pueden tener distinto material, presión de trabajo y garantía. La diferencia no aparece en el presupuesto: aparece en la instalación.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Error',
    numero: '02',
    titulo: 'No cruzar el material con el <strong>cronograma real de obra</strong>',
    texto: 'Lo que llega antes de tiempo ocupa lugar, se daña y se pierde. Lo que llega tarde para la obra entera.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Error',
    numero: '03',
    titulo: 'No pedir <strong>documentación técnica</strong> antes de comprar',
    texto: 'Sin fichas ni certificados, cualquier reclamo posterior queda sin respaldo. Y el que responde ante la dirección de obra sos vos.',
  },

  {
    layout: 'lista',
    fondo: 'claro',
    titulo: 'Cómo lo resolvemos',
    items: [
      'Asesoramiento técnico antes de la compra',
      'Logística prioritaria', // ← confirmar el nombre real del servicio
      'Documentación completa desde el pedido',
    ],
    remate: 'Los tres errores se evitan en la misma conversación, antes de que salga la orden de compra.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Pedí una reunión técnica sin cargo',
    cta: 'Revisamos tu pliego y te devolvemos <strong>especificaciones, plazos y precios</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
