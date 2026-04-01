import { useEffect, useRef } from 'react';
import { initPipeBackground } from '../animations/pipeBackground';

/**
 * Thin React shell for the vanilla-JS pipe animation.
 * Sits at z-[2], behind hero content (z-[3]).
 */
export default function PipeBackground() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    // initPipeBackground returns its own cleanup function
    return initPipeBackground(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 2, willChange: 'transform' }}
    />
  );
}
