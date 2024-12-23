import { HTMLAttributes, forwardRef } from 'react';

interface IconLocationFilledProps extends HTMLAttributes<SVGSVGElement> {}

const IconLocationFilled = forwardRef<SVGSVGElement, IconLocationFilledProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M3.73697 9.91307C3.73697 5.34951 7.43646 1.65002 12 1.65002C16.5636 1.65002 20.2631 5.34951 20.2631 9.91307C20.2631 11.163 19.8561 12.453 19.2693 13.674C18.6796 14.9012 17.8857 16.1046 17.0591 17.1941C15.4065 19.3726 13.5754 21.1575 12.8395 21.8469C12.3661 22.2904 11.6339 22.2905 11.1605 21.8469C10.4246 21.1575 8.59356 19.3726 6.94089 17.1941C6.11437 16.1046 5.32047 14.9012 4.7307 13.674C4.14389 12.453 3.73697 11.163 3.73697 9.91307ZM8.85031 9.60019C8.85031 7.8605 10.2606 6.4502 12.0003 6.4502C13.74 6.4502 15.1503 7.8605 15.1503 9.60019C15.1503 11.3399 13.74 12.7502 12.0003 12.7502C10.2606 12.7502 8.85031 11.3399 8.85031 9.60019Z'
        fill='currentColor'
      />
    </svg>
  );
});

export default IconLocationFilled;
