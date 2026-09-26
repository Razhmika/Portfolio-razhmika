import { useEffect, useRef, useState } from 'react';

/**
 * Lightweight Intersection Observer hook — replaces framer-motion for scroll animations.
 * Zero dependencies, ~200 bytes.
 */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  const { threshold = 0.1, rootMargin = '-60px 0px' } = options;
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // fire once
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
