import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconArrowUpLeftProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowUpLeft = forwardRef<SVGSVGElement, IconArrowUpLeftProps>(
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
          d="M17 17L7 7M7 7V17M7 7H17"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowUpLeft;
