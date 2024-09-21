import React, { type ButtonHTMLAttributes } from 'react';
import * as S from './style.css';
import createButtonVariant from './utils';
import { iconSizes } from './constants';

interface IconProps {
  color?: string;
  width: number;
  height: number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
  variant?: 'fill' | 'outlined';
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
}

function Button({
  children,
  className,
  size = 'md',
  theme = 'white',
  rounded = 'md',
  LeftIcon,
  RightIcon,
  variant = 'fill',
  ...buttonElementProps
}: ButtonProps) {
  const style = createButtonVariant(theme, rounded, size, variant);
  const iconSize = iconSizes[size];
  return (
    <button className={`${S.root} ${style} ${className}`} type='button' {...buttonElementProps}>
      {LeftIcon ? <LeftIcon height={iconSize} width={iconSize} /> : null}
      <span>{children}</span>
      {RightIcon && !LeftIcon ? <RightIcon height={iconSize} width={iconSize} /> : null}
    </button>
  );
}

export default Button;
