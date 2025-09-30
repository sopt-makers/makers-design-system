import { HTMLAttributes, forwardRef } from "react";
  
  interface IconArrowSolidUpProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconArrowSolidUp = forwardRef<SVGSVGElement, IconArrowSolidUpProps>(
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
            d="M8.3 15L15.7 15C16.0296 15 16.2178 14.6237 16.02 14.36L12.32 9.42667C12.16 9.21333 11.84 9.21333 11.68 9.42667L7.98 14.36C7.78223 14.6237 7.97038 15 8.3 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconArrowSolidUp;