import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import theme from '../theme.css';
import { controlLabel, controlWrapper, radio } from './style.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'lg';
  checked?: boolean;
  color?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ checked = false, label, size = 'sm', color = theme.colors.gray10, ...props }, ref) => {
    return (
      <label className={controlWrapper}>
        <input aria-checked={checked} checked={checked} className={radio[size]} ref={ref} type='radio' {...props} />
        {label ? (
          <p className={controlLabel[size]} style={{ color }}>
            {label}
          </p>
        ) : null}
      </label>
    );
  },
);
Radio.displayName = 'Radio';

export default Radio;
