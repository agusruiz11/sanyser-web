import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PipeBackground from '../PipeBackground';
import bg1 from '../../assets/bg/2025-11-29 (1).webp';
import bg2 from '../../assets/bg/2025-11-29 (2).webp';
import bg3 from '../../assets/bg/2025-11-29 (3).webp';
import bg4 from '../../assets/bg/2025-11-29 (6).webp';
import bg5 from '../../assets/bg/obra1.jpeg';
import bg6 from '../../assets/bg/obra3.jpeg';
import plumbing from '../../assets/bg/plumbing-iwn79cewneas3un5.jpg';

const SLIDES = [
  { src: bg1, alt: 'Camión de entrega Sanyser' },
  { src: bg2, alt: 'Showroom Sanyser' },
  { src: bg5, alt: 'Obra con materiales Sanyser' },
  { src: bg3, alt: 'Depósito Sanyser' },
  { src: bg4, alt: 'Local Sanyser' },
  { src: bg6, alt: 'Obra con materiales Sanyser' },
];

const WHATSAPP_NUMBER = '5491171255054';
const WHATSAPP_PRESUPUESTO = 'Hola, quiero pedir un presupuesto de materiales sanitarios.';

export default function Hero() {
  const headingRef  = useRef(null);
  const subtitleRef = useRef(null);
  const ctasRef     = useRef(null);
  const slideshowRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const slides = Array.from(slideshowRef.current.children);

      // Posicionar: primera visible, el resto fuera a la derecha
      gsap.set(slides, { xPercent: 100 });
      gsap.set(slides[0], { xPercent: 0 });

      // Animación de entrada general
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out', duration: 0.8 },
      });

      tl.from(headingRef.current,   { autoAlpha: 0, y: 44 })
        .from(slideshowRef.current, { autoAlpha: 0, x: 50, duration: 0.9 }, '<')
        .from(subtitleRef.current,  { autoAlpha: 0, y: 24 }, '-=0.35')
        .from(ctasRef.current,      { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.25');

      // Slideshow: desliza una foto cada 3.5s
      let current = 0;
      const interval = setInterval(() => {
        const next = (current + 1) % slides.length;

        gsap.to(slides[current], {
          xPercent: -100,
          duration: 0.85,
          ease: 'power2.inOut',
        });
        gsap.fromTo(
          slides[next],
          { xPercent: 100 },
          { xPercent: 0, duration: 0.85, ease: 'power2.inOut' }
        );

        current = next;
      }, 3500);

      return () => {
        tl.kill();
        clearInterval(interval);
      };
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

      {/* Overlay navy */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ backgroundColor: 'rgba(15, 30, 55, 0.95)' }} />

      {/* Pipe network animation */}
      <PipeBackground />

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-8 relative z-[3] grid md:grid-cols-2 gap-12 items-center py-12">
        <div className="space-y-8">
          {/* Título */}
          <h1 ref={headingRef} className="text-7xl sm:text-6xl md:text-7xl font-black font-headline text-white leading-[0.9] tracking-wide">
            Sanitarios para tus obras,{' '}
            <br />
            <span className="text-primary-orange">servicios que las potencian.</span>
          </h1>

          {/* Subtítulo */}
          <p ref={subtitleRef} className="text-xl text-slate-300 max-w-lg font-light leading-relaxed">
            Proveemos
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

        {/* Slideshow visible solo en desktop */}
        <div
          ref={slideshowRef}
          className="hidden md:block relative h-[520px] overflow-hidden shadow-2xl ring-1 ring-white/10"
        >
          {SLIDES.map((slide, i) => (
            <img
              key={i}
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
