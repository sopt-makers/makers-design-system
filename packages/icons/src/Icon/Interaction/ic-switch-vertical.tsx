import React from "react";
import { HTMLAttributes, forwardRef } from "react";

interface IconSwitchVerticalProps extends HTMLAttributes<SVGSVGElement> {}

const IconSwitchVertical = forwardRef<SVGSVGElement, IconSwitchVerticalProps>(
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
          d="M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
);

export default IconSwitchVertical;
