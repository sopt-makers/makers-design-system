import { HTMLAttributes, forwardRef } from "react";

interface IconSlidersProps extends HTMLAttributes<SVGSVGElement> {}

const IconSliders = forwardRef<SVGSVGElement, IconSlidersProps>(
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
          d="M3 5L9 5M9 5C9 6.10457 9.89543 7 11 7C12.1046 7 13 6.10457 13 5M9 5C9 3.89543 9.89543 3 11 3C12.1046 3 13 3.89543 13 5M13 5L21 5M3 12L12.5 12M17 12L21 12M17 12C17 10.8954 16.1046 10 15 10C13.8954 10 13 10.8954 13 12C13 13.1046 13.8954 14 15 14C16.1046 14 17 13.1046 17 12ZM3 19L7 19M7 19C7 20.1046 7.89543 21 9 21C10.1046 21 11 20.1046 11 19M7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19M11 19L21 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconSliders;
