import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { root, selectedStyle, sprinkles } from './style.css';

interface IconProps {
  color?: string;
  style?: CSSProperties;
}

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  Icon?: ComponentType<IconProps>;
  iconColor?: string;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md';
  selected?: boolean;
}

function Chip({
  children,
  className,
  Icon,
  iconColor,
  iconPosition = 'left',
  size = 'sm',
  selected = false,
  ...buttonElementProps
}: ChipProps) {
  return (
    <button
      className={`${root} ${className} ${sprinkles({
        padding: size,
        fontStyle: size,
      })} ${selected && selectedStyle}`}
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
