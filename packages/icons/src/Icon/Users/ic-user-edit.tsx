import React, { HTMLAttributes, forwardRef } from "react";

interface IconUserEditProps extends HTMLAttributes<SVGSVGElement> {}

const IconUserEdit = forwardRef<SVGSVGElement, IconUserEditProps>(
  (props, ref) => {
    return (
      <svg
        {...props}
        ref={ref}
        fill="none"
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1062_556)">
          <path
            d="M12 15.5H10.5C9.10444 15.5 8.40665 15.5 7.83886 15.6722C6.56045 16.06 5.56004 17.0605 5.17224 18.3389C5 18.9067 5 19.6044 5 21M17.5 7.5C17.5 9.98528 15.4853 12 13 12C10.5147 12 8.5 9.98528 8.5 7.5C8.5 5.01472 10.5147 3 13 3C15.4853 3 17.5 5.01472 17.5 7.5ZM14 21L17.1014 20.1139C17.2499 20.0715 17.3241 20.0502 17.3934 20.0184C17.4549 19.9902 17.5134 19.9558 17.5679 19.9158C17.6293 19.8707 17.6839 19.8161 17.7932 19.7068L24.25 13.25C24.9404 12.5597 24.9404 11.4403 24.25 10.75C23.5597 10.0596 22.4404 10.0596 21.75 10.75L15.2932 17.2068C15.1839 17.3161 15.1293 17.3707 15.0842 17.4321C15.0442 17.4866 15.0098 17.5451 14.9816 17.6066C14.9497 17.6759 14.9285 17.7501 14.8861 17.8987L14 21Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_1062_556"
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
              result="effect1_dropShadow_1062_556"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1062_556"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    );
  }
);

export default IconUserEdit;
