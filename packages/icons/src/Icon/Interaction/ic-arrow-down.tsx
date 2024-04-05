import { HTMLAttributes, forwardRef } from "react";

interface IconArrowDownProps extends HTMLAttributes<SVGSVGElement> {}

const IconArrowDown = forwardRef<SVGSVGElement, IconArrowDownProps>(
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
          d="M12 5V19M12 19L19 12M12 19L5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconArrowDown;
