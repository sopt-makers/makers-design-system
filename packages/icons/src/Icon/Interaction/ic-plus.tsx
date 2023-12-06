import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconPlusProps extends HTMLAttributes<SVGSVGElement> {}

const IconPlus = forwardRef<SVGSVGElement, IconPlusProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default IconPlus;
