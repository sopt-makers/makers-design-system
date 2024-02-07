import React, { InputHTMLAttributes, forwardRef } from 'react';
import IconCheck from '../../icons/src/Icon/Interaction/ic-check';
import {
  check,
  checkBox,
  checkBoxChecked,
  checkBoxInput,
  checkBoxLabel,
  checkBoxWrapper,
  labelColor,
} from './style.css';

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'small' | 'large';
  checked?: boolean;
  color?: 'white';
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked = false, label, size = 'small', color = 'white', onChange, ...props }, ref) => {
    return (
      <label className={checkBoxWrapper}>
        <input ref={ref} type="checkbox" onChange={onChange} className={checkBoxInput} {...props} />
        <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
          {checked && <IconCheck className={check[size]} />}
        </div>
        <p className={`${checkBoxLabel[size]} ${labelColor[color]}`}>{label && label}</p>
      </label>
    );
  }
);

export default CheckBox;
