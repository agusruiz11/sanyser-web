import { useEffect, useRef } from 'react';
import { nosotros } from '../../data/nosotros';

export default function Nosotros() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" className="py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* Columna izquierda — imagen */}
          <div className="relative animate-on-scroll">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/*
                Reemplazar este div por la imagen real del equipo/depósito:
                <img src="/nosotros-equipo.jpg" alt="Equipo SANYSER" className="w-full h-full object-cover" />
              */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)',
                }}
              >
                <div className="text-center opacity-30">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8" className="w-32 h-32 mx-auto mb-4">
                    <rect x="3" y="9" width="18" height="13" rx="1"/>
                    <path d="M8 22V12h8v10M1 9l11-7 11 7"/>
                  </svg>
                  <p className="text-white text-sm font-medium">Foto del depósito / equipo</p>
                  <p className="text-white/60 text-xs">(reemplazar con imagen real)</p>
                </div>
              </div>
            </div>

            {/* Tarjeta flotante */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-xs border-t-4 border-primary-orange">
              <p className="text-slate-500 font-medium italic text-sm leading-relaxed">
                "Comprometidos con la excelencia operativa y la entrega inmediata en cada punto del país."
              </p>
            </div>
          </div>

          {/* Columna derecha — texto + stats */}
          <div className="space-y-8 animate-on-scroll animate-on-scroll-delay-2">
            <h2 className="text-5xl font-black font-headline text-slate-900 tracking-tight">
              Experiencia que construye confianza
            </h2>

            <p className="text-lg text-slate-500 leading-relaxed">
              {nosotros.descripcion}
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {nosotros.stats.map((stat) => (
                <div
                  key={stat.id}
                  className={`border-l-4 pl-6 py-2 ${
                    stat.acento === 'orange'
                      ? 'border-primary-orange'
                      : 'border-slate-400'
                  }`}
                >
                  <div className="text-4xl font-black font-headline text-slate-900">
                    {stat.valor}
                  </div>
                  <div className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-1">
                    {stat.etiqueta}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
