import { HTMLAttributes, forwardRef } from "react";

interface IconArchiveProps extends HTMLAttributes<SVGSVGElement> {}

const IconLetterSpacing = forwardRef<SVGSVGElement, IconArchiveProps>(
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
          d="M9 13L15 13M7 17L11.2717 7.60225C11.5031 7.09323 11.6188 6.83872 11.7791 6.75976C11.9184 6.69115 12.0816 6.69115 12.2209 6.75976C12.3812 6.83872 12.4969 7.09323 12.7283 7.60225L17 17M21 3V21M3 3L3 21"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconLetterSpacing;
