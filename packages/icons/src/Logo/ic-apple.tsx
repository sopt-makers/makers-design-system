import { HTMLAttributes, forwardRef } from 'react';

interface IconAppleProps extends HTMLAttributes<SVGSVGElement> {}

const IconApple = forwardRef<SVGSVGElement, IconAppleProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8.95557 21.9477C10.2363 21.9477 10.798 21.0602 12.3933 21.0602C13.9887 21.0602 14.3706 21.914 15.7862 21.914C17.2017 21.914 18.1117 20.5883 18.9993 19.2851C19.9879 17.7909 20.3924 16.3304 20.4261 16.263C20.3362 16.2406 17.6624 15.1059 17.6624 11.949C17.6624 9.20773 19.7745 7.97193 19.8868 7.88205C18.4937 5.81489 16.3704 5.76995 15.7974 5.76995C14.2358 5.76995 12.9551 6.74736 12.1462 6.74736C11.2811 6.74736 10.1352 5.82612 8.77582 5.82612C6.19187 5.82612 3.57422 8.0281 3.57422 12.1737C3.57422 14.7464 4.55163 17.4764 5.74249 19.2402C6.76483 20.7344 7.6636 21.959 8.95557 21.959V21.9477ZM12.2473 5.52279C13.1798 5.52279 14.3594 4.87119 15.0559 4.00613C15.6851 3.21971 16.1457 2.11872 16.1457 1.01773C16.1457 0.87168 16.1345 0.714396 16.1007 0.602051C15.0559 0.646989 13.8089 1.32106 13.0562 2.23106C12.4608 2.92761 11.9215 4.00613 11.9215 5.11835C11.9215 5.27563 11.944 5.44415 11.9664 5.50032C12.0338 5.51156 12.135 5.52279 12.2473 5.52279Z'
        fill='currentColor'
      />
    </svg>
  );
});

export default IconApple;
