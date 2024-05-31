import {
  useState,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactNode,
} from 'react';
import { IconCheck } from '@sopt-makers/icons';
import { checkedStyle, root, sprinkles } from './style.css';

interface IconProps {
  color?: string;
  style?: CSSProperties;
}

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  Icon?: ComponentType<IconProps>;
  iconColor?: string;
  size?: 'sm' | 'md';
  iconLocation?: 'none' | 'left' | 'right';
  isChecked?: boolean;
}

function Chip({
  children,
  className,
  Icon,
  iconColor,
  size = 'sm',
  iconLocation = 'none',
  isChecked = false,
  ...buttonElementProps
}: ChipProps) {
  const renderIcon = () => {
    if (Icon) {
      return (
        <Icon color={iconColor} style={{ width: '16px', height: '16px' }} />
      );
    }

    if (isChecked) {
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
      })} ${isChecked && checkedStyle}`}
      type='button'
      {...buttonElementProps}
    >
      {iconLocation === 'left' && renderIcon()}
      <span>{children}</span>
      {iconLocation === 'right' && renderIcon()}
    </button>
  );
}

export default Chip;
