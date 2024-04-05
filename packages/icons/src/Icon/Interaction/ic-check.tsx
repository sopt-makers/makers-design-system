import { HTMLAttributes, forwardRef } from "react";

interface IconCheckProps extends HTMLAttributes<SVGSVGElement> {}

const IconCheck = forwardRef<SVGSVGElement, IconCheckProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 10.6L9.33333 16L20 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default IconCheck;
