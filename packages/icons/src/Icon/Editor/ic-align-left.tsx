import React, { HTMLAttributes, forwardRef } from "react";

interface IconAlignLeftProps extends HTMLAttributes<SVGSVGElement> {}

const IconAlignLeft = forwardRef<SVGSVGElement, IconAlignLeftProps>(
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
          d="M16 10H3M20 6H3M20 14H3M16 18H3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconAlignLeft;
