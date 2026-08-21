/**
 * Carrusel 5 — Agosto 2026
 * Qué incluye una memoria de cálculo de instalación sanitaria.
 *
 * PORTADA NARANJA: tercer paso de la rotación de portadas (ver README).
 * Los carruseles 3 y 4 abren en navy con foto; este rompe en plano naranja
 * para que la grilla del perfil no quede toda igual. Los interiores mantienen
 * el mismo sistema a propósito: la variedad va en la tapa, no adentro.
 *
 * Cambio de contenido sobre el guion original: cada ítem suma una línea de
 * "por qué te ahorra problemas". La portada lo promete y la versión anterior
 * enumeraba sin contestarlo nunca.
 *
 * CORRECCION DEL CLIENTE (via Victoria): el cierre pedia "mandanos los planos
 * y disenamos el proyecto especialmente para tu obra". Se tomo la idea pero
 * conservando los entregables concretos: "el proyecto" solo no dice que recibis.
 */

export const meta = {
  slug: '2026-08-carrusel-05',
  titulo: 'Qué incluye una memoria de cálculo de instalación sanitaria',
};

export const slides = [
  {
    layout: 'portada',
    fondo: 'naranja',
    kicker: 'Documentación de obra',
    titulo: '¿Qué incluye una memoria de cálculo de instalación sanitaria?',
    bajada: 'Y por qué te ahorra problemas en obra.',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Incluye',
    numero: '01',
    titulo: '<strong>Planos de instalación</strong> detallados',
    texto: 'El instalador no improvisa recorridos en obra. Menos retrabajos y menos roturas de lo que ya estaba hecho.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Incluye',
    numero: '02',
    titulo: '<strong>Cómputos de materiales</strong> exactos',
    texto: 'Comprás lo que realmente entra en la obra. Ni sobrante inmovilizado ni faltante a mitad de semana.',
  },

  {
    layout: 'paso',
    fondo: 'claro',
    kicker: 'Incluye',
    numero: '03',
    titulo: '<strong>Especificaciones técnicas</strong> por tramo',
    texto: 'Cada tramo con su diámetro, material y presión de trabajo. La compra deja de depender de lo que alguien recuerde.',
  },

  {
    layout: 'paso',
    fondo: 'navy',
    kicker: 'Incluye',
    numero: '04',
    titulo: '<strong>Documentación</strong> para presentar ante organismos',
    texto: 'Cuando el proyecto lo requiere, ya está armada. La habilitación no se frena esperando un papel.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    foto: 'bg/obra2.jpeg',
    kicker: 'Lo importante',
    texto: 'En Sanyser esto es parte del servicio.',
    destacado: 'No un extra que se cotiza aparte.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Contanos tu proyecto',
    cta: 'Mandanos los planos y diseñamos el proyecto para tu obra: <strong>memoria, cómputo y especificaciones</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
