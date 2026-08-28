/**
 * Carrusel 1 — Septiembre 2026
 * Contexto de mercado: cuanto subio la obra en lo que va del ano.
 *
 * PORTADA NAVY + FOTO PROPIA: primer tratamiento del ciclo (ver README).
 * El ciclo de agosto cerro en E (navy plano, carrusel 1 de agosto), asi que
 * vuelve a arrancar en A. La ultima tapa publicada es la del carrusel 7
 * (naranja + foto), asi que tampoco se repite con la anterior.
 *
 * FOTO: `bg/descarga-canos.jpg`, de "Crudos Agosto 2026" del Drive del
 * cliente. Descarga de canos en el deposito, con gente trabajando. Es propia
 * y muestra material y logistica, que es de lo que habla el carrusel.
 *
 * ---------------------------------------------------------------------------
 * NUMEROS — VERIFICADOS
 *
 * Los dos que traia el guion (17% general y 13,2% materiales) salen de
 * CAMARCO (Camara Argentina de la Construccion), acumulado enero-julio 2026,
 * CABA, publicados por El Cronista el 25/08/2026:
 *
 *   Costo general .... +17,0 %   (INDEC GBA da +19,2 %)
 *   Materiales ....... +13,2 %   (INDEC GBA da +13,3 %)
 *   Mano de obra ..... +24,8 %   (INDEC GBA da +23,9 %)
 *
 * https://www.cronista.com/negocios/el-mapa-del-costo-de-la-construccion-que-pesa-mas-hoy-los-materiales-o-la-mano-de-obra/
 *
 * El guion decia "mano de obra es el componente que mas empuja" SIN numero.
 * Le puse el 24,8 % de la misma fuente: sin la cifra al lado del 13,2 % la
 * comparacion no se ve, y la comparacion es el carrusel entero.
 *
 * OJO — TODAS las cifras de aca son ACUMULADO DEL ANO segun CAMARCO. El
 * carrusel 3 de agosto (todavia sin publicar) usa INTERANUAL segun INDEC:
 * mano de obra +38,7 %, materiales +24,7 %. Los dos estan bien, pero en el
 * mismo feed se leen como una contradiccion. Hay que decidir cual va antes
 * de publicar cualquiera de los dos.
 *
 * ---------------------------------------------------------------------------
 * DOS SLIDES BLOQUEADAS
 *
 * Las slides 3 y 4 salen con el cartel amarillo a proposito: el guion las
 * trae sin fuente y no estan en el articulo que respalda los numeros.
 *
 *  - Slide 3: la cita de Manuel Valdes (Criba). Es una persona real con
 *    nombre y cargo. Sin saber de donde sale, no se publica.
 *  - Slide 4: "stock de insumos importados y capacidad ociosa en planta" es
 *    una afirmacion sobre el mercado, no una opinion. Necesita respaldo.
 *
 * Cuando aparezcan las fuentes, se reemplaza `fuentePendiente` por `fuente`.
 */

export const meta = {
  slug: '2026-09-carrusel-01',
  titulo: 'Contexto de mercado — cuánto subió la obra en 2026',
};

const FUENTE = 'Fuente: CAMARCO, costo de la construcción en CABA. Acumulado enero–julio 2026.';

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
    layout: 'declaracion',
    fondo: 'navy',
    kicker: 'Cómo lo leen en el sector',
    texto: '"La prioridad es planificar con prudencia y asegurar respaldo contractual antes de iniciar nuevas etapas."',
    destacado: 'Manuel Valdés, director comercial de Criba.',
    fuentePendiente: 'FALTA FUENTE: de dónde sale esta cita. Sin eso no se publica.',
  },

  {
    layout: 'declaracion',
    fondo: 'claro',
    kicker: 'Por qué no se dispara más',
    texto: 'Hay stock de insumos importados y capacidad ociosa en planta.',
    destacado: 'Eso viene conteniendo los precios.',
    fuentePendiente: 'FALTA FUENTE: stock de importados y capacidad ociosa en planta.',
  },

  {
    layout: 'declaracion',
    fondo: 'navy',
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
