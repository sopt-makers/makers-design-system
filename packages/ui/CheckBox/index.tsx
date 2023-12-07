import { InputHTMLAttributes, forwardRef } from 'react';
import {
  checkBox,
  checkBoxChecked,
  checkBoxInput,
  checkBoxLabel,
  checkBoxWrapper,
} from './style.css';

interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'small' | 'large';
  checked?: boolean;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked = false, label, size = 'small', ...props }, ref) => {
    return (
      <label className={checkBoxWrapper}>
        <input ref={ref} type="checkbox" {...props} className={checkBoxInput} />
        <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
          {checked && (
            //   TODO: 체크 아이콘 삽입
            <></>
          )}
        </div>
        <p className={checkBoxLabel[size]}>{label && label}</p>
      </label>
    );
  }
);

export default CheckBox;
