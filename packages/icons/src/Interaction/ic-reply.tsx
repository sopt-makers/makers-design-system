import { HTMLAttributes, forwardRef } from "react";
  
  interface IconReplyProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconReply = forwardRef<SVGSVGElement, IconReplyProps>(
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
            d="M21 15L7.5 15C5.01472 15 3 12.9853 3 10.5C3 8.01472 5.01472 6 7.5 6L12 6M21 15L17 19M21 15L17 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconReply;