import { HTMLAttributes, forwardRef } from 'react';

interface IconLinkedinProps extends HTMLAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
}

const IconLinkedin = forwardRef<SVGSVGElement, IconLinkedinProps>((props, ref) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_8887_2613)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.38475 7.12399C8.38475 7.87105 7.81593 8.47562 6.92639 8.47562C6.07151 8.47562 5.50269 7.87105 5.52029 7.12399C5.50269 6.34063 6.0715 5.75366 6.94343 5.75366C7.81591 5.75366 8.36769 6.34063 8.38475 7.12399ZM5.59181 18.2445V9.54339H8.29617V18.2445H5.59181ZM10.3923 9.5445C10.4281 10.3097 10.4638 11.235 10.4638 12.3204H10.4649V18.2462H13.1693V13.2281C13.1693 12.9783 13.2045 12.7297 13.276 12.5514C13.4537 12.0536 13.8982 11.5376 14.6458 11.5376C15.6245 11.5376 16.0156 12.3022 16.0156 13.4239V18.2462H18.72V13.085C18.72 10.5237 17.3854 9.34921 15.6063 9.34921C14.165 9.34921 13.2755 10.1848 12.9195 10.7366H12.8662L12.7413 9.5445H10.3923Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8887_2613'>
          <rect width={width} height={height} fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
});

export default IconLinkedin;
