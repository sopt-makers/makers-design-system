import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { root } from './style.css';
import createSkeletonStyle from './utils';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  width: number | string;
  height: number | string;
  variant: 'default' | 'circular' | 'rounded';
}

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, forwardedRef) => {
  const { width, height, variant, ...restProps } = props;

  const style = createSkeletonStyle(variant);

  return <span className={`${root} ${style}`} ref={forwardedRef} style={{ width, height }} {...restProps} />;
});

Skeleton.displayName = 'Skeleton';
