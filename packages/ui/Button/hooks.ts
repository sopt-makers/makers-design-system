import { useEffect, useMemo, useState } from 'react';
import type { ButtonColorTheme, ButtonIntent, ButtonShape } from './types';

interface UseResolvedProps {
  intent: ButtonIntent;
  shape: ButtonShape;
  theme?: ButtonColorTheme;
  rounded?: 'md' | 'lg';
}

export const useResolvedProps = ({ intent, shape, theme, rounded }: UseResolvedProps) => {
  const finalIntent = useMemo(() => {
    if (!theme) return intent;
    switch (theme) {
      case 'white':
        return 'primary';
      case 'black':
        return 'secondary';
      case 'blue':
        return 'success';
      case 'red':
        return 'danger';
      default:
        return intent;
    }
  }, [intent, theme]);

  const finalShape = useMemo(() => {
    if (!rounded) return shape;
    return rounded === 'lg' ? 'pill' : 'rect';
  }, [shape, rounded]);

  return { finalIntent, finalShape };
};

export const useScrollDirection = (enabled = true) => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);

  useEffect(() => {
    if (!enabled) {
      setScrollDirection(null);
      return;
    }

    let lastScrollY = window.pageYOffset;
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [enabled]);

  return scrollDirection;
};
