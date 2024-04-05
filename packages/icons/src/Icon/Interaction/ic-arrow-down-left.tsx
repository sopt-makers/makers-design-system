import { HTMLAttributes, forwardRef } from "react";

interface IconArrowDownLeftProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowDownLeft = forwardRef<SVGSVGElement, IconArrowDownLeftProps>(
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
          d="M17 7L7 17M7 17H17M7 17V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowDownLeft;
