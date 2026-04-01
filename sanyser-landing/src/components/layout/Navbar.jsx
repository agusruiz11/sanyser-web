import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import logo from '../../assets/LOGO.png';

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Obras', href: '#obras' },
  // { label: 'Contacto', href: '#presupuesto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-white/95'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <img src={logo} alt="Sanyser" className="h-10 md:h-12 w-auto object-contain" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 hover:text-primary-orange transition-colors duration-200 font-headline text-xl tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Button
                href="#presupuesto"
                onClick={(e) => handleNavClick(e, '#presupuesto')}
                size="md"
                className="hidden md:inline-flex font-headline tracking-widest text-[1.2rem]"
              >
                CONTACTO
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-slate-700 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <>
        {/* Overlay */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        />

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[min(288px,calc(100vw-40px))] bg-white z-50 md:hidden transform transition-transform duration-300 shadow-2xl ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <img src={logo} alt="Sanyser" className="h-9 w-auto object-contain" />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="text-slate-700 p-1 hover:text-primary-orange transition-colors"
              aria-label="Cerrar menú"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-primary-orange transition-colors duration-200 font-headline py-3 px-4 rounded-lg hover:bg-slate-50 text-xl tracking-wide"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-6">
              <Button
                href="#presupuesto"
                onClick={(e) => handleNavClick(e, '#presupuesto')}
                size="lg"
                className="w-full font-headline tracking-widest text-[1.2rem]"
              >
                CONTACTO
              </Button>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
