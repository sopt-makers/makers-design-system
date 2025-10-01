import { HTMLAttributes, forwardRef } from "react";
  
  interface IconImagePlusFilledProps extends HTMLAttributes<SVGSVGElement> {}
  
  const IconImagePlusFilled = forwardRef<SVGSVGElement, IconImagePlusFilledProps>(
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
            d="M18.8833 0.867188C19.2975 0.867188 19.6333 1.20297 19.6333 1.61719V3.86719H21.8833C22.2975 3.86719 22.6333 4.20297 22.6333 4.61719C22.6333 5.0314 22.2975 5.36719 21.8833 5.36719H19.6333V7.61719C19.6333 8.0314 19.2975 8.36719 18.8833 8.36719C18.4691 8.36719 18.1333 8.0314 18.1333 7.61719V5.36719H15.8833C15.4691 5.36719 15.1333 5.0314 15.1333 4.61719C15.1333 4.20297 15.4691 3.86719 15.8833 3.86719H18.1333V1.61719C18.1333 1.20297 18.4691 0.867188 18.8833 0.867188Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default IconImagePlusFilled;