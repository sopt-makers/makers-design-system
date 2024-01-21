import React, { HTMLAttributes, forwardRef } from "react";

interface IconSwitchHorizontalProps extends HTMLAttributes<SVGSVGElement> {}

const IconSwitchHorizontal = forwardRef<
  SVGSVGElement,
  IconSwitchHorizontalProps
>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 17H4M4 17L8 13M4 17L8 21M4 7H20M20 7L16 3M20 7L16 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default IconSwitchHorizontal;
