import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../../assets/LOGO.png';

// Social icon SVGs inline (lucide-react no incluye íconos de RRSS en esta versión)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const quickLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Servicios', href: '#servicios' },
  // { label: 'Obras', href: '#obras' },
  { label: 'Contacto', href: '#presupuesto' },
];

const serviceLinks = [
  'Asesoramiento Técnico',
  'Proyectos Sanitarios',
  'Fabricación de Colectores',
  'Capacitación Profesional',
  'Logística Inmediata',
  'Asistencia a Obra',
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + descripción */}
          <div className="lg:col-span-1">
            <div className="mb-4 inline-block bg-white rounded-xl px-4 py-2">
              <img src={logo} alt="Sanyser" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Distribuidora especializada en materiales sanitarios para la construcción.
              Más de 25 marcas líderes, ingeniería propia y logística inmediata en todo el país.
            </p>
            <div className="flex items-center gap-4">
              {/* <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-orange transition-colors duration-300 flex items-center justify-center"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a> */}
              <a
                href="https://www.instagram.com/sanyser.sanitarios/"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-orange transition-colors duration-300 flex items-center justify-center"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/110816221/admin/dashboard/"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary-orange transition-colors duration-300 flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          {/* Col 2: Links rápidos */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 uppercase tracking-wide">
              Links rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/60 hover:text-primary-orange transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 uppercase tracking-wide">
              Servicios
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-white/60 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="font-bold text-white text-base mb-5 uppercase tracking-wide">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Av. Santa Fe 1045<br />
                  Lomas de Zamora, Buenos Aires.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  Av. San Juan 4156<br />
                  CABA.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-orange flex-shrink-0" />
                <a href="tel:+541171255054" className="text-white/60 hover:text-primary-orange transition-colors text-sm">
                  +54 9 11 7125-5054
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-orange flex-shrink-0" />
                <a href="tel:+541128933560" className="text-white/60 hover:text-primary-orange transition-colors text-sm">
                  +54 9 11 2893-3560
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-orange flex-shrink-0" />
                <a href="mailto:obrassanyser@gmail.com" className="text-white/60 hover:text-primary-orange transition-colors text-sm">
                  obrassanyser@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © 2026 SANYSER. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-xs">
            Lomas de Zamora, Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </footer>
  );
}
