import {
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { IconCheck } from '@sopt-makers/icons';
import { selectedStyle, root, sprinkles } from './style.css';

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
  selected?: boolean;
}

function Chip({
  children,
  className,
  Icon,
  iconColor,
  iconPosition = 'none',
  size = 'sm',
  selected = false,
  ...buttonElementProps
}: ChipProps) {
  const renderIcon = () => {
    if (Icon) {
      return (
        <Icon color={iconColor} style={{ width: '16px', height: '16px' }} />
      );
    }

    if (selected) {
      return (
        <IconCheck
          color={iconColor}
          style={{ width: '16px', height: '16px' }}
        />
      );
    }

    return null;
  };

  return (
    <button
      className={`${root} ${className} ${sprinkles({
        padding: size,
        fontSize: size,
        lineHeight: size,
      })} ${selected && selectedStyle}`}
      type='button'
      {...buttonElementProps}
    >
      {iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
}

export default Chip;
