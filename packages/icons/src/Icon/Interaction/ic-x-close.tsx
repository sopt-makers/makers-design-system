import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconXCloseProps extends HTMLAttributes<SVGSVGElement> {}

const IconXClose = forwardRef<SVGSVGElement, IconXCloseProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default IconXClose;
