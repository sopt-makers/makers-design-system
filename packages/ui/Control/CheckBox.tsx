import type { InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import { IconCheck } from "@sopt-makers/icons";
import theme from "../theme.css";
import {
  check,
  checkBox,
  checkBoxChecked,
  checkBoxInput,
  controlLabel,
  controlWrapper,
} from "./style.css";

export interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  size?: "sm" | "lg";
  checked?: boolean;
  color?: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ checked = false, label, size = "sm", color = theme.colors.gray10, ...props }, ref) => {
    return (
      <label className={controlWrapper}>
        <input className={checkBoxInput} ref={ref} type="checkbox" {...props} />
        <div className={`${checkBox[size]} ${checkBoxChecked[`${checked}`]}`}>
          {checked ? <IconCheck className={check[size]} /> : null}
        </div>
        {label ? (
          <p className={controlLabel[size]} style={{ color }}>{label}</p>
        ) : null}
      </label>
    );
  }
);
CheckBox.displayName = "CheckBox";

export default CheckBox;
