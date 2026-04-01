import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PipeBackground from '../PipeBackground';
import bg1 from '../../assets/bg/2025-11-29 (1).webp';
import bg2 from '../../assets/bg/2025-11-29 (2).webp';
import bg3 from '../../assets/bg/2025-11-29 (4).webp';
import bg4 from '../../assets/bg/2025-11-29 (6).webp';
import plumbing from '../../assets/bg/plumbing-iwn79cewneas3un5.jpg';

function PrismDots() {
  return (
    <div
      aria-hidden="true"
      className="prism-dots absolute inset-0 pointer-events-none z-[1]"
    />
  );
}

const WHATSAPP_NUMBER = '5491171255054';
const WHATSAPP_PRESUPUESTO = 'Hola, quiero pedir un presupuesto de materiales sanitarios.';

export default function Hero() {
  const eyebrowRef  = useRef(null);
  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);
  const ctasRef     = useRef(null);
  const imagesRef   = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(eyebrowRef.current, { autoAlpha: 0, y: 20, duration: 0.6 })
        .from(headingRef.current,  { autoAlpha: 0, y: 44 }, '-=0.2')
        // Images stagger in from below alongside the heading (same start time via '<')
        .from(imagesRef.current.children, {
          autoAlpha: 0, y: 40, scale: 0.96,
          stagger: { each: 0.13, from: 'start' },
          duration: 0.9,
        }, '<')
        .from(subtitleRef.current, { autoAlpha: 0, y: 24 },          '-=0.35')
        .from(ctasRef.current,    { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.25');

      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#0F1E37]"
    >
      {/* Imagen plumbing de fondo */}
      <img
        src={plumbing}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay navy para tonificar y dar legibilidad */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundColor: 'rgba(15, 30, 55, 0.95)' }} />

      {/* Pipe network animation — behind content, above overlay */}
      <PipeBackground />

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-8 relative z-[3] grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-8">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="inline-block px-4 py-1 rounded-full bg-primary-orange/20 border border-primary-orange/30 text-orange-200 text-sm font-bold tracking-widest uppercase font-headline">
            Líderes en Suministros Sanitarios
          </div>

          {/* Título */}
          <h1 ref={headingRef} className="text-5xl sm:text-6xl md:text-8xl font-black font-headline text-white leading-[0.9] tracking-wide">
            Sanitarios para{' '}
            <br />
            <span className="text-primary-orange">tus obras.</span>
          </h1>

          {/* Subtítulo */}
          <p ref={subtitleRef} className="text-xl text-slate-300 max-w-lg font-light leading-relaxed">
            Sanitarios para tus obras, servicios que las potencian. Proveemos
            soluciones integrales de alta ingeniería para el mercado de la
            construcción en Argentina.
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="flex flex-wrap gap-4 pt-4">
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

        {/* Collage visible solo en desktop */}
        <div ref={imagesRef} className="hidden md:grid grid-cols-2 gap-3 h-[520px]">
          <img src={bg1} alt="Camión de entrega Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg2} alt="Showroom Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg3} alt="Depósito Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
          <img src={bg4} alt="Local Sanyser" loading="eager" className="w-full h-full object-cover rounded-2xl shadow-2xl ring-1 ring-white/10" />
        </div>

      </div>
    </section>
  );
}
