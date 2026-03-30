const WHATSAPP_NUMBER = '5491171255054';
const WHATSAPP_PRESUPUESTO = 'Hola, quiero pedir un presupuesto de materiales sanitarios.';

export default function Hero() {
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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900"
    >
      {/* Imagen de fondo placeholder + overlay */}
      <div className="absolute inset-0 z-0">
        {/*
          Reemplazar este div por una <img> cuando el cliente provea la foto de obra:
          <img src="/hero-obra.jpg" alt="Obra de construcción" className="w-full h-full object-cover opacity-40" />
        */}
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%23111827'/%3E%3Cline x1='0' y1='30' x2='60' y2='30' stroke='%23374151' stroke-width='0.5'/%3E%3Cline x1='30' y1='0' x2='30' y2='60' stroke='%23374151' stroke-width='0.5'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Eyebrow */}
          <div className="inline-block px-4 py-1 rounded-full bg-primary-orange/20 border border-primary-orange/30 text-orange-200 text-sm font-bold tracking-widest uppercase font-headline">
            Líderes en Suministros Sanitarios
          </div>

          {/* Título */}
          <h1 className="text-6xl md:text-8xl font-black font-headline text-white leading-[0.9] tracking-tighter">
            Sanitarios para{' '}
            <br />
            <span className="text-primary-orange">tus obras.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl text-slate-300 max-w-lg font-light leading-relaxed">
            Sanitarios para tus obras, servicios que las potencian. Proveemos
            soluciones integrales de alta ingeniería para el mercado de la
            construcción en Argentina.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PRESUPUESTO)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange text-white px-8 py-4 rounded-xl font-bold font-headline text-lg hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] transition-all flex items-center gap-2"
            >
              Pedí tu presupuesto
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button
              type="button"
              onClick={handleCatalogo}
              className="border border-slate-500 text-white px-8 py-4 rounded-xl font-bold font-headline text-lg hover:bg-white/10 transition-all"
            >
              Ver catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
