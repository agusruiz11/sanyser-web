/**
 * Carrusel 3 — Agosto 2026
 * Costos de construcción: mano de obra vs. materiales.
 *
 * Este es el único archivo que hace falta editar para armar un carrusel.
 * Cambiás los textos, corrés `npm run carrusel` y salen los PNG.
 */

export const meta = {
  slug: '2026-08-carrusel-03',
  titulo: 'Costos de construcción — julio 2026',
};

/**
 * OJO: los porcentajes vienen del carrusel original publicado, que no citaba
 * fuente. Hasta no confirmarla, la slide 1 muestra un cartel amarillo que
 * obliga a completarla antes de publicar. Cuando la tengas, reemplazá
 * `fuentePendiente` por `fuente` con el texto real.
 */
export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    kicker: 'Costos de construcción · Julio 2026',
    titulo: 'Mano de obra y materiales ya no suben al mismo ritmo',
    stats: [
      { valor: '+38%', etiqueta: 'Mano de obra' },
      { valor: '+22,5%', etiqueta: 'Materiales', secundario: true },
    ],
    fuentePendiente: 'FALTA FUENTE — completar antes de publicar (INDEC / CAC / cámara sectorial + mes)',
    deslizar: 'Deslizá →',
  },

  {
    layout: 'grafico',
    fondo: 'claro',
    titulo: 'La brecha, en un gráfico',
    barras: [
      { etiqueta: 'Mano de obra', valor: 38, mostrar: '+38%' },
      { etiqueta: 'Materiales', valor: 22.5, mostrar: '+22,5%', secundario: true },
    ],
    escala: 45, // tope del eje, en las mismas unidades que `valor`
    remate: 'Son <strong>15,5 puntos</strong> de diferencia entre las dos variables que más pesan en tu presupuesto.',
  },

  {
    layout: 'declaracion',
    fondo: 'claro',
    kicker: 'Qué significa',
    texto: 'Planificar una obra hoy es trabajar con dos variables que se mueven a distinta velocidad.',
    destacado: 'Y hay una tercera: el componente dolarizado de algunos materiales.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
    kicker: 'Una salida posible',
    texto: 'Comprar anticipado en pesos puede funcionar como cobertura.',
    destacado: 'Siempre que la inflación le gane a la devaluación esperada.',
  },

  {
    layout: 'lista',
    fondo: 'claro',
    titulo: 'En Sanyser trabajamos con',
    items: [
      'Acuerdos directos de fábrica',
      'Stock real, verificable',
      'Precios competitivos',
    ],
    remate: 'Para que presupuestes con datos concretos, no con incertidumbre.',
  },

  {
    layout: 'cierre',
    fondo: 'naranja',
    titulo: 'Hablemos de tu próxima etapa de obra',
    cta: 'Comentá <strong>OBRA</strong> y te escribimos por privado.',
    web: 'sanyser.com.ar',
  },
];
