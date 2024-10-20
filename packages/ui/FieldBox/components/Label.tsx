import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { requiredMarkStyle, TopAddonDescriptionStyle, TopAddonLabelStyle } from '../style.css';

export interface FieldBoxLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  description: string;
  required: boolean;
}

export const FieldBoxLabel = forwardRef<HTMLDivElement, FieldBoxLabelProps>((props, forwardedRef) => {
  const { required, label, description } = props;

  return (
    <div aria-label={label} aria-required={required} ref={forwardedRef}>
      <label className={TopAddonLabelStyle}>
        <span>
          {label}
          {required ? <span className={requiredMarkStyle}>*</span> : null}
        </span>
        <p className={TopAddonDescriptionStyle}>{description}</p>
      </label>
    </div>
  );
});

FieldBoxLabel.displayName = 'FieldBoxLabel';
