import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const NAVY   = '#0F1E37';
const ORANGE = '#FF5500';
const NAVY2  = '#162844';

const servicios = [
  { icono: '💬', titulo: 'Asesoramiento Técnico',        descripcion: 'Profesionales que te acompañan en la elección de materiales y soluciones óptimas.' },
  { icono: '📐', titulo: 'Proyectos Sanitarios',         descripcion: 'Ingeniería completa: planos, memorias técnicas, cómputos y especificaciones.' },
  { icono: '🔧', titulo: 'Fabricación de Colectores',    descripcion: 'Colectores a medida en acero inoxidable y polipropileno, ajustados a tu obra.' },
  { icono: '🎓', titulo: 'Capacitación a Profesionales', descripcion: 'Talleres y charlas técnicas con las últimas tecnologías del rubro.' },
  { icono: '🚚', titulo: 'Logística Inmediata',          descripcion: 'Stock permanente y despachos ágiles para que nunca te falten materiales.' },
  { icono: '🦺', titulo: 'Asistencia a Obra',            descripcion: 'Presencia técnica en obra para verificar instalaciones y resolver imprevistos.' },
];

const ServiceCard = ({ servicio, delay, frame, fps }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 130, mass: 0.9 },
    durationInFrames: 35,
  });

  const opacity  = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [40, 0]);

  return (
    <div
      style={{
        backgroundColor: NAVY2,
        borderRadius: 16,
        padding: '28px 28px',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        opacity,
        transform: `translateY(${translateY}px)`,
        borderBottom: `3px solid ${ORANGE}`,
      }}
    >
      <div style={{ fontSize: 38 }}>{servicio.icono}</div>
      <h3
        style={{
          color: '#FFFFFF',
          fontSize: 22,
          fontWeight: 700,
          margin: 0,
          lineHeight: 1.2,
        }}
      >
        {servicio.titulo}
      </h3>
      <p
        style={{
          color: '#94A3B8',
          fontSize: 16,
          lineHeight: 1.5,
          margin: 0,
          fontWeight: 300,
        }}
      >
        {servicio.descripcion}
      </p>
    </div>
  );
};

export const ServiciosScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade-in escena
  const sceneOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Título sección
  const titleOpacity = interpolate(frame, [5, 22], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });
  const titleY = interpolate(frame, [5, 22], [-20, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Línea debajo del título
  const lineW = interpolate(frame, [18, 40], [0, 160], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Fade-out final
  const fadeOut = interpolate(frame, [152, 165], [1, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Cada card aparece con un delay escalonado
  const CARD_DELAYS = [25, 38, 51, 64, 77, 90];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        opacity: sceneOpacity * fadeOut,
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        padding: '64px 100px',
      }}
    >
      {/* Encabezado de sección */}
      <div style={{ marginBottom: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 12,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div style={{ width: 30, height: 3, backgroundColor: ORANGE, borderRadius: 2 }} />
          <span style={{ color: ORANGE, fontSize: 16, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Lo que hacemos
          </span>
        </div>

        <h2
          style={{
            color: '#FFFFFF',
            fontSize: 64,
            fontWeight: 900,
            textTransform: 'uppercase',
            margin: '0 0 16px 0',
            letterSpacing: '0.02em',
            lineHeight: 1,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Nuestros Servicios
        </h2>

        <div style={{ width: lineW, height: 4, backgroundColor: ORANGE, borderRadius: 2 }} />
      </div>

      {/* Grid de cards 3×2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 24,
          flex: 1,
        }}
      >
        {servicios.map((s, i) => (
          <ServiceCard
            key={s.titulo}
            servicio={s}
            delay={CARD_DELAYS[i]}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
