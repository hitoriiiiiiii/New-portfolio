'use client';

import * as React from 'react';

type ScrollProgressProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  className?: string;
  direction?: 'horizontal' | 'vertical';
};

export function ScrollProgress({ containerRef, className, direction = 'horizontal' }: ScrollProgressProps) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const el = containerRef.current;

      if (el) {
        const max = Math.max(1, el.scrollHeight - el.clientHeight);
        const pct = Math.min(1, Math.max(0, el.scrollTop / max));
        setProgress(pct);
        return;
      }

      const doc = document.documentElement;
      const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
      const pct = Math.min(1, Math.max(0, window.scrollY / max));
      setProgress(pct);
    };

    update();

    const el = containerRef.current;
    if (el) {
      el.addEventListener('scroll', update, { passive: true });
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      if (el) {
        el.removeEventListener('scroll', update);
      }
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [containerRef]);

  const visibleProgress = Math.max(0.01, progress);

  return (
    <div
      aria-hidden
      className={className}
      style={{
        position: direction === 'horizontal' ? 'fixed' : 'absolute',
        left: 0,
        top: 0,
        width: direction === 'horizontal' ? `${visibleProgress * 100}%` : '100%',
        height: direction === 'vertical' ? `${visibleProgress * 100}%` : undefined,
        maxWidth: '100%',
      }}
    />
  );
}


