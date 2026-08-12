/**
 * Historia destacada 5 — FAQ
 *
 * Las cinco respuestas estan copiadas del FAQ del sitio (src/data/faq.js),
 * no reescritas de memoria. Verificado tambien:
 *   - horarios y localidad: faq.js, pregunta del showroom
 *   - "+25 marcas": hay 26 logos de marca en src/assets/marcasLogos
 * Si el FAQ del sitio cambia, esta historia queda desactualizada.
 *
 * La pregunta va como titulo del layout `paso`, no como kicker: en un FAQ la
 * pregunta es el titular, es lo que la persona esta buscando.
 */

export const meta = {
  slug: 'destacado-5-faq',
  titulo: 'Destacado: Preguntas frecuentes',
  formato: 'historia',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'naranja',
    kicker: 'FAQ',
    titulo: 'Preguntas frecuentes',
    bajada: 'Las cinco que más nos hacen.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Pregunta',
    numero: '01',
    titulo: '¿Hacen envíos a todo el país?',
    texto: 'Transporte propio en CABA y GBA. Para el interior, consultanos y lo coordinamos.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Pregunta',
    numero: '02',
    titulo: '¿Cuál es el plazo de entrega?',
    texto: 'Materiales de stock: en el día o dentro de las 48 hs hábiles. Fabricación a medida: se coordina según el proyecto.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Pregunta',
    numero: '03',
    titulo: '¿Tienen mínimo de compra?',
    texto: 'No. Mismo trato para una obra puntual que para un pedido de gran escala.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Pregunta',
    numero: '04',
    titulo: '¿Puedo visitar el showroom?',
    texto: 'Sí, en Lomas de Zamora. Lunes a viernes de 8 a 18 hs y sábados de 8 a 13 hs. Coordiná la visita con anticipación.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Pregunta',
    numero: '05',
    titulo: '¿Qué marcas trabajan?',
    texto: 'Más de 25 marcas líderes: Roca, Tigre, Rheem, Peisa, Pedrollo y Genebre, entre otras.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: '¿Te quedó otra duda?',
    cta: 'Escribinos y te la sacamos <strong>en el momento</strong>.',
    web: 'sanyser.com.ar',
  },
];
