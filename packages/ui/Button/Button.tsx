import React from 'react';
import * as S from './style.css';
import { createButtonVariant, getIconStyles } from './utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'white' | 'black' | 'blue' | 'red';
  rounded?: 'md' | 'lg';
  LeftIcon?: React.ComponentType<any>;
  RightIcon?: React.ComponentType<any>;
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
  const iconStyles = getIconStyles(theme, size);

  return (
    <button
      className={`${S.root} ${variant} ${className}`}
      {...buttonElementProps}
    >
      {LeftIcon && <LeftIcon style={iconStyles} />}
      <span>{children}</span>
      {RightIcon && <RightIcon style={iconStyles} />}
    </button>
  );
}

export default Button;
