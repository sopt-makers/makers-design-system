import type { HTMLAttributes } from 'react';

type CloseIconProps = HTMLAttributes<SVGSVGElement>;

function CloseIcon({ className, ...props }: CloseIconProps) {
  return (
    <svg
      className={className}
      fill='none'
      height='19'
      viewBox='0 0 18 19'
      width='18'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M13.5 4.81531L4.5 13.8153M4.5 4.81531L13.5 13.8153'
        stroke='#F0F0F0'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.125'
      />
    </svg>
  );
}

export default CloseIcon;
