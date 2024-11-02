import { forwardRef, type HTMLAttributes } from 'react';
import * as S from './style.css';
import createTagStyle from './utils';

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rect' | 'pill';
  variant?: 'default' | 'primary' | 'secondary';
  type?: 'solid' | 'line';
}

export const Tag = forwardRef<HTMLDivElement, TagProps>((props, forwardedRef) => {
  const { children, size = 'sm', shape = 'rect', variant = 'default', type = 'solid' } = props;
  const style = createTagStyle(type, variant, shape, size);

  return (
    <div className={`${S.root} ${style}`} ref={forwardedRef}>
      {children}
    </div>
  );
});

Tag.displayName = 'Tag';
