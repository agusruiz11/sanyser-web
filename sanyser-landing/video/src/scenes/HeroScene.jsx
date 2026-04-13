import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
} from 'remotion';

const NAVY   = '#0F1E37';
const ORANGE = '#FF5500';

// Imágenes del slideshow del hero (se muestran en secuencia)
const SLIDES = [
  staticFile('bg1.webp'),
  staticFile('bg2.webp'),
  staticFile('bg5.jpeg'),
];

export const HeroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade-in de escena
  const sceneOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Título: slide desde la izquierda
  const titleX = interpolate(frame, [10, 40], [-80, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });
  const titleOpacity = interpolate(frame, [10, 35], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Span naranja del título (aparece un poco después)
  const spanOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtítulo
  const subtitleOpacity = interpolate(frame, [45, 65], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleY = interpolate(frame, [45, 65], [16, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // CTA badge
  const ctaOpacity = spring({
    frame: frame - 60,
    fps,
    config: { damping: 18, stiffness: 150 },
    durationInFrames: 25,
  });

  // Imagen: slide desde la derecha
  const imgX = interpolate(frame, [5, 35], [120, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });
  const imgOpacity = interpolate(frame, [5, 30], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Qué slide mostrar (cambia cada 45 frames)
  const slideIndex = Math.floor(frame / 45) % SLIDES.length;

  // Fade-out al final
  const fadeOut = interpolate(frame, [120, 135], [1, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        opacity: sceneOpacity * fadeOut,
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      }}
    >
      {/* Overlay oscuro sutíl */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(15,30,55,0.92)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Imagen de fondo con textura */}
      <Img
        src={staticFile('plumbing.jpg')}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.15,
        }}
      />

      {/* Columna izquierda — Texto */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 80px 80px 100px',
          zIndex: 2,
        }}
      >
        {/* Etiqueta superior */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 28,
            opacity: titleOpacity,
          }}
        >
          <div style={{ width: 36, height: 3, backgroundColor: ORANGE, borderRadius: 2 }} />
          <span style={{ color: ORANGE, fontSize: 18, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Materiales sanitarios
          </span>
        </div>

        {/* Título principal */}
        <h1
          style={{
            color: '#FFFFFF',
            fontSize: 80,
            fontWeight: 900,
            lineHeight: 0.92,
            margin: '0 0 24px 0',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            opacity: titleOpacity,
            transform: `translateX(${titleX}px)`,
          }}
        >
          Sanitarios para<br />tus obras,{' '}
          <span style={{ color: ORANGE, opacity: spanOpacity }}>
            servicios<br />que las potencian.
          </span>
        </h1>

        {/* Subtítulo */}
        <p
          style={{
            color: '#94A3B8',
            fontSize: 24,
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: 500,
            margin: '0 0 40px 0',
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px)`,
          }}
        >
          Proveemos soluciones integrales de alta ingeniería para el mercado de la construcción en Argentina.
        </p>

        {/* CTA */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            backgroundColor: ORANGE,
            color: '#FFFFFF',
            padding: '18px 40px',
            borderRadius: 14,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            opacity: ctaOpacity,
            width: 'fit-content',
          }}
        >
          Pedí tu presupuesto
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Columna derecha — Slideshow */}
      <div
        style={{
          width: '46%',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 2,
          opacity: imgOpacity,
          transform: `translateX(${imgX}px)`,
        }}
      >
        {SLIDES.map((src, i) => (
          <Img
            key={i}
            src={src}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: i === slideIndex ? 1 : 0,
              transition: 'opacity 0.6s ease',
            }}
          />
        ))}

        {/* Borde naranja izquierdo */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 5,
            backgroundColor: ORANGE,
            zIndex: 3,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
