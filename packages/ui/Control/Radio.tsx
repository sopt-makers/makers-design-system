import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { controlLabel, controlWrapper, labelColor, radio } from "./style.css";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'sm' | 'lg';
    checked?: boolean;
    color?: 'white';
  }


  const Radio = forwardRef<HTMLInputElement, RadioProps>(
    ({ checked = false, label, size = 'sm', color = 'white', onChange, ...props }, ref) => {
        return (
            <label className={controlWrapper} >
                <input checked={checked} className={radio[size]} onChange={onChange} ref={ref} type="radio" {...props}/>
                <p className={`${controlLabel[size]} ${labelColor[color]}`}>{label ? label : null}</p>
            </label>
        );
    }
);
Radio.displayName = 'Radio';

export default Radio;