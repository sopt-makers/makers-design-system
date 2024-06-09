import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { controlLabel, controlWrapper, labelColor, radio } from "./style.css";

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: "sm" | "lg";
  checked?: boolean;
  color?: "white";
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ checked = false, label, size = "sm", color = "white", ...props }, ref) => {
    return (
      <label className={controlWrapper}>
        <input
          checked={checked}
          className={radio[size]}
          ref={ref}
          type="radio"
          {...props}
        />
        {label ? (
          <p className={`${controlLabel[size]} ${labelColor[color]}`}>label</p>
        ) : null}
      </label>
    );
  }
);
Radio.displayName = "Radio";

export default Radio;
