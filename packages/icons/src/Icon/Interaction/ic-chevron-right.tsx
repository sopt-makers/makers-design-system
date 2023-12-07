import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconChevronRightProps extends HTMLAttributes<SVGSVGElement> {}

const IconChevronRight = forwardRef<SVGSVGElement, IconChevronRightProps>(
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
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconChevronRight;
