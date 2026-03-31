import bg1 from '../../assets/bg/2025-11-29 (1).webp';
import bg2 from '../../assets/bg/2025-11-29 (2).webp';
import bg3 from '../../assets/bg/2025-11-29 (4).webp';
import bg4 from '../../assets/bg/2025-11-29 (6).webp';

const WHATSAPP_NUMBER = '5491171255054';
const WHATSAPP_PRESUPUESTO = 'Hola, quiero pedir un presupuesto de materiales sanitarios.';

export default function Hero() {
  const handleCatalogo = () => {
    const target = document.querySelector('#productos');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Overlay degradado: asegura legibilidad del texto en desktop */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-slate-900 via-slate-900/85 to-slate-900/30 hidden md:block" />
      {/* Overlay sólido en mobile */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-slate-900/70 md:hidden" />

      {/* Fotos de fondo visibles en desktop como collage */}
      <div className="absolute inset-0 z-[-1] hidden md:grid grid-cols-2 grid-rows-2">
        <img src={bg1} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <img src={bg2} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <img src={bg3} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <img src={bg4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      {/* Una sola foto de fondo en mobile */}
      <div className="absolute inset-0 z-[-1] md:hidden">
        <img src={bg4} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-8">
          {/* Eyebrow */}
          <div className="inline-block px-4 py-1 rounded-full bg-primary-orange/20 border border-primary-orange/30 text-orange-200 text-sm font-bold tracking-widest uppercase font-headline">
            Líderes en Suministros Sanitarios
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-headline text-white leading-[0.9] tracking-wide">
            Sanitarios para{' '}
            <br />
            <span className="text-primary-orange">tus obras.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-slate-300 max-w-lg font-light leading-relaxed">
            Sanitarios para tus obras, servicios que las potencian. Proveemos
            soluciones integrales de alta ingeniería para el mercado de la
            construcción en Argentina.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PRESUPUESTO)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-headline text-base sm:text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all flex items-center gap-2"
            >
              Pedí tu presupuesto
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button
              type="button"
              onClick={handleCatalogo}
              className="border border-slate-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold font-headline text-base sm:text-lg hover:bg-white/10 transition-all"
            >
              Ver catálogo
            </button>
          </div>
        </div>

        {/* Collage visible solo en desktop — las fotos ya están en el fondo,
            acá mostramos el grid con bordes/sombra para dar profundidad */}
        <div className="hidden md:grid grid-cols-2 gap-3 h-[520px]">
          <img src={bg1} alt="Camión de entrega Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg2} alt="Showroom Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg3} alt="Depósito Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg4} alt="Local Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}
