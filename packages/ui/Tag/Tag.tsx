import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './style.css';
import createTagStyle from './utils';
import { iconSizes } from './constants';

interface IconProps {
  color?: string;
  width: number;
  height: number;
}
export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rect' | 'pill';
  variant?: 'default' | 'primary' | 'secondary';
  type?: 'solid' | 'line';
  LeftIcon?: React.ComponentType<IconProps>;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, forwardedRef) => {
  const {
    children,
    className,
    size = 'sm',
    shape = 'rect',
    variant = 'default',
    type = 'solid',
    LeftIcon,
    ...restProps
  } = props;
  const style = createTagStyle(type, variant, shape, size);
  const iconSize = iconSizes[size];

  return (
    <div className={`${S.root} ${style} ${className}`} ref={forwardedRef} {...restProps}>
      {LeftIcon ? <LeftIcon height={iconSize} width={iconSize} /> : null}
      {children}
    </div>
  );
});

Tag.displayName = 'Tag';
