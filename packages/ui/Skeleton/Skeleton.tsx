import type { SkeletonProps as RadixSkeletonProps } from '@radix-ui/themes';
import { Skeleton as RadixSkeleton } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import { colors } from '@sopt-makers/colors';
import { forwardRef } from 'react';

export type SkeletonProps = RadixSkeletonProps;

/**
 * - 자세한 옵션은 [radix-ui/Skeleton](https://www.radix-ui.com/themes/docs/components/skeleton)문서를 참고해주세요.
 */
export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, forwardedRef) => {
  const { children, ...restProps } = props;

  return (
    <RadixSkeleton
      ref={forwardedRef}
      style={{ backgroundColor: colors.gray700, borderRadius: '9999px' }}
      {...restProps}
    >
      {children}
    </RadixSkeleton>
  );
});

Skeleton.displayName = 'Skeleton';
