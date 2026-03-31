import { useEffect, useRef } from 'react';
import {
  Zap, GitBranch, Droplet, Flame, Database, Settings,
  ChevronRight, Download,
} from 'lucide-react';
import { productos } from '../../data/productos';

const WHATSAPP_NUMBER = '5491171255054';

const iconMap = { Zap, GitBranch, Droplet, Flame, Database, Settings };

// SVG fantasma grande para el fondo de cada card (reemplazar con <img> cuando el cliente entregue fotos)
function GhostIcon({ Icon, color }) {
  return (
    <div
      className="absolute right-0 bottom-0 w-40 h-40 opacity-[0.07] translate-x-4 translate-y-4 group-hover:scale-110 transition-transform duration-500 pointer-events-none"
      style={{ color }}
    >
      <Icon size={160} strokeWidth={0.8} />
    </div>
  );
}

export default function Productos() {
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
    <section id="productos" className="py-24 bg-gray-50 blueprint-grid" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-16 animate-on-scroll">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black font-headline text-slate-900">
              Nuestro Catálogo
            </h2>
            <p className="text-slate-500 mt-2">
              Soluciones certificadas para cada etapa de la obra.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quiero recibir el catálogo completo de SANYSER.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex text-primary-orange font-bold items-center gap-2 group hover:text-orange-600 transition-colors"
          >
            Descargar catálogo completo
            <Download
              size={18}
              className="group-hover:translate-y-0.5 transition-transform duration-200"
            />
          </a>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.map((producto, i) => {
            const IconComponent = iconMap[producto.icono] || Settings;
            const isOrange = producto.acento === 'orange';
            const iconColor = isOrange ? '#FF5500' : '#48607d';
            const hoverBorder = isOrange
              ? 'hover:border-primary-orange'
              : 'hover:border-slate-500';

            return (
              <div
                key={producto.id}
                className={`group relative overflow-hidden rounded-2xl bg-white p-8 min-h-[300px] flex flex-col justify-between hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent ${hoverBorder} animate-on-scroll animate-on-scroll-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="z-10">
                  {/* Ícono */}
                  <IconComponent
                    size={40}
                    className="mb-4"
                    style={{ color: iconColor }}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-2xl font-bold font-headline text-slate-900">
                    {producto.nombre}
                  </h3>
                  <p className="text-slate-500 mt-2 text-sm leading-relaxed">
                    {producto.descripcion}
                  </p>
                </div>

                {/* Link consultar */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(producto.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-slate-900 font-bold flex items-center gap-1 hover:gap-2 transition-all duration-200 w-fit"
                >
                  Ver más
                  <ChevronRight size={18} />
                </a>

                {/* Ícono fantasma de fondo — reemplazar con <img> del producto cuando el cliente entregue fotos */}
                <GhostIcon Icon={IconComponent} color={iconColor} />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
