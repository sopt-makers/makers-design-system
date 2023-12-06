import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconAlignCenterProps extends HTMLAttributes<SVGSVGElement> {}

const IconAlignCenter = forwardRef<SVGSVGElement, IconAlignCenterProps>(
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
          d="M18 10H6M21 6H3M21 14H3M18 18H6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconAlignCenter;
