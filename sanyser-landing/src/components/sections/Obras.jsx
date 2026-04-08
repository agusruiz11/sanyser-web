import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import obra1 from '../../assets/bg/obra1.jpeg';
import obra2 from '../../assets/bg/obra2.jpeg';
import obra3 from '../../assets/bg/obra3.jpeg';
import obra4 from '../../assets/bg/obra4.jpeg';

const SLIDES = [
  { src: obra1, alt: 'Obra con materiales Sanyser' },
  { src: obra2, alt: 'Instalación sanitaria en obra' },
  { src: obra3, alt: 'Gran escala con Sanyser' },
  { src: obra4, alt: 'Proyecto de obra Sanyser' },
];

const SERVICIOS = [
  {
    id: 1,
    titulo: 'Documentación ejecutiva',
    detalle: 'Planos, detalles constructivos, memorias de cálculo y toda la documentación técnica que tu proyecto requiere.',
  },
  {
    id: 2,
    titulo: 'Asesoramiento técnico especializado',
    detalle: 'Selección de sistemas de calefaccionamiento, bombeo y criterios de diseño para optimizar tu instalación.',
  },
  {
    id: 3,
    titulo: 'Entrega ágil de materiales',
    detalle: 'Procesamos tus pedidos y los entregamos con la velocidad que cada etapa de obra demanda.',
  },
  {
    id: 4,
    titulo: 'Acompañamiento en obra',
    detalle: 'Estamos con vos durante toda la ejecución, respondiendo consultas para que el proyecto se concrete tal como fue planificado.',
  },
  {
    id: 5,
    titulo: 'Los mejores precios del mercado',
    detalle: 'Accedé a precios competitivos respaldados por acuerdos directos con los fabricantes líderes.',
  },
];

export default function Obras() {
  const imagesRef  = useRef(null);   // solo las <img>
  const sectionRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    // --- Slideshow — solo los hijos <img> del wrapper dedicado ---
    const slides = Array.from(imagesRef.current.querySelectorAll('img'));

    gsap.set(slides, { xPercent: 100 });
    gsap.set(slides[0], { xPercent: 0 });

    let current = 0;
    const interval = setInterval(() => {
      const next = (current + 1) % slides.length;
      gsap.to(slides[current], { xPercent: -100, duration: 0.9, ease: 'power2.inOut' });
      gsap.fromTo(slides[next], { xPercent: 100 }, { xPercent: 0, duration: 0.9, ease: 'power2.inOut' });
      current = next;
      setActiveIdx(next);
    }, 3800);

    // --- Animaciones de entrada al hacer scroll ---
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="obras" className="py-24 bg-primary-navy overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-8">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Columna izquierda: texto ── */}
          <div className="space-y-10 animate-on-scroll">

            {/* Eyebrow
            <p className="text-primary-orange font-bold uppercase tracking-[0.3em] text-sm font-headline">
              Grandes Proyectos
            </p> */}

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-black font-headline text-white leading-tight tracking-wide">
              Atendemos obras de gran escala
              <br />
              <span className="text-primary-orange">brindando todo el soporte técnico necesario.</span>
            </h2>

            {/* Lista de servicios */}
            <ul className="space-y-6">
              {SERVICIOS.map((s) => (
                <li key={s.id} className="flex gap-4 items-start">
                  {/* Checkmark naranja */}
                  <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-orange flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      className="w-3 h-3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-white font-bold font-headline text-xl tracking-wider">{s.titulo}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mt-0.5">{s.detalle}</p>
                  </div>
                </li>
              ))}
            </ul>

          </div>

          {/* ── Columna derecha: slideshow ── */}
          <div className="animate-on-scroll animate-on-scroll-delay-2">
            <div className="relative h-[420px] md:h-[560px] overflow-hidden shadow-2xl ring-1 ring-white/10">

              {/* Solo imágenes aquí — GSAP opera únicamente sobre este wrapper */}
              <div ref={imagesRef} className="absolute inset-0">
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

              {/* Gradiente inferior */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/60 to-transparent pointer-events-none" />

              {/* Dots reactivos */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 pointer-events-none">
                {SLIDES.map((_, i) => (
                  <span
                    key={i}
                    className={`block w-2 h-2 rounded-full transition-colors duration-300 ${i === activeIdx ? 'bg-primary-orange' : 'bg-white/40'}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
