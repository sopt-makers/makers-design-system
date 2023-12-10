import React, { HTMLAttributes, forwardRef } from "react";

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
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default IconMenu;
