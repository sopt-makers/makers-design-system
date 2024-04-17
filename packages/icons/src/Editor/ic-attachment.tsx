import { HTMLAttributes, forwardRef } from "react";

interface IconAttachmentProps extends HTMLAttributes<SVGSVGElement> {}

const IconAttachment = forwardRef<SVGSVGElement, IconAttachmentProps>(
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
          d="M21.1525 10.899L12.1369 19.9146C10.0866 21.9648 6.7625 21.9648 4.71225 19.9146C2.662 17.8643 2.662 14.5402 4.71225 12.49L13.7279 3.47435C15.0947 2.10751 17.3108 2.10751 18.6776 3.47434C20.0444 4.84118 20.0444 7.05726 18.6776 8.42409L10.0156 17.0862C9.33213 17.7696 8.22409 17.7696 7.54068 17.0862C6.85726 16.4027 6.85726 15.2947 7.54068 14.6113L15.1421 7.00988"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconAttachment;
