import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import * as S from './style.css';

export interface FieldBoxLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
  required: boolean;
}

export const FieldBoxLabel = forwardRef<HTMLDivElement, FieldBoxLabelProps>((props, forwardedRef) => {
  const { required, label, description } = props;

  return (
    <div ref={forwardedRef}>
      <label className={S.label}>
        <span>
          {label}
          {required ? <span className={S.required}>*</span> : null}
        </span>
        <p className={S.description}>{description}</p>
      </label>
    </div>
  );
});

FieldBoxLabel.displayName = 'FieldBoxLabel';
