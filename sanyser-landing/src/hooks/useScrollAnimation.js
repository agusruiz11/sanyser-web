import { useEffect, useRef } from 'react';

/**
 * Hook que aplica la clase 'visible' a los elementos con clase 'animate-on-scroll'
 * cuando entran en el viewport, disparando la animación CSS definida en index.css.
 */
export default function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const elements = ref.current
      ? ref.current.querySelectorAll('.animate-on-scroll')
      : document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}
