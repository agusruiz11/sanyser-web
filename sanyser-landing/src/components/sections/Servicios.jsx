import { useEffect, useRef } from 'react';
import {
  MessageSquare,
  Ruler,
  Wrench,
  GraduationCap,
  Truck,
  HardHat,
  ArrowRight,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { servicios } from '../../data/servicios';

const iconMap = {
  MessageSquare,
  Ruler,
  Wrench,
  GraduationCap,
  Truck,
  HardHat,
};

const WHATSAPP_NUMBER = '5491171255054';

export default function Servicios() {
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
    <section
      id="servicios"
      className="py-20 md:py-28 bg-primary-navy"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <SectionTitle
            eyebrow="Lo que hacemos"
            title="Nuestros servicios"
            subtitle="Más allá de los materiales, aportamos conocimiento técnico y soluciones reales para cada etapa de tu proyecto."
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((servicio, i) => {
            const IconComponent = iconMap[servicio.icono] || MessageSquare;

            return (
              <div
                key={servicio.id}
                className={`group bg-white/10 hover:bg-white/15 border border-white/10 hover:border-primary-orange/50 rounded-2xl p-7 transition-all duration-300 animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 6)}`}
              >
                {/* Ícono */}
                <div className="w-14 h-14 rounded-xl bg-primary-orange/20 group-hover:bg-primary-orange transition-colors duration-300 flex items-center justify-center mb-5">
                  <IconComponent
                    size={28}
                    className="text-primary-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <h3 className="font-bold text-white text-lg mb-3">
                  {servicio.titulo}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  {servicio.descripcion}
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Hola, quiero más información sobre el servicio de ${servicio.titulo}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-orange hover:text-white font-semibold text-sm transition-colors duration-200 group/link"
                >
                  Más info
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
