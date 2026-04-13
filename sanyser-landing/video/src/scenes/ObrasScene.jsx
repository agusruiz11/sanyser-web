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

const obras = [
  {
    titulo: 'Edificio Residencial de Alta Gama',
    descripcion: 'Instalación completa de sistemas presurizados y cloacales.',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMNXdctvm5Cx8rLBXVRB8IS33D4dufFjZWONvLGRzEU8T4DtgsfgEH5oWF01NF0qaJWefPaO_x4wWgky37-8aifpJWuwJ4JVh5yFNaXHwXKYOhz2zr6QND4RoC1qJFgKDNm-y5vEUTiaO8O8ozhYEI5kTYr9jqXO2JyHb-3IBTtLEW_sKsQH4F76OwRiUOR25FL2tWFN20Axz1uiSRQLOUvNubMqQXRhne4vd8OPNEAiEXqHLu5f_jwQ_bTAIomkrBboectUXFjI0',
    grande: true,
  },
  {
    titulo: 'Planta Industrial en GBA',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgAktMDVICbEaQ87EBzRoWf38RyJSQH-EWJ9YSSmzuk9Xv4oqxS-YqgWfBgdg_XdLoCjS0zS7Gi9GtvCeQeCL6c9CAIWfkkiOwxqnrzbpXoc5iOX8t2UA-XogcmBBXSx_VtqeND68J-3NPucRWZmBabMtsmfTn6WAnFWZFaxgCHl0SuDW8KIOo5uSy56NitsFsSwC2o1SzXdusLXEQRsNCi6XXRoh-YxBJmVUXaroQPogGndZFro74BxQGZITunt51s2GiR2p2tvA',
    grande: false,
  },
  {
    titulo: 'Complejo Residencial Privado',
    imagen: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCwn1MstnVe5WjeHZGr_SyjTIvXp-noUz16BUSakhLPAy0WO_EjvTfUGkCW3MhHiU1j4iEBU2PWuwMS_0TkcPUqS3krWHRhI62e8a2A0vH7li6faHJcrTpHBNjdBuZogZas28obHRfaCaaICY9q4utvJQmxaDpOPeZxKOFeseU2cykqieIDvko84KycQwzGC1MNIYO7qPrYAh3Z2HorrXdVUyX-yWuhytxIaXLE5VivXZPx866OLuQfDa4hC-n_ECzE1aopObracw',
    grande: false,
  },
  {
    titulo: 'Hotel de Categoría Internacional',
    imagen: staticFile('hotel.png'),
    grande: false,
  },
  {
    titulo: 'Centro de Salud y Medicina',
    imagen: staticFile('centromedico.png'),
    grande: false,
  },
];

const ObraCard = ({ obra, delay, frame, fps, style }) => {
  const progress = spring({
    frame: frame - delay,
    fps,
    config: { damping: 16, stiffness: 100 },
    durationInFrames: 35,
  });

  const opacity    = interpolate(progress, [0, 1], [0, 1]);
  const scale      = interpolate(progress, [0, 1], [0.88, 1]);

  return (
    <div
      style={{
        ...style,
        opacity,
        transform: `scale(${scale})`,
        borderRadius: 16,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Img
        src={obra.imagen}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      {/* Overlay con nombre */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(15,30,55,0.85) 0%, transparent 55%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '20px 22px',
        }}
      >
        <p
          style={{
            color: '#FFFFFF',
            fontSize: obra.grande ? 22 : 17,
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.25,
          }}
        >
          {obra.titulo}
        </p>
        {obra.descripcion && (
          <p style={{ color: '#94A3B8', fontSize: 15, margin: '6px 0 0 0', fontWeight: 300 }}>
            {obra.descripcion}
          </p>
        )}
      </div>
    </div>
  );
};

export const ObrasScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneOpacity = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleOpacity = interpolate(frame, [5, 22], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const titleY       = interpolate(frame, [5, 22], [-20, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const lineW        = interpolate(frame, [18, 40], [0, 230], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const fadeOut      = interpolate(frame, [108, 120], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        opacity: sceneOpacity * fadeOut,
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        padding: '52px 100px 60px',
      }}
    >
      {/* Encabezado */}
      <div style={{ marginBottom: 32 }}>
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
            Portfolio
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
          Obras Realizadas
        </h2>
        <div style={{ width: lineW, height: 4, backgroundColor: ORANGE, borderRadius: 2 }} />
      </div>

      {/* Grid tipo masonry: 1 card grande + 4 pequeñas */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, 1fr)',
          gap: 16,
          flex: 1,
        }}
      >
        {/* Card grande (col-span-2, row-span-2) */}
        <ObraCard
          obra={obras[0]}
          delay={22}
          frame={frame}
          fps={fps}
          style={{ gridColumn: '1 / 3', gridRow: '1 / 3' }}
        />
        {/* 4 cards pequeñas */}
        {obras.slice(1).map((obra, i) => (
          <ObraCard
            key={obra.titulo}
            obra={obra}
            delay={32 + i * 12}
            frame={frame}
            fps={fps}
            style={{}}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
