import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { bottomAddonContainerStyle } from './style.css';

export interface BottomAddon extends HTMLAttributes<HTMLDivElement> {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export const BottomAddon = forwardRef<HTMLDivElement, BottomAddon>((props, forwardedRef) => {
  const { leftAddon, rightAddon } = props;

  return (
    <div className={bottomAddonContainerStyle} ref={forwardedRef}>
      {leftAddon}
      {rightAddon}
    </div>
  );
});

BottomAddon.displayName = 'BottomAddon';
