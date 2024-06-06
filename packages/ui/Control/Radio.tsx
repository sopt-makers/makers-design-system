import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { controlLabel, controlWrapper, labelColor } from "./style.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'small' | 'large';
    checked?: boolean;
    color?: 'white';
  }


  const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ checked = false, label, size = 'small', color = 'white', onChange, ...props }, ref) => {
        return (
            <label className={controlWrapper} >
                <input className="" onChange={onChange} ref={ref} type="radio" {...props}/>
                <p className={`${controlLabel[size]} ${labelColor[color]}`}>{label ? label : null}</p>
            </label>
        );
    }
);
Radio.displayName = 'Radio';

export default Radio;