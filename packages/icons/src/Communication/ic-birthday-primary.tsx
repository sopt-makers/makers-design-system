import { HTMLAttributes, forwardRef } from 'react';

interface IconBirthdayPrimaryProps extends HTMLAttributes<SVGSVGElement> {}

const IconBirthdayPrimary = forwardRef<SVGSVGElement, IconBirthdayPrimaryProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.06421 13.2559V12.901C3.06421 11.2751 3.06421 10.4621 3.38857 9.84105C3.67388 9.29477 4.12913 8.85063 4.68909 8.57229C5.32568 8.25586 7.15099 8.25586 8.81766 8.25586H13.1823C14.849 8.25586 16.6743 8.25586 17.3109 8.57229C17.8709 8.85063 18.3261 9.29477 18.6114 9.84105C18.9358 10.4621 18.9358 11.2751 18.9358 12.901V13.2559'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <rect
        x='1'
        y='13.2559'
        width='20'
        height='8.43652'
        rx='3'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M11 1.30762C10.4375 1.8294 9.5 2.89549 9.5 4.22394C9.5 4.63936 9.65804 5.03777 9.93934 5.33151C10.2206 5.62526 10.6022 5.79028 11 5.79028C11.3978 5.79028 11.7794 5.62526 12.0607 5.33151C12.342 5.03777 12.5 4.63936 12.5 4.22394C12.5 2.89549 11.5625 1.8294 11 1.30762Z'
        stroke='currentColor'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path d='M11 5.66382V8.25586' stroke='currentColor' stroke-width='1.5' stroke-linejoin='round' />
    </svg>
  );
});

export default IconBirthdayPrimary;
