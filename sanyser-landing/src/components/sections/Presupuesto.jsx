import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const tiposDeObra = [
  'Edificio residencial',
  'Casa unifamiliar',
  'Comercio / Industria',
  'Refacción',
  'Obra pública',
  'Otro',
];

const initialForm = {
  nombre: '',
  telefono: '',
  email: '',
  tipoObra: '',
  detalle: '',
};

export default function Presupuesto() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'El nombre es requerido.';
    if (!form.telefono.trim()) newErrors.telefono = 'El teléfono es requerido.';
    if (!form.email.trim()) {
      newErrors.email = 'El email es requerido.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Ingresá un email válido.';
    }
    if (!form.tipoObra) newErrors.tipoObra = 'Seleccioná el tipo de obra.';
    if (!form.detalle.trim()) newErrors.detalle = 'Describí brevemente lo que necesitás.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: conectar con endpoint de backend o servicio de formularios (ej: Formspree, EmailJS, API propia)
    // Ejemplo con fetch:
    // fetch('/api/presupuesto', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    console.log('Formulario enviado:', form);

    setSubmitted(true);
    setForm(initialForm);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl border bg-white text-gray-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-orange/50 focus:border-primary-orange transition-all duration-200 text-sm';
  const errorClass = 'border-red-400 bg-red-50';
  const normalClass = 'border-gray-200';

  return (
    <section id="presupuesto" className="py-20 md:py-28 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll">
          <SectionTitle
            eyebrow="Contacto"
            title="Pedí tu presupuesto"
            subtitle="Completá el formulario y te respondemos en menos de 24 horas."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Formulario */}
          <div className="animate-on-scroll animate-on-scroll-delay-1">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center p-12 bg-green-50 rounded-2xl border border-green-200 min-h-[400px]">
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-primary-navy mb-2">
                  ¡Consulta enviada!
                </h3>
                <p className="text-gray-500 mb-6">
                  Recibimos tu mensaje. Un asesor de SANYSER te va a contactar en menos de 24 horas hábiles.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline-dark" size="sm">
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-1.5">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Ej: Juan Pérez"
                    className={`${inputBase} ${errors.nombre ? errorClass : normalClass}`}
                  />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                </div>

                {/* Teléfono + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-1.5">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="Ej: 11 1234-5678"
                      className={`${inputBase} ${errors.telefono ? errorClass : normalClass}`}
                    />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-dark mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={`${inputBase} ${errors.email ? errorClass : normalClass}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Tipo de obra */}
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-1.5">
                    Tipo de obra *
                  </label>
                  <select
                    name="tipoObra"
                    value={form.tipoObra}
                    onChange={handleChange}
                    className={`${inputBase} ${errors.tipoObra ? errorClass : normalClass}`}
                  >
                    <option value="">Seleccioná una opción...</option>
                    {tiposDeObra.map((tipo) => (
                      <option key={tipo} value={tipo}>
                        {tipo}
                      </option>
                    ))}
                  </select>
                  {errors.tipoObra && <p className="text-red-500 text-xs mt-1">{errors.tipoObra}</p>}
                </div>

                {/* Detalle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-dark mb-1.5">
                    Detalle de lo que necesitás *
                  </label>
                  <textarea
                    name="detalle"
                    value={form.detalle}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describí brevemente los materiales o servicios que necesitás, el tamaño de la obra, cantidades estimadas, etc."
                    className={`${inputBase} resize-none ${errors.detalle ? errorClass : normalClass}`}
                  />
                  {errors.detalle && <p className="text-red-500 text-xs mt-1">{errors.detalle}</p>}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={18} />
                  Enviar consulta
                </Button>
              </form>
            )}
          </div>

          {/* Datos de contacto + mapa */}
          <div className="space-y-6 animate-on-scroll animate-on-scroll-delay-2">
            {/* Info destaque */}
            <div className="bg-primary-navy rounded-2xl p-7 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock size={24} className="text-primary-orange" />
                <div>
                  <div className="font-bold">Respondemos en menos de 24 hs</div>
                  <div className="text-white/60 text-sm">Lunes a viernes, 8:00 a 17:00 hs</div>
                </div>
              </div>
              <div className="h-px bg-white/10 my-4" />

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Dirección</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+Santa+Fe+1045,+Lomas+de+Zamora,+Buenos+Aires,+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary-orange text-sm transition-colors"
                    >
                      Av. Santa Fe 1045, Lomas de Zamora<br />Buenos Aires, Argentina
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-primary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Dirección</div>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Av.+San+Juan+4156,+Boedo,+CABA,+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-primary-orange text-sm transition-colors"
                    >
                      Av. San Juan 4156, Boedo<br />CABA, Argentina
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone size={20} className="text-primary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Teléfonos</div>
                    <a href="tel:+541171255054" className="text-white/70 hover:text-primary-orange text-sm block transition-colors">
                      +54 11 7125-5054
                    </a>
                    <a href="tel:+541128933560" className="text-white/70 hover:text-primary-orange text-sm block transition-colors">
                      +54 9 11 2893-3560
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail size={20} className="text-primary-orange mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-sm">Email</div>
                    <a href="mailto:obrassanyser@gmail.com" className="text-white/70 hover:text-primary-orange text-sm transition-colors">
                      obrassanyser@gmail.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Maps embed placeholder */}
            {/*
              TODO: Reemplazar este iframe con el embed real de Google Maps.
              Para obtenerlo:
              1. Ir a Google Maps
              2. Buscar "Av. Santa Fe 1045, Lomas de Zamora"
              3. Hacer click en "Compartir" > "Insertar mapa"
              4. Copiar el src del iframe y reemplazar la URL aquí abajo.
            */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <iframe
                title="Ubicación SANYSER - Lomas de Zamora"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.2851!2d-58.3978!3d-34.7607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Santa+Fe+1045%2C+Lomas+de+Zamora!5e0!3m2!1ses-419!2sar!4v1234567890"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
