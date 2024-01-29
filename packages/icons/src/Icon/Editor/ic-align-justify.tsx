import React, { HTMLAttributes, forwardRef } from "react";

interface IconAlignJustifyProps extends HTMLAttributes<SVGSVGElement> {}

const IconAlignJustify = forwardRef<SVGSVGElement, IconAlignJustifyProps>(
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
          d="M21 10H3M21 18H3M21 6H3M21 14H3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconAlignJustify;
