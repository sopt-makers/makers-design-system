import React, { HTMLAttributes, forwardRef } from "react";

interface IconChevronDownProps extends HTMLAttributes<SVGSVGElement> {}

const IconChevronDown = forwardRef<SVGSVGElement, IconChevronDownProps>(
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
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconChevronDown;
