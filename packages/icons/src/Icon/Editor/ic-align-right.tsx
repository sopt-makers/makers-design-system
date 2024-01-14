import React, { HTMLAttributes, forwardRef } from "react";

interface IconAlignRightProps extends HTMLAttributes<SVGSVGElement> {}

const IconAlignRight = forwardRef<SVGSVGElement, IconAlignRightProps>(
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
          d="M21 10H8M21 6H4M21 14H4M21 18H8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconAlignRight;
