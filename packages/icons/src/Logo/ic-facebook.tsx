import { HTMLAttributes, forwardRef } from 'react';

interface IconFacebookProps extends HTMLAttributes<SVGSVGElement> {}

const IconFacebook = forwardRef<SVGSVGElement, IconFacebookProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M13.884 23.9256C19.6164 23.0217 24 18.0591 24 12.0726C24 5.44521 18.6274 0.0726318 12 0.0726318C5.37258 0.0726318 0 5.44521 0 12.0726C0 18.0632 4.38971 23.0286 10.128 23.9275V15.5407H7.07997V12.0727H10.128V9.43269C10.128 6.42069 11.916 4.76469 14.664 4.76469C15.972 4.76469 17.352 5.00469 17.352 5.00469V7.95669H15.84C14.352 7.95669 13.884 8.88069 13.884 9.82869V12.0847H17.208L16.68 15.5527H13.884V23.9256Z'
        fill='currentColor'
      />
    </svg>
  );
});

export default IconFacebook;
