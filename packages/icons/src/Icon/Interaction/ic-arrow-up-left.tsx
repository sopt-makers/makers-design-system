import React, { HTMLAttributes, forwardRef } from "react";

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
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowUpLeft;
