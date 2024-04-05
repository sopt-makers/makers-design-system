import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
// eslint-disable-next-line import/no-relative-packages -- 추후 경로 수정 필요
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
        <input className={checkBoxInput} onChange={onChange} ref={ref} type="checkbox" {...props} />
        <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
          {checked ? <IconCheck className={check[size]} /> : null}
        </div>
        <p className={`${checkBoxLabel[size]} ${labelColor[color]}`}>{label ? label : null}</p>
      </label>
    );
  }
);
CheckBox.displayName = 'CheckBox';

export default CheckBox;
