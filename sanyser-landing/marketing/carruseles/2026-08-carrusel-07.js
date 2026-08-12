/**
 * Carrusel 7 — Agosto 2026
 * ¿Comprar el material ahora o esperar? Timing en un mercado dolarizado.
 *
 * PORTADA NARANJA + FOTO: quinto tratamiento de tapa (ver README).
 * C3 navy+foto · C4 navy+foto · C5 naranja plano · C6 claro · C7 naranja+foto.
 *
 * Cada factor suma la línea de "cómo se lee". La portada promete enseñar a
 * pensar el timing: enunciar la pregunta sin dar el criterio no alcanza.
 *
 * Errores del original que no reproduje:
 *  - "dolarizado" en verde (slide 2), un color que no existe en la marca
 *  - bandas naranja saturado con texto negro encima, ilegible en el feed
 *  - texto justificado con ríos enormes entre palabras
 *
 * FOTOS PROPIAS: la portada usa `bg/local-listado.jpg` — dos personas en la
 * puerta del local revisando un listado impreso, con el cartel y las marcas de
 * la vidriera a la vista. Es de la casa y va directo al tema del carrusel.
 * Queda tambien `bg/cano-vereda.jpg` (dos operarios cargando un caño) para
 * cuando haga falta una imagen de logistica.
 */

export const meta = {
  slug: '2026-08-carrusel-07',
  titulo: 'Comprar ahora o esperar: timing de compra',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'naranja',
    foto: 'bg/local-listado.jpg',
    foco: 'center 82%', // corre el recorte hacia abajo: sube a las personas
    desplazar: '170px', // foto a la izquierda, panel naranja a la derecha
    kicker: 'Timing de compra',
    // Cortes de linea a mano: mantienen el titular en una columna angosta
    // sobre el margen derecho, libre de las personas que estan a la izquierda.
    titulo: '¿Comprar<br>el material<br><strong>ahora</strong>,<br>o esperar?',
    bajada: 'El timing es parte del presupuesto.',
    bajadaChica: true, // asi entra en un solo renglon
    alineacion: 'derecha', // el borde irregular cae del lado de las personas
    anclaje: 'abajo', // deja libre el centro, donde estan las personas
    deslizar: 'Deslizá →',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Factor',
    numero: '01',
    titulo: '¿El material tiene <strong>componente dolarizado</strong> directo?',
    texto: 'Si el precio sigue al dólar, esperar es apostar al tipo de cambio. Si es de fabricación nacional, la referencia pasa a ser la inflación.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Factor',
    numero: '02',
    titulo: '¿Tu <strong>cronograma de obra</strong> tiene margen para esperar?',
    texto: 'Si el material entra a obra en tres semanas, la discusión es teórica. El cronograma manda sobre la especulación.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Factor',
    numero: '03',
    titulo: '¿Hay <strong>stock disponible</strong> ahora, o el plazo de reposición te deja expuesto?',
    texto: 'Un precio mejor con noventa días de reposición no es un precio mejor: es una obra parada.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/obra3.jpeg',
    kicker: 'La conclusión',
    texto: 'No hay una respuesta única.',
    destacado: 'Pero sí hay forma de planificarlo con datos en vez de con corazonadas.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Te ayudamos a pensar el timing de tu próxima compra',
    cta: 'Contanos qué necesitás y cuándo entra a obra. Te decimos <strong>qué conviene comprar ya y qué puede esperar</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
