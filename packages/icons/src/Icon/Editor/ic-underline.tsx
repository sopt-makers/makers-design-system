import React, { HTMLAttributes, forwardRef } from "react";

interface IconUnderlineProps extends HTMLAttributes<SVGSVGElement> {}

const IconUnderline = forwardRef<SVGSVGElement, IconUnderlineProps>(
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
          d="M18 4V11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11V4M4 21H20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconUnderline;
