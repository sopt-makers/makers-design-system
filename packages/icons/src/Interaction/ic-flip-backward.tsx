import { HTMLAttributes, forwardRef } from "react";

interface IconFlipBackwardProps extends HTMLAttributes<SVGSVGElement> {}

const IconFlipBackward = forwardRef<SVGSVGElement, IconFlipBackwardProps>(
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
          d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconFlipBackward;
