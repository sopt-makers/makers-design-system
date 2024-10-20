import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { bottomAddonContainerStyle } from '../style.css';

export interface FieldBoxBottomAddonProps extends HTMLAttributes<HTMLDivElement> {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export const BottomAddon = forwardRef<HTMLDivElement, FieldBoxBottomAddonProps>((props, forwardedRef) => {
  const { leftAddon, rightAddon } = props;

  return (
    <div className={bottomAddonContainerStyle} ref={forwardedRef}>
      {leftAddon}
      {rightAddon}
    </div>
  );
});

BottomAddon.displayName = 'BottomAddon';
