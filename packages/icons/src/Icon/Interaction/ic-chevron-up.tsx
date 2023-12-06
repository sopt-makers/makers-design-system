import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconChevronUpProps extends HTMLAttributes<SVGSVGElement> {}

const IconChevronUp = forwardRef<SVGSVGElement, IconChevronUpProps>(
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
          d="M18 15L12 9L6 15"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconChevronUp;
