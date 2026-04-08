import { marcas } from '../../data/marcas';

// Carga todos los logos de la carpeta con Vite — eager:true los resuelve en build time
const logoFiles = import.meta.glob(
  '../../assets/marcasLogos/*.png',
  { eager: true }
);

// Resuelve el src del logo dado el nombre de archivo; null si no existe
function getLogoSrc(filename) {
  if (!filename) return null;
  const key = `../../assets/marcasLogos/${filename}`;
  return logoFiles[key]?.default ?? null;
}

// Dos filas con distribución par/impar para ritmos visuales distintos
const row1 = marcas.filter((_, i) => i % 2 === 0);  // índices 0,2,4… → 13 marcas
const row2 = marcas.filter((_, i) => i % 2 !== 0);  // índices 1,3,5… → 12 marcas

function MarcaBadge({ marca }) {
  const src = getLogoSrc(marca.logo);

  const inner = src ? (
    <img
      src={src}
      alt={marca.nombre}
      loading="lazy"
      className="w-full h-full object-contain transition-transform duration-300 group-hover/badge:scale-105"
    />
  ) : (
    /* Fallback texto para marcas sin logo todavía */
    <span className="text-slate-600 group-hover/badge:text-primary-navy font-headline font-bold text-xs uppercase tracking-wider text-center leading-tight transition-colors duration-300">
      {marca.nombre}
    </span>
  );

  const className = "group/badge flex-shrink-0 flex items-center justify-center w-36 h-20 sm:w-44 sm:h-24 transition-all duration-300 p-3 sm:p-4 overflow-hidden";

  return marca.href ? (
    <a href={marca.href} target="_blank" rel="noopener noreferrer" className={className} title={marca.nombre}>
      {inner}
    </a>
  ) : (
    <div className={`${className} cursor-default`}>
      {inner}
    </div>
  );
}

function MarqueeRow({ items, reverse = false }) {
  // Exactamente 2 copias: la animación va de 0 a -50% (= un set completo).
  // Al reiniciarse vuelve a 0, que visualmente es idéntico al punto donde terminó → loop perfecto sin salto.
  const track = [...items, ...items];

  return (
    <div className="marquee-row overflow-hidden marquee-fade">
      <div className={reverse ? 'marquee-track-reverse' : 'marquee-track'}>
        {track.map((marca, i) => (
          <MarcaBadge key={`${marca.id}-${i}`} marca={marca} />
        ))}
      </div>
    </div>
  );
}

export default function Marcas() {
  return (
    <section id="marcas" className="py-20 bg-white overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-4 sm:px-8 mb-12 text-center">
        <p className="text-primary-orange font-bold uppercase tracking-[0.3em] text-2xl font-headline mb-3">
          Aliados Estratégicos
        </p>
        <h2 className="text-4xl md:text-5xl font-black font-headline text-primary-navy tracking-wide">
          25+ marcas líderes del mercado
        </h2>
        <p className="text-slate-500 mt-3 max-w-xl mx-auto text-base">
          Distribuidores oficiales de los fabricantes más reconocidos del rubro sanitario e industrial.
        </p>
      </div>

      {/* <div className="border-t border-slate-200" /> */}

      {/* Filas del carousel — velocidades distintas para efecto orgánico */}
      <div className="bg-white py-10 space-y-5">
        <MarqueeRow items={row1} reverse={false} />
        <MarqueeRow items={row2} reverse={true} />
      </div>

      {/* <div className="border-b border-slate-200" /> */}

    </section>
  );
}
