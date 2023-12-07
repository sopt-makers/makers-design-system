import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconArrowDownRightProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowDownRight = forwardRef<SVGSVGElement, IconArrowDownRightProps>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 7L17 17M17 17V7M17 17H7"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowDownRight;
