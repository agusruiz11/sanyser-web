import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { testimonios } from '../../data/testimonios';

export default function Testimonios() {
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
    <section id="testimonios" className="py-20 md:py-28 bg-gray-light" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <SectionTitle
            eyebrow="Clientes"
            title="Lo que dicen quienes trabajan con nosotros"
            subtitle="Profesionales y empresas que confían en SANYSER en cada obra."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col animate-on-scroll animate-on-scroll-delay-${i + 1}`}
            >
              {/* Estrellas */}
              {/* <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="text-primary-orange fill-primary-orange" />
                ))}
              </div> */}

              {/* Ícono de cita */}
              <Quote size={32} className="text-primary-orange/20 mb-3 -scale-x-100" />

              {/* Texto */}
              <p className="text-gray-600 leading-relaxed text-base flex-grow italic">
                "{t.texto}"
              </p>

              {/* Autor */}
              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full bg-primary-navy flex items-center justify-center flex-shrink-0"
                >
                  <span className="text-white font-bold text-sm">
                    {t.nombre.split(' ').slice(-1)[0][0]}
                    {t.nombre.split(' ').slice(-2)[0][0] || ''}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-primary-navy text-sm">{t.nombre}</div>
                  <div className="text-gray-500 text-xs">{t.rol}</div>
                  <div className="text-primary-orange text-xs font-semibold">{t.empresa}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
