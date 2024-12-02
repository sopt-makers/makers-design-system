import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { topAddonContainerStyle } from '../style.css';

export interface FieldBoxTopAddonProps extends HTMLAttributes<HTMLDivElement> {
  leftAddon?: ReactNode;
  rightAddon?: ReactNode;
}

export const TopAddon = forwardRef<HTMLDivElement, FieldBoxTopAddonProps>((props, forwardedRef) => {
  const { leftAddon, rightAddon } = props;

  return (
    <div className={topAddonContainerStyle} ref={forwardedRef}>
      {leftAddon}
      {rightAddon}
    </div>
  );
});

TopAddon.displayName = 'TopAddon';
