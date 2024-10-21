import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children: ReactNode;
  width: number | string;
  height: number | string;
  variant: 'circular' | 'rectangular' | 'rounded' | 'text';
  animation: 'pulse' | 'wave';
}

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, forwardedRef) => {
  const { children, ...restProps } = props;

  return (
    <span ref={forwardedRef} {...restProps}>
      {children}
    </span>
  );
});

Skeleton.displayName = 'Skeleton';
