import { useEffect } from 'react';

const schemas = [
  // ── 1. Organization ───────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SANYSER',
    alternateName: 'Sanitarios y Servicios',
    url: 'https://sanyser.com.ar/',
    logo: 'https://sanyser.com.ar/og-image.png',
    description:
      'Distribuidora de materiales sanitarios para la construcción. Más de 25 marcas líderes, ingeniería propia y logística inmediata.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Santa Fe 1045',
      addressLocality: 'Lomas de Zamora',
      addressRegion: 'Buenos Aires',
      addressCountry: 'AR',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+54-9-11-7125-5054',
        contactType: 'customer service',
        areaServed: 'AR',
        availableLanguage: 'Spanish',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+54-9-11-2893-3560',
        contactType: 'sales',
        areaServed: 'AR',
        availableLanguage: 'Spanish',
      },
    ],
    email: 'obras@sanyser.com.ar',
    sameAs: [
      'https://www.instagram.com/sanyser.sanitarios/',
      'https://www.linkedin.com/company/110816221/',
    ],
  },

  // ── 2. LocalBusiness ──────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://sanyser.com.ar/#localbusiness',
    name: 'SANYSER - Sanitarios y Servicios',
    description:
      'Distribuidora de materiales sanitarios para la construcción. Asesoramiento técnico, proyectos de ingeniería sanitaria, fabricación de colectores y logística inmediata.',
    url: 'https://sanyser.com.ar/',
    telephone: '+54-9-11-7125-5054',
    email: 'obras@sanyser.com.ar',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Santa Fe 1045',
      addressLocality: 'Lomas de Zamora',
      addressRegion: 'Buenos Aires',
      postalCode: '1832',
      addressCountry: 'AR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -34.7607,
      longitude: -58.3978,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '13:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'ARS',
    image: 'https://sanyser.com.ar/og-image.png',
    hasMap:
      'https://www.google.com/maps/search/?api=1&query=Av.+Santa+Fe+1045,+Lomas+de+Zamora,+Buenos+Aires,+Argentina',
    areaServed: [
      { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
      { '@type': 'AdministrativeArea', name: 'Gran Buenos Aires' },
    ],
  },

  // ── 3. Services ───────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios de SANYSER',
    url: 'https://sanyser.com.ar/#servicios',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Asesoramiento Técnico',
          description:
            'Asesoramiento especializado en materiales sanitarios para proyectos de construcción.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Proyectos de Ingeniería Sanitaria',
          description:
            'Desarrollo de proyectos completos: memorias de cálculo, planos, cómputos y especificaciones técnicas.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'Fabricación de Colectores',
          description:
            'Fabricación a medida de colectores sanitarios para obras de cualquier escala.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Logística Inmediata',
          description:
            'Entrega con transporte propio cubriendo CABA y GBA. Despacho en el día para materiales en stock.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Asistencia a Obra',
          description:
            'Asistencia técnica en obra para garantizar la correcta ejecución de instalaciones sanitarias.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'Capacitación Profesional',
          description:
            'Capacitación para profesionales y empresas constructoras en materiales y técnicas sanitarias.',
          provider: { '@id': 'https://sanyser.com.ar/#localbusiness' },
          areaServed: 'AR',
        },
      },
    ],
  },

  // ── 4. FAQPage ────────────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Hacen envíos a todo el país?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trabajamos con transporte propio cubriendo zona CABA y GBA. Consultar por envíos al interior del país.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Tienen mínimo de compra?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No exigimos mínimo de compra. Atendemos tanto a profesionales que necesitan materiales para una obra puntual como a empresas constructoras con pedidos de gran escala. Cada cliente recibe la misma atención.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Realizan proyectos de ingeniería sanitaria?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí. Contamos con un equipo de profesionales especializados que desarrolla proyectos completos: memorias de cálculo, planos, cómputos y especificaciones técnicas. También damos asistencia en obra para garantizar la correcta ejecución.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Puedo visitar el showroom o el depósito?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Por supuesto. Estamos en Lomas de Zamora, Buenos Aires. Podés visitarnos de lunes a viernes de 8:00 a 18:00 hs y los días sábados de 8:00 a 13:00 hs. Te recomendamos coordinar visita con anticipación para que te atendamos con el tiempo que tu consulta merece.',
        },
      },
    ],
  },

  // ── 5. BreadcrumbList ─────────────────────────────────────────────────────
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://sanyser.com.ar/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Servicios',
        item: 'https://sanyser.com.ar/#servicios',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contacto',
        item: 'https://sanyser.com.ar/#presupuesto',
      },
    ],
  },
];

export default function SchemaMarkup() {
  useEffect(() => {
    schemas.forEach((schema, i) => {
      const existing = document.getElementById(`schema-ld-${i}`);
      if (existing) return;
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `schema-ld-${i}`;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    return () => {
      schemas.forEach((_, i) => {
        document.getElementById(`schema-ld-${i}`)?.remove();
      });
    };
  }, []);

  return null;
}
