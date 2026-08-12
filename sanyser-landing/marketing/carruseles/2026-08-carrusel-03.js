/**
 * Carrusel 3 — Agosto 2026
 * Costos de construcción: mano de obra vs. materiales.
 *
 * DATOS VERIFICADOS contra el informe oficial:
 * INDEC, Índice del costo de la construcción en el Gran Buenos Aires (ICC),
 * Junio de 2026 (publicado el 17/07/2026), Cuadro 1 — variación respecto al
 * mismo mes del año anterior:
 *
 *   Nivel general ..... 32,1 %
 *   Materiales ........ 24,7 %
 *   Mano de obra ...... 38,7 %
 *   Gastos generales .. 33,6 %
 *
 * https://www.indec.gob.ar/uploads/informesdeprensa/icc_07_266A21F0AB6D.pdf
 *
 * El carrusel publicado decía "+38 %" y "+22,5 %". El primero redondea bien;
 * el segundo no coincide con ninguna cifra del informe (materiales fue 24,7 %).
 */

export const meta = {
  slug: '2026-08-carrusel-03',
  titulo: 'Costos de construcción — ICC junio 2026',
};

const FUENTE = 'Fuente: INDEC, Índice del costo de la construcción (GBA), junio 2026. Variación interanual.';

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    kicker: 'Costos de construcción · Junio 2026',
    titulo: 'Mano de obra y materiales ya no suben al mismo ritmo',
    stats: [
      { valor: '+38,7%', etiqueta: 'Mano de obra' },
      { valor: '+24,7%', etiqueta: 'Materiales', secundario: true },
    ],
    fuente: FUENTE,
    deslizar: 'Deslizá →',
  },

  {
    layout: 'grafico',
    fondo: 'claro',
    titulo: 'La brecha, en un gráfico',
    barras: [
      { etiqueta: 'Mano de obra', valor: 38.7, mostrar: '+38,7%' },
      { etiqueta: 'Materiales', valor: 24.7, mostrar: '+24,7%', secundario: true },
    ],
    escala: 45, // tope del eje, en las mismas unidades que `valor`
    remate: 'Son <strong>14 puntos</strong> de diferencia entre las dos variables que más pesan en tu presupuesto.',
    fuente: FUENTE,
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
    foto: 'bg/obra3.jpeg',
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
    fondo: 'navy',
    titulo: 'Hablemos de tu próxima etapa de obra',
    cta: 'Pasanos tu listado y te devolvemos <strong>precios y stock real</strong>.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
