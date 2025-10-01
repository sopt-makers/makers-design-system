import { HTMLAttributes, forwardRef } from "react";
  
  interface IconArrowSolidDownProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconArrowSolidDown = forwardRef<SVGSVGElement, IconArrowSolidDownProps>(
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
            d="M15.7 9H8.3C7.97038 9 7.78223 9.37631 7.98 9.64L11.68 14.5733C11.84 14.7867 12.16 14.7867 12.32 14.5733L16.02 9.64C16.2178 9.37631 16.0296 9 15.7 9Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconArrowSolidDown;