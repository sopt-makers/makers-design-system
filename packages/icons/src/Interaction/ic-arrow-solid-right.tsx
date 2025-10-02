import { HTMLAttributes, forwardRef } from "react";
  
  interface IconArrowSolidRightProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconArrowSolidRight = forwardRef<SVGSVGElement, IconArrowSolidRightProps>(
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
            d="M9 8.3L9 15.7C9 16.0296 9.37631 16.2178 9.64 16.02L14.5733 12.32C14.7867 12.16 14.7867 11.84 14.5733 11.68L9.64 7.98C9.37631 7.78223 9 7.97038 9 8.3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconArrowSolidRight;