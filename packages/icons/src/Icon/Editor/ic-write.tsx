import { HTMLAttributes, forwardRef } from "react";

interface IconTypeStrikethroughProps extends HTMLAttributes<SVGSVGElement> {}

const IconWrite = forwardRef<SVGSVGElement, IconTypeStrikethroughProps>(
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
          d="M8.47834 20.9474L2.82379 22C2.60531 22 2.39577 21.9132 2.24128 21.7587C2.08679 21.6042 2 21.3947 2 21.1762L3.05263 15.5217C3.05273 15.3035 3.13939 15.0942 3.29359 14.9399L15.9924 2.24109C16.1468 2.08672 16.3563 2 16.5747 2C16.7931 2 17.0025 2.08672 17.157 2.24109L21.7589 6.83992C21.9133 6.99439 22 7.20384 22 7.42223C22 7.64062 21.9133 7.85008 21.7589 8.00455L9.06014 20.7064C8.90577 20.8606 8.69653 20.9473 8.47834 20.9474Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.1111 6.44446L17.5555 10.8889"
          stroke="currentColor"
          stroke-width="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconWrite;
