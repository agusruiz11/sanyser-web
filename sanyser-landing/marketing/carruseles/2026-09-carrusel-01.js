/**
 * Carrusel 1 — Septiembre 2026
 * Contexto de mercado: cuanto subio la obra en lo que va del ano.
 *
 * PORTADA NAVY + FOTO PROPIA: primer tratamiento del ciclo (ver README).
 * El ciclo de agosto cerro en E (navy plano, carrusel 1 de agosto), asi que
 * vuelve a arrancar en A.
 *
 * FOTO: `bg/descarga-canos.jpg`, de "Crudos Agosto 2026" del Drive del
 * cliente. Descarga de canos en el deposito, con gente trabajando. Es propia
 * y muestra material y logistica, que es de lo que habla el carrusel.
 *
 * ---------------------------------------------------------------------------
 * FUENTE UNICA — LA NACION, 24/08/2026
 *
 * "El costo de construccion sube menos que la inflacion pero acelera mas
 * fuerte que en 2025", sobre el Indicador Camarco.
 * https://www.lanacion.com.ar/propiedades/construccion-y-diseno/el-costo-de-construccion-sube-menos-que-la-inflacion-pero-acelera-mas-fuerte-que-en-2025-nid24082026/
 *
 * Las tres cifras del carrusel salen de ahi, verificadas contra el articulo:
 *
 *   Indicador general, acumulado enero-julio 2026 .... +17,0 %
 *   Mano de obra, acumulado .......................... +24,8 %
 *   Materiales, acumulado ............................ +13,2 %
 *
 * El guion decia "mano de obra es el componente que mas empuja" SIN numero.
 * Le puse el 24,8 % de la misma fuente: sin la cifra al lado del 13,2 % la
 * comparacion no se ve, y la comparacion es el carrusel entero.
 *
 * POR QUE CAMARCO Y NO INDEC (decidido con el cliente, 31-08-2026): Camarco
 * mide el ano vigente, INDEC mide interanual (julio 2025 a julio 2026). Para
 * el que esta comprando ahora, el acumulado del ano es el numero util. El
 * carrusel 3 de agosto, que usaba INDEC interanual, quedo descartado y nunca
 * se publico, asi que ya no hay dos indices conviviendo en el feed.
 *
 * ---------------------------------------------------------------------------
 * DOS SLIDES DEL GUION ORIGINAL QUE NO SOBREVIVIERON
 *
 * 1. LA CITA DE "MANUEL VALDES, DIRECTOR COMERCIAL DE CRIBA". No esta en el
 *    articulo. Valdes existe y es de Criba, pero esa frase ("planificar con
 *    prudencia y asegurar respaldo contractual...") no aparece por ningun
 *    lado en la fuente. Poner palabras en la boca de una persona real e
 *    identificable, sin tener de donde salieron, no se hace.
 *
 *    En su lugar va la cita que el articulo SI trae, de Santiago Tarasido,
 *    CEO de Criba, copiada textual. Dice algo distinto y mejor para la pieza:
 *    que el costo dejo de crecer y que ahora la discusion es de eficiencia.
 *
 * 2. "HAY STOCK DE INSUMOS IMPORTADOS Y CAPACIDAD OCIOSA EN PLANTA". Tampoco
 *    esta en el articulo. Era la placa de "por que no se dispara mas", y esa
 *    funcion la cumple mejor la cita de Tarasido, que si tiene respaldo.
 *    La slide se elimino: el carrusel pasa de 6 a 5 placas.
 */

export const meta = {
  slug: '2026-09-carrusel-01',
  titulo: 'Contexto de mercado — cuánto subió la obra en 2026',
};

const FUENTE = 'Fuente: Indicador Camarco. Acumulado enero–julio 2026, vía La Nación (24/08/2026).';

export const slides = [
  {
    layout: 'portada',
    fondo: 'navy',
    foto: 'bg/descarga-canos.jpg',
    foco: 'center 35%', // sube el recorte: dejo los caños y la gente arriba, libre el pie
    anclaje: 'abajo',
    kicker: 'Contexto de mercado',
    titulo: 'La obra subió <strong>17%</strong> en siete meses',
    bajada: '¿Tu presupuesto lo tiene contemplado?',
    fuente: FUENTE,
    deslizar: 'Deslizá →',
  },

  {
    layout: 'grafico',
    fondo: 'claro',
    titulo: 'Qué empuja y qué no',
    barras: [
      { etiqueta: 'Mano de obra', valor: 24.8, mostrar: '+24,8%' },
      { etiqueta: 'Materiales', valor: 13.2, mostrar: '+13,2%', secundario: true },
    ],
    escala: 30, // tope del eje, en las mismas unidades que `valor`
    remate: 'La mano de obra sube <strong>casi el doble</strong> que los materiales. Si tu presupuesto los trata igual, el desvío ya está adentro.',
    fuente: FUENTE,
  },

  {
    // Cita textual del articulo. No se recorta ni se retoca.
    layout: 'declaracion',
    fondo: 'navy',
    kicker: 'Cómo lo leen en el sector',
    texto: '"Es un costo que ya ha dejado de crecer de alguna manera y hay que empezar a buscarle la vuelta desde cada sector y empresa para apuntar a la eficiencia."',
    destacado: 'Santiago Tarasido, CEO de Criba.',
    fuente: 'La Nación, 24 de agosto de 2026.',
  },

  {
    layout: 'declaracion',
    fondo: 'claro',
    kicker: 'Lo que sí podés controlar',
    texto: 'El índice no lo manejás.',
    destacado: 'La previsibilidad sí: se construye sabiendo con qué proveedor no te vas a llevar sorpresas.',
  },

  {
    layout: 'cierre',
    fondo: 'navy',
    titulo: 'Hablemos de tu próxima etapa de obra',
    cta: 'Contanos en qué estás y te devolvemos <strong>precios y stock real</strong>, para presupuestar sin sorpresas.',
    canal: 'Escribinos por mensaje directo',
    canalAlt: 'o WhatsApp 11 2893-3560',
    web: 'sanyser.com.ar',
  },
];
