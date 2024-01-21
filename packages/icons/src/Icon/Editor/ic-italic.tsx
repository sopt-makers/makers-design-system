import React, { HTMLAttributes, forwardRef } from "react";

interface IconItalicProps extends HTMLAttributes<SVGSVGElement> {}

const IconItalic = forwardRef<SVGSVGElement, IconItalicProps>((props, ref) => {
  return (
    <svg
      {...props}
      ref={ref}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 4H10M14 20H5M15 4L9 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export default IconItalic;
