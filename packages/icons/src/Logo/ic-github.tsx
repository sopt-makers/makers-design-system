import { HTMLAttributes, forwardRef } from 'react';

interface IconGithubProps extends HTMLAttributes<SVGSVGElement> {}

const IconGithub = forwardRef<SVGSVGElement, IconGithubProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_8887_2547)'>
        <path
          d='M24 11.9999C24 18.6272 18.6274 23.9997 12 23.9997C5.37258 23.9997 0 18.6272 0 11.9999C0 5.37252 5.37258 0 12 0C18.6274 0 24 5.37252 24 11.9999Z'
          fill='currentColor'
        />
        <path
          d='M1.68811 18.1412C3.14889 20.5884 5.45639 22.4717 8.20636 23.3872C8.80674 23.497 9.02553 23.1264 9.02553 22.8082C9.02553 22.6764 9.02332 22.4436 9.02036 22.1321C9.01693 21.7713 9.01249 21.3049 9.00933 20.7676C5.67147 21.4925 4.96722 19.1588 4.96722 19.1588C4.42134 17.7731 3.63458 17.404 3.63458 17.404C2.54504 16.6593 3.71709 16.674 3.71709 16.674C4.92154 16.7594 5.55508 17.9108 5.55508 17.9108C6.62546 19.7444 8.364 19.2147 9.04763 18.9083C9.15666 18.1326 9.46606 17.6037 9.80935 17.3038C7.14481 17.0011 4.34326 15.9712 4.34326 11.373C4.34326 10.0632 4.81104 8.99208 5.57865 8.15302C5.45489 7.84952 5.04309 6.6296 5.69578 4.97727C5.69578 4.97727 6.70355 4.65461 8.99607 6.2075C9.953 5.94156 10.9799 5.80823 12.0002 5.80381C13.019 5.80823 14.0459 5.94156 15.0044 6.2075C17.2954 4.65461 18.301 4.97727 18.301 4.97727C18.9559 6.6296 18.5441 7.84952 18.4203 8.15302C19.1894 8.99208 19.6542 10.0632 19.6542 11.373C19.6542 15.983 16.8482 16.9974 14.1749 17.2943C14.6058 17.6648 14.9896 18.397 14.9896 19.5168C14.9896 20.5893 14.983 21.5234 14.9787 22.1423C14.9765 22.4487 14.9749 22.6779 14.9749 22.8082C14.9749 23.1294 15.1907 23.5028 15.8 23.3857C17.9906 22.6545 19.9003 21.3094 21.3242 19.5544C19.1241 22.2666 15.7645 23.9997 12 23.9997C7.61678 23.9997 3.78229 21.6501 1.68811 18.1412Z'
          fill='#1E1E1E'
        />
      </g>
      <defs>
        <clipPath id='clip0_8887_2547'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
});

export default IconGithub;