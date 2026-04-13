import { Composition } from 'remotion';
import { SanyserVideo } from './SanyserVideo';

// 30 fps · 780 frames = 26 segundos
const TOTAL_FRAMES = 780;
const FPS = 30;

export const Root = () => {
  return (
    <>
      <Composition
        id="SanyserVideo"
        component={SanyserVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="SanyserVideoVertical"
        component={SanyserVideo}
        durationInFrames={TOTAL_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
};
