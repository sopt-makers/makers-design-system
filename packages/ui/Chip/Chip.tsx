import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ComponentType,
  ReactNode,
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
  size?: 'sm' | 'md';
  iconLocation?: 'none' | 'left' | 'right';
  isChecked?: boolean;
  Icon?: ComponentType<IconProps>;
}

function Chip({
  children,
  className,
  size = 'sm',
  iconLocation = 'none',
  isChecked = false,
  Icon = IconCheck,
  ...buttonElementProps
}: ChipProps) {
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
      {isChecked && iconLocation === 'left' ? (
        <Icon style={{ width: '16px', height: '16px' }} />
      ) : null}
      <span>{children}</span>
      {isChecked && iconLocation === 'right' ? (
        <Icon style={{ width: '16px', height: '16px' }} />
      ) : null}
    </button>
  );
}

export default Chip;
