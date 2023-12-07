import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconArrowUpRightProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowUpRight = forwardRef<SVGSVGElement, IconArrowUpRightProps>(
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
          d="M7 17L17 7M17 7H7M17 7V17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowUpRight;
