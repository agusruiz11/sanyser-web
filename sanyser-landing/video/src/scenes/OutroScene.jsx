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

const WHATSAPP_NUMBER = '5491171255054';

export const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Fade-in de escena
  const sceneOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Logo
  const logoProgress = spring({
    frame: frame - 10,
    fps,
    config: { damping: 14, stiffness: 110 },
    durationInFrames: 35,
  });
  const logoScale   = interpolate(logoProgress, [0, 1], [0.7, 1]);
  const logoOpacity = interpolate(logoProgress, [0, 1], [0, 1]);

  // Línea separadora
  const lineW = interpolate(frame, [30, 55], [0, 500], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Tagline principal
  const taglineOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const taglineY       = interpolate(frame, [50, 70], [24, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // CTA button
  const ctaProgress = spring({
    frame: frame - 70,
    fps,
    config: { damping: 16, stiffness: 140 },
    durationInFrames: 28,
  });
  const ctaScale   = interpolate(ctaProgress, [0, 1], [0.85, 1]);
  const ctaOpacity = interpolate(ctaProgress, [0, 1], [0, 1]);

  // Datos de contacto
  const contactOpacity = interpolate(frame, [90, 110], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const contactY       = interpolate(frame, [90, 110], [16, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Pie (web + "desarrollado por")
  const footerOpacity = interpolate(frame, [110, 130], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        opacity: sceneOpacity,
        fontFamily: "'Inter', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fondo decorativo — círculo naranja difuso */}
      <div
        style={{
          position: 'absolute',
          bottom: -180,
          right: -180,
          width: 600,
          height: 600,
          borderRadius: '50%',
          backgroundColor: ORANGE,
          opacity: 0.06,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: -120,
          left: -120,
          width: 400,
          height: 400,
          borderRadius: '50%',
          backgroundColor: ORANGE,
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <Img
        src={staticFile('LOGO.png')}
        style={{
          width: 320,
          objectFit: 'contain',
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          marginBottom: 24,
        }}
      />

      {/* Línea separadora */}
      <div
        style={{
          width: lineW,
          height: 3,
          backgroundColor: ORANGE,
          borderRadius: 2,
          marginBottom: 36,
        }}
      />

      {/* Tagline */}
      <h2
        style={{
          color: '#FFFFFF',
          fontSize: 48,
          fontWeight: 900,
          textTransform: 'uppercase',
          textAlign: 'center',
          margin: '0 0 12px 0',
          letterSpacing: '0.04em',
          lineHeight: 1.1,
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          maxWidth: 900,
        }}
      >
        Tu obra merece los mejores materiales
      </h2>
      <p
        style={{
          color: '#94A3B8',
          fontSize: 24,
          fontWeight: 300,
          textAlign: 'center',
          margin: '0 0 40px 0',
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          maxWidth: 700,
        }}
      >
        Asesoramiento técnico · Logística inmediata · Ingeniería sanitaria
      </p>

      {/* CTA principal */}
      <div
        style={{
          display: 'flex',
          gap: 20,
          marginBottom: 48,
          opacity: ctaOpacity,
          transform: `scale(${ctaScale})`,
        }}
      >
        <div
          style={{
            backgroundColor: ORANGE,
            color: '#FFFFFF',
            padding: '20px 48px',
            borderRadius: 14,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {/* Ícono WhatsApp */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Consultanos por WhatsApp
        </div>
      </div>

      {/* Datos de contacto */}
      <div
        style={{
          display: 'flex',
          gap: 48,
          opacity: contactOpacity,
          transform: `translateY(${contactY}px)`,
          marginBottom: 32,
        }}
      >
        {[
          { label: 'WhatsApp', value: '+54 9 11 7125-5054' },
          { label: 'Email',    value: 'info@sanyser.com.ar' },
          { label: 'Ubicación', value: 'Buenos Aires, Argentina' },
        ].map((item) => (
          <div key={item.label} style={{ textAlign: 'center' }}>
            <p style={{ color: ORANGE, fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 4px 0' }}>
              {item.label}
            </p>
            <p style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 500, margin: 0 }}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          opacity: footerOpacity,
        }}
      >
        <span style={{ color: '#475569', fontSize: 15 }}>www.sanyser.com.ar</span>
        <span style={{ color: '#334155', fontSize: 15 }}>·</span>
        <span style={{ color: '#475569', fontSize: 15 }}>Desarrollado por Posicionarte Online</span>
      </div>
    </AbsoluteFill>
  );
};
