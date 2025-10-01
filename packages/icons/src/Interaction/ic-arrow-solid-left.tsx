import { HTMLAttributes, forwardRef } from "react";
  
  interface IconArrowSolidLeftProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconArrowSolidLeft = forwardRef<SVGSVGElement, IconArrowSolidLeftProps>(
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
            d="M15 15.7L15 8.3C15 7.97038 14.6237 7.78223 14.36 7.98L9.42667 11.68C9.21333 11.84 9.21333 12.16 9.42667 12.32L14.36 16.02C14.6237 16.2178 15 16.0296 15 15.7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconArrowSolidLeft;