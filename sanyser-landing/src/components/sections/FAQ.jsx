import { useEffect, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import AccordionItem from '../ui/AccordionItem';
import { faq } from '../../data/faq';

export default function FAQ() {
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
    <section id="faq" className="py-20 md:py-28 bg-gray-light" ref={sectionRef}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <SectionTitle
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Respuestas rápidas a las consultas más comunes."
          />
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={item.id}
              className={`animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 6)}`}
            >
              <AccordionItem
                pregunta={item.pregunta}
                respuesta={item.respuesta}
                defaultOpen={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
