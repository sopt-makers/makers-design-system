import React, { useEffect, useState, type ButtonHTMLAttributes } from 'react';
import * as S from './style.css';
import createButtonVariant from './utils';
import { iconSizes } from './constants';
import type { ButtonIntent, ButtonShape, ButtonVariant } from './types';
import { useResolvedProps, useScrollDirection } from './hooks';

interface IconProps {
  color?: string;
  width: number;
  height: number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red'; // @deprecated - `intent` prop 사용
  rounded?: 'md' | 'lg'; // @deprecated - `shape` prop 사용
  variant?: ButtonVariant;
  LeftIcon?: React.ComponentType<IconProps>;
  RightIcon?: React.ComponentType<IconProps>;
  shape?: ButtonShape;
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
  intent = 'primary',
  ...buttonElementProps
}: ButtonProps) {
  const { finalIntent, finalShape } = useResolvedProps({ intent, shape, theme, rounded });
  const isFloating = variant === 'floating';
  const scrollDirection = useScrollDirection(isFloating);
  const [isExtended, setIsExtended] = useState(false);

  useEffect(() => {
    if (!isFloating) return;
    setIsExtended(scrollDirection === 'down');
  }, [scrollDirection, isFloating]);

  const style = createButtonVariant(finalIntent, finalShape, size, variant, isExtended);
  const iconSize = iconSizes[size];
  return (
    <button className={`${S.root} ${style} ${className}`} type='button' {...buttonElementProps}>
      {LeftIcon ? <LeftIcon height={iconSize} width={iconSize} /> : null}
      {!isFloating || isExtended ? <span>{children}</span> : null}
      {RightIcon && !LeftIcon ? <RightIcon height={iconSize} width={iconSize} /> : null}
    </button>
  );
}

Button.displayName = 'Button';
export default Button;
