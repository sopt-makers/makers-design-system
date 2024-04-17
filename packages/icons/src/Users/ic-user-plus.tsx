import { HTMLAttributes, forwardRef } from "react";

interface IconUserPlusProps extends HTMLAttributes<SVGSVGElement> {}

const IconUserPlus = forwardRef<SVGSVGElement, IconUserPlusProps>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        fill="none"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1062_553)">
          <path
            d="M15 15.5H10.5C9.10444 15.5 8.40665 15.5 7.83886 15.6722C6.56045 16.06 5.56004 17.0605 5.17224 18.3389C5 18.9067 5 19.6044 5 21M22 21V15M19 18H25M17.5 7.5C17.5 9.98528 15.4853 12 13 12C10.5147 12 8.5 9.98528 8.5 7.5C8.5 5.01472 10.5147 3 13 3C15.4853 3 17.5 5.01472 17.5 7.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1062_553"
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
              result="effect1_dropShadow_1062_553"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1062_553"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

export default IconUserPlus;
