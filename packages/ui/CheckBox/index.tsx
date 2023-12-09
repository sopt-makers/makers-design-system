import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';
import {
  checkBox,
  checkBoxChecked,
  checkBoxInput,
  checkBoxLabel,
  checkBoxWrapper,
} from './style.css';

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'small' | 'large';
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked = false, label, size = 'small', onChange, ...props }, ref) => {
    return (
      <label className={checkBoxWrapper}>
        <input ref={ref} type="checkbox" onChange={onChange} className={checkBoxInput} {...props} />
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
