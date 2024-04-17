import React, { type ButtonHTMLAttributes } from 'react';
import * as S from './style.css';
import createButtonVariant from './utils';

interface IconProps { color?: string }

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
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
  ...buttonElementProps
}: ButtonProps) {
  const variant = createButtonVariant(theme, rounded, size);
  return (
    <button className={`${S.root} ${variant} ${className}`}
      type="button"
      {...buttonElementProps}
    >
      {LeftIcon ? <LeftIcon /> : null}
      <span>{children}</span>
      {RightIcon ? <RightIcon /> : null}
    </button>
  );
}

export default Button;
