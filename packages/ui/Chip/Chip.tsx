import type { ButtonHTMLAttributes, CSSProperties, ComponentType } from 'react';
import { root, activeStyle, sprinkles } from './style.css';

interface IconProps {
  color?: string;
  style?: CSSProperties;
}

interface BaseChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | number;
  className?: string;
  iconColor?: string;
  size?: 'sm' | 'md';
  active?: boolean;
}

interface LeftIconChipProps extends BaseChipProps {
  LeftIcon?: ComponentType<IconProps>;
  RightIcon?: never;
}

interface RightIconChipProps extends BaseChipProps {
  LeftIcon?: never;
  RightIcon?: ComponentType<IconProps>;
}

type ChipProps = LeftIconChipProps | RightIconChipProps;

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
      {!LeftIcon && RightIcon ? (
        <RightIcon
          color={iconColor}
          style={{ width: '16px', height: '16px' }}
        />
      ) : null}
    </button>
  );
}

export default Chip;
