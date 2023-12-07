import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconCheckProps extends HTMLAttributes<SVGSVGElement> {}

const IconCheck = forwardRef<SVGSVGElement, IconCheckProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default IconCheck;
