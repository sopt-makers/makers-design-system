import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconMenuProps extends HTMLAttributes<SVGSVGElement> {}

const IconMenu = forwardRef<SVGSVGElement, IconMenuProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H15"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});

export default IconMenu;
