import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { IconCheck } from '@sopt-makers/icons';
import { checkedStyle, root, sprinkles } from './style.css';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md';
  iconLocation?: 'none' | 'left' | 'right';
  isChecked?: boolean;
}

function Chip({
  children,
  className,
  size = 'sm',
  iconLocation = 'none',
  isChecked = false,
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
        <IconCheck style={{ width: '16px', height: '16px' }} />
      ) : null}
      <span>{children}</span>
      {isChecked && iconLocation === 'right' ? (
        <IconCheck style={{ width: '16px', height: '16px' }} />
      ) : null}
    </button>
  );
}

export default Chip;
