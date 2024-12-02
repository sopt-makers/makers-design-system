import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { requiredMarkStyle, TopAddonDescriptionStyle, TopAddonLabelStyle } from '../style.css';

export interface FieldBoxLabelProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  description?: string;
  required?: boolean;
}

export const FieldBoxLabel = forwardRef<HTMLDivElement, FieldBoxLabelProps>((props, forwardedRef) => {
  const { required = false, label, description } = props;

  return (
    <div aria-label={label} aria-required={required} ref={forwardedRef}>
      <label className={TopAddonLabelStyle}>
        {label ? (
          <span>
            {label}
            {required ? <span className={requiredMarkStyle}>*</span> : null}
          </span>
        ) : null}
        {description ? <p className={TopAddonDescriptionStyle}>{description}</p> : null}
      </label>
    </div>
  );
});

FieldBoxLabel.displayName = 'FieldBoxLabel';
