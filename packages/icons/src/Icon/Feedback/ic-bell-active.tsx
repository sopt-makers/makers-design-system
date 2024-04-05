import { HTMLAttributes, forwardRef } from "react";

interface IconBellActiveProps extends HTMLAttributes<SVGSVGElement> {}

const IconBellActive = forwardRef<SVGSVGElement, IconBellActiveProps>(
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
          d="M9.3542 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8075 17 20.4056 17 20.5383 16.9016C20.6852 16.7926 20.7239 16.7231 20.7388 16.5407C20.7522 16.3761 20.385 15.786 19.6505 14.6057C18.877 13.3626 19 13.5 18.5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.2678 2.73223C20.2441 3.70854 20.2441 5.29146 19.2678 6.26777C18.2915 7.24408 16.7085 7.24408 15.7322 6.26777C14.7559 5.29146 14.7559 3.70854 15.7322 2.73223C16.7085 1.75592 18.2915 1.75592 19.2678 2.73223Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconBellActive;
