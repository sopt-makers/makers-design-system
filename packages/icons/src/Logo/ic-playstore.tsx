import { HTMLAttributes, forwardRef } from 'react';

interface IconPlaystoreProps extends HTMLAttributes<SVGSVGElement> {}

const IconPlaystore = forwardRef<SVGSVGElement, IconPlaystoreProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6.41455 2.31884L15.3653 7.48293L11.4067 11.4106L3.21356 3.28726C3.36883 2.96299 3.59918 2.67865 3.88747 2.45948C4.28089 2.16038 4.76064 1.99902 5.2536 2C5.66176 2.00111 6.06234 2.11112 6.41455 2.31884Z'
        fill='currentColor'
      />
      <path d='M3 4.245V19.7515L10.8171 11.9956L3 4.245Z' fill='currentColor' />
      <path
        d='M11.4069 12.5803L3.21269 20.7103C3.30469 20.903 3.42348 21.0823 3.56601 21.2426C3.79586 21.501 4.08134 21.7031 4.40064 21.8334C4.71994 21.9637 5.0646 22.0188 5.40827 21.9944C5.75193 21.97 6.08552 21.8668 6.38351 21.6927L15.3886 16.5282L11.4069 12.5803Z'
        fill='currentColor'
      />
      <path
        d='M16.1412 16.1049L19.8183 13.9907C20.1748 13.8027 20.4733 13.5202 20.6816 13.1736C20.8899 12.827 21 12.4296 21 12.0245C21 11.6194 20.8899 11.222 20.6816 10.8754C20.4733 10.5288 20.1748 10.2463 19.8183 10.0584H19.8308L16.1109 7.91304L11.9964 11.9954L16.1412 16.1049Z'
        fill='currentColor'
      />
    </svg>
  );
});

export default IconPlaystore;
