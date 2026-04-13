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

export const IntroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Logo: spring zoom-in a partir del frame 5
  const logoScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 120, mass: 1 },
    durationInFrames: 40,
  });

  const logoOpacity = interpolate(frame, [5, 25], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Línea naranja que se extiende de izquierda a derecha
  const lineWidth = interpolate(frame, [30, 55], [0, 420], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Tagline aparece después de la línea
  const taglineOpacity = interpolate(frame, [55, 70], [0, 1], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });
  const taglineY = interpolate(frame, [55, 70], [20, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  // Fade-out general al final de la escena
  const sceneOpacity = interpolate(frame, [78, 90], [1, 0], {
    extrapolateLeft:  'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: NAVY,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: sceneOpacity,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Logo */}
      <Img
        src={staticFile('LOGO.png')}
        style={{
          width: 340,
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          marginBottom: 28,
          objectFit: 'contain',
        }}
      />

      {/* Línea naranja */}
      <div
        style={{
          width: lineWidth,
          height: 4,
          backgroundColor: ORANGE,
          borderRadius: 2,
          marginBottom: 24,
        }}
      />

      {/* Tagline */}
      <p
        style={{
          color: '#CBD5E1',
          fontSize: 32,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          opacity: taglineOpacity,
          transform: `translateY(${taglineY}px)`,
          margin: 0,
          fontWeight: 300,
        }}
      >
        Soluciones sanitarias para la construcción
      </p>
    </AbsoluteFill>
  );
};
