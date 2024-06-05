import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { root, activeStyle, sprinkles } from './style.css';

interface IconProps {
  color?: string;
  style?: CSSProperties;
}

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  LeftIcon?: ComponentType<IconProps>;
  RightIcon?: ComponentType<IconProps>;
  iconColor?: string;
  size?: 'sm' | 'md';
  active?: boolean;
}

function Chip({
  children,
  className,
  LeftIcon,
  RightIcon,
  iconColor,
  size = 'sm',
  active = false,
  ...buttonElementProps
}: ChipProps) {
  return (
    <button
      className={`${root} ${className} ${sprinkles({
        padding: size,
        fontStyle: size,
      })} ${active && activeStyle}`}
      type='button'
      {...buttonElementProps}
    >
      {LeftIcon ? (
        <LeftIcon color={iconColor} style={{ width: '16px', height: '16px' }} />
      ) : null}
      <span>{children}</span>
      {RightIcon ? (
        <RightIcon
          color={iconColor}
          style={{ width: '16px', height: '16px' }}
        />
      ) : null}
    </button>
  );
}

export default Chip;
