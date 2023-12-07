import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconArrowUpProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowUp = forwardRef<SVGSVGElement, IconArrowUpProps>(
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
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowUp;
