/**
 * Carrusel 6 — Agosto 2026
 * Qué documentación necesitás para presentarte a una licitación sanitaria.
 *
 * PORTADA CLARA Y TIPOGRÁFICA: cuarto paso de la rotación (ver README).
 * C3 navy+foto · C4 navy+foto · C5 naranja · C6 claro. El próximo vuelve a
 * navy plano.
 *
 * OJO — las líneas de consecuencia de cada ítem son razonamiento de oficio,
 * no citas de un pliego. Antes de publicar conviene que las lea alguien que
 * arme legajos de licitación y confirme que no dicen ninguna macana.
 *
 * Errores del original que no reproduje:
 *  - "Certificados de DE calidad del material" (de duplicado)
 *  - "necesitas" sin tilde, cuando todo el resto vosea
 *  - fondo de la slide 3 con sellos ISO 14001 y 45001, que son gestión
 *    ambiental y seguridad laboral: no certifican calidad de material
 *  - fondo de la slide 5 con etiquetas de descuento y cupones de "50%"
 */

export const meta = {
  slug: '2026-08-carrusel-06',
  titulo: 'Documentación para licitaciones de instalación sanitaria',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'claro',
    kicker: 'Obra pública',
    titulo: '¿Qué documentación necesitás para presentarte a una licitación?',
    bajada: 'Instalación sanitaria. Los cuatro papeles que te pueden dejar afuera.',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Necesitás',
    numero: '01',
    titulo: '<strong>Facturas y remitos</strong> en regla',
    texto: 'Son la prueba de que la provisión existió y en qué fecha. Sin esa trazabilidad, el resto del legajo no se sostiene.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Necesitás',
    numero: '02',
    titulo: '<strong>Certificados de calidad</strong> del material',
    texto: 'Acreditan que el material cumple la norma que exige el pliego. Sin certificado, el producto puede ser bueno y quedar observado igual.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Necesitás',
    numero: '03',
    titulo: '<strong>Fichas técnicas</strong> de cada producto',
    texto: 'Permiten verificar que lo ofertado coincide con lo especificado. Es donde se caen las equivalencias mal armadas.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Necesitás',
    numero: '04',
    titulo: '<strong>Antecedentes de provisión</strong> en obras similares',
    texto: 'Demuestran que ya proveíste algo de esa escala. En obra pública suelen puntuar aparte del precio.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/obra4.jpeg',
    kicker: 'Lo importante',
    texto: 'En Sanyser emitimos toda esta documentación.',
    destacado: 'Es parte del servicio a obra pública, no un trámite aparte.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Consultanos para tu próxima licitación',
    cta: 'Decinos a qué te presentás y te preparamos <strong>el legajo completo</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
