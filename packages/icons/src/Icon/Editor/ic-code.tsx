import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconCodeProps extends HTMLAttributes<SVGSVGElement> {}

const IconCode = forwardRef<SVGSVGElement, IconCodeProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 17L22 12L17 7M7 7L2 12L7 17M14 3L10 21"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default IconCode;
