import React, { type ButtonHTMLAttributes } from 'react';
import * as S from './style.css';
import createButtonVariant, { useResolvedProps } from './utils';
import { iconSizes } from './constants';
import { ButtonIntent, ButtonShape } from './types';

interface IconProps {
  color?: string;
  width: number;
  height: number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red'; // @deprecated - `type` prop 사용
  rounded?: 'md' | 'lg'; // @deprecated - `shape` prop 사용
  variant?: 'fill' | 'outlined';
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
  shape?: ButtonShape;
  // prefix?: boolean;
  // suffix?: boolean;
  intent?: ButtonIntent;
}

function Button({
  children,
  className,
  size = 'md',
  theme,
  rounded,
  LeftIcon,
  RightIcon,
  variant = 'fill',
  shape = 'rect',
  // prefix,
  // suffix,
  intent = 'primary',
  ...buttonElementProps
}: ButtonProps) {
  const { finalIntent, finalShape } = useResolvedProps({ intent, shape, theme, rounded });

  const style = createButtonVariant(finalIntent, finalShape, size, variant);
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
