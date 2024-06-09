import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { IconCheck } from '@sopt-makers/icons';
import { check, checkBox, checkBoxChecked, checkBoxInput, controlLabel, controlWrapper, labelColor } from './style.css';


export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'sm' | 'lg';
  checked?: boolean;
  color?: 'white';
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked = false, label, size = 'sm', color = 'white', onChange, ...props }, ref) => {
    return (
      <label className={controlWrapper}>
        <input className={checkBoxInput} onChange={onChange} ref={ref} type="checkbox" {...props} />
        <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
          {checked ? <IconCheck className={check[size]} /> : null}
        </div>
        {label ? <p className={`${controlLabel[size]} ${labelColor[color]}`}>label</p> : null}
      </label>
    );
  }
);
CheckBox.displayName = 'CheckBox';

export default CheckBox;
