import React, { HTMLAttributes, forwardRef } from "react";

interface IconChevronLeftProps extends HTMLAttributes<SVGSVGElement> {}

const IconChevronLeft = forwardRef<SVGSVGElement, IconChevronLeftProps>(
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
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconChevronLeft;
