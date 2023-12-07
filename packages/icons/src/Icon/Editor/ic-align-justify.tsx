import React from "react";
import { HTMLAttributes, forwardRef } from "react";

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
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconAlignJustify;
