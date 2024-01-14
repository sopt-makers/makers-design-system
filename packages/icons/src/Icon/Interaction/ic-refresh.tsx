import React, { HTMLAttributes, forwardRef } from "react";

interface IconRefreshProps extends HTMLAttributes<SVGSVGElement> {}

const IconRefresh = forwardRef<SVGSVGElement, IconRefreshProps>(
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
          d="M8.54661 19.7677C10.9457 20.8321 13.8032 20.7743 16.2502 19.3615C20.3157 17.0143 21.7086 11.8158 19.3614 7.75032L19.1114 7.31731M4.63851 16.2504C2.2913 12.185 3.68424 6.98644 7.74972 4.63923C10.1967 3.22646 13.0542 3.16865 15.4533 4.23301M2.49341 16.3341L5.22546 17.0661L5.95751 14.3341M18.0426 9.66614L18.7747 6.93409L21.5067 7.66614"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

export default IconRefresh;
