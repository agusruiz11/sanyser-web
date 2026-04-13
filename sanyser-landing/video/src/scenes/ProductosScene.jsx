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
const BLUE   = '#1E40AF';

const productos = [
  { nombre: 'Bombas',                  descripcion: 'Presurizadoras, centrífugas y sumergibles.',   icono: '⚡', acento: ORANGE },
  { nombre: 'Sistemas de Tuberías',    descripcion: 'Termofusión, PVC, PEAD y acero inoxidable.',   icono: '🔀', acento: BLUE   },
  { nombre: 'Artefactos y Griferías',  descripcion: 'Diseño de vanguardia y ahorro de agua.',        icono: '💧', acento: ORANGE },
  { nombre: 'Calderas y Termotanques', descripcion: 'Climatización central y ACS de gran volumen.',  icono: '🔥', acento: BLUE   },
  { nombre: 'Tanques y Cisternas',     descripcion: 'Reserva de agua potable y contra incendio.',    icono: '🗄️', acento: ORANGE },
  { nombre: 'Válvulas',                descripcion: 'Control de flujo industrial y automatización.', icono: '⚙️', acento: BLUE   },
];

const ProductCard = ({ producto, delay, frame, fps }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 14, stiffness: 120 },
    durationInFrames: 30,
  });

  const opacity    = interpolate(progress, [0, 1], [0, 1]);
  const translateY = interpolate(progress, [0, 1], [36, 0]);
  const scale      = interpolate(progress, [0, 1], [0.92, 1]);

  return (
    <div
      style={{
        backgroundColor: NAVY2,
        borderRadius: 14,
        padding: '24px 22px',
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        borderLeft: `4px solid ${producto.acento}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow de fondo */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: producto.acento,
          opacity: 0.06,
        }}
      />

      <div style={{ fontSize: 34 }}>{producto.icono}</div>
      <h3 style={{ color: '#FFFFFF', fontSize: 20, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
        {producto.nombre}
      </h3>
      <p style={{ color: '#94A3B8', fontSize: 15, margin: 0, lineHeight: 1.4, fontWeight: 300 }}>
        {producto.descripcion}
      </p>
    </div>
  );
};

export const ProductosScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleOpacity = interpolate(frame, [5, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleY       = interpolate(frame, [5, 22], [-20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const lineW        = interpolate(frame, [18, 40], [0, 190], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fadeOut      = interpolate(frame, [108, 120], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  const DELAYS = [22, 32, 42, 52, 62, 72];

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        opacity: sceneOpacity * fadeOut,
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        padding: '56px 100px',
      }}
    >
      {/* Encabezado */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            marginBottom: 10,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div style={{ width: 30, height: 3, backgroundColor: ORANGE, borderRadius: 2 }} />
          <span style={{ color: ORANGE, fontSize: 16, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Catálogo completo
          </span>
        </div>
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: 62,
            fontWeight: 900,
            textTransform: 'uppercase',
            margin: '0 0 14px 0',
            letterSpacing: '0.02em',
            lineHeight: 1,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          Nuestros Productos
        </h2>
        <div style={{ width: lineW, height: 4, backgroundColor: ORANGE, borderRadius: 2 }} />
      </div>

      {/* Grid 3×2 */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 20,
          flex: 1,
        }}
      >
        {productos.map((p, i) => (
          <ProductCard
            key={p.nombre}
            producto={p}
            delay={DELAYS[i]}
            frame={frame}
            fps={fps}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
