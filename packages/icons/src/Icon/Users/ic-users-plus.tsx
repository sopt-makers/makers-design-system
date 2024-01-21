import React, { HTMLAttributes, forwardRef } from "react";

interface IconUsersPlusProps extends HTMLAttributes<SVGSVGElement> {}

const IconUsersPlus = forwardRef<SVGSVGElement, IconUsersPlusProps>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        fill="none"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1062_550)">
          <path
            d="M22 21V15M19 18H25M15 15H11C9.13623 15 8.20435 15 7.46927 15.3045C6.48915 15.7105 5.71046 16.4892 5.30448 17.4693C5 18.2044 5 19.1362 5 21M18.5 3.29076C19.9659 3.88415 21 5.32131 21 7C21 8.67869 19.9659 10.1159 18.5 10.7092M16.5 7C16.5 9.20914 14.7091 11 12.5 11C10.2909 11 8.5 9.20914 8.5 7C8.5 4.79086 10.2909 3 12.5 3C14.7091 3 16.5 4.79086 16.5 7Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1062_550"
            x="-1"
            y="0"
            width="32"
            height="32"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1062_550"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1062_550"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

export default IconUsersPlus;
