import { Sequence } from 'remotion';
import { IntroScene }     from './scenes/IntroScene';
import { HeroScene }      from './scenes/HeroScene';
import { ServiciosScene } from './scenes/ServiciosScene';
import { ProductosScene } from './scenes/ProductosScene';
import { ObrasScene }     from './scenes/ObrasScene';
import { OutroScene }     from './scenes/OutroScene';

/*
  Timeline (30 fps):
  ─────────────────────────────────────────────────────────────────
  Escena        | Start | End  | Frames | Segundos
  ─────────────────────────────────────────────────────────────────
  Intro         |   0   |  90  |   90   |  3.0 s
  Hero          |  90   | 225  |  135   |  4.5 s
  Servicios     | 225   | 390  |  165   |  5.5 s
  Productos     | 390   | 510  |  120   |  4.0 s
  Obras         | 510   | 630  |  120   |  4.0 s
  Outro         | 630   | 780  |  150   |  5.0 s
  ─────────────────────────────────────────────────────────────────
  Total                         780       26.0 s
*/

export const SanyserVideo = () => {
  return (
    <>
      <Sequence from={0}   durationInFrames={90}>
        <IntroScene />
      </Sequence>

      <Sequence from={90}  durationInFrames={135}>
        <HeroScene />
      </Sequence>

      <Sequence from={225} durationInFrames={165}>
        <ServiciosScene />
      </Sequence>

      <Sequence from={390} durationInFrames={120}>
        <ProductosScene />
      </Sequence>

      <Sequence from={510} durationInFrames={120}>
        <ObrasScene />
      </Sequence>

      <Sequence from={630} durationInFrames={150}>
        <OutroScene />
      </Sequence>
    </>
  );
};
