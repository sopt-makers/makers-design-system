import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';
import { root, hasChildren } from './style.css';
import createSkeletonStyle from './utils';
import type { SkeletonVariant } from './types';

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * ### Skeleton의 너비를 수동으로 지정할 떄 사용합니다.
   */
  width?: number | string;
  /**
   * ### Skeleton의 높이를 수동으로 지정할 떄 사용합니다.
   */
  height?: number | string;
  /**
   * ### `default` | `circular` | `rounded` 의 세 가지 값을 가집니다.
   * @example
   * default - borderRadius : '12px'
   * circular && rounded - borderRadius: '100%'
   */
  variant?: SkeletonVariant;
  /**
   * ### children prop을 사용할 경우 스켈레톤의 사이즈가 자식 요소에 맞춰집니다.
   * @example
   * ```tsx
   * // width: 'fit-content', height: 'auto'
   * <Skeleton>
   *   <Toggle />
   * </Skeleton>
   * ```
   */
  children?: React.ReactNode;
}

export const Skeleton = forwardRef<HTMLSpanElement, SkeletonProps>((props, forwardedRef) => {
  const { width, height, variant = 'default', children, ...restProps } = props;

  const styleClass = createSkeletonStyle(variant);

  return (
    <span
      className={`${root} ${styleClass} ${children ? hasChildren : ''}`}
      ref={forwardedRef}
      style={{ width, height }}
      {...restProps}
    >
      {children}
    </span>
  );
});

Skeleton.displayName = 'Skeleton';
