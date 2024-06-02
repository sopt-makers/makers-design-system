import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { root, sprinkles } from './style.css';

interface IconProps {
  color?: string;
  style?: CSSProperties;
}

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  Icon?: ComponentType<IconProps>;
  iconColor?: string;
  iconPosition?: 'none' | 'left' | 'right';
  size?: 'sm' | 'md';
}

function Chip({
  children,
  className,
  Icon,
  iconColor,
  iconPosition = 'none',
  size = 'sm',
  ...buttonElementProps
}: ChipProps) {
  return (
    <button
      className={`${root} ${className} ${sprinkles({
        padding: size,
        fontSize: size,
        lineHeight: size,
      })}`}
      type='button'
      {...buttonElementProps}
    >
      {Icon && iconPosition === 'left' ? (
        <Icon color={iconColor} style={{ width: '16px', height: '16px' }} />
      ) : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? (
        <Icon color={iconColor} style={{ width: '16px', height: '16px' }} />
      ) : null}
    </button>
  );
}

export default Chip;
