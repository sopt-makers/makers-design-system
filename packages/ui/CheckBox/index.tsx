import { InputHTMLAttributes, forwardRef } from "react";
import { checkBox, checkBoxChecked, checkBoxContainer, checkBoxInput, checkBoxLabel, checkBoxWrapper } from "./style.css";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?:string;
    size?:"small"|"large";
    checked?:boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ checked = false, label, size = 'small', ...props }, ref) => {
    return (
        <section className={checkBoxContainer}>
            <label className={checkBoxWrapper}>
                <input ref={ref} type='checkbox' {...props} className={checkBoxInput}/>
                <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
                {checked && 
                //   TODO: 체크 아이콘 삽입
                <></>}
                </div>
                <p className={checkBoxLabel[size]}>{label&&label}</p>
            </label>
        </section>
    );
  });
  
  export default Checkbox;