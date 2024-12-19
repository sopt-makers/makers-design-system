import { HTMLAttributes, forwardRef } from 'react';

interface IconKakaoProps extends HTMLAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
}

const IconKakao = forwardRef<SVGSVGElement, IconKakaoProps>((props, ref) => {
  const { width = 24, height = 24 } = props;

  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_8887_2615)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12 23.5C18.3513 23.5 23.5 18.3513 23.5 12C23.5 5.64873 18.3513 0.5 12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 18.3513 5.64873 23.5 12 23.5ZM5.10004 10.881C5.10004 7.92781 8.19124 5.52661 12 5.52661C15.8088 5.52661 18.9 7.92091 18.9 10.881C18.9 13.8411 15.8088 16.2423 12 16.2423C11.8543 16.2423 11.7085 16.2301 11.5636 16.2179C11.4204 16.2059 11.2781 16.194 11.1375 16.194L7.78414 18.4227C7.73667 18.4555 7.68031 18.473 7.62261 18.4729C7.56491 18.4727 7.50864 18.4549 7.46133 18.4219C7.41403 18.3889 7.37796 18.3421 7.35796 18.288C7.33796 18.2339 7.33499 18.175 7.34944 18.1191L8.11534 15.3108C6.29374 14.331 5.10004 12.7233 5.10004 10.881Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8887_2615'>
          <rect width={width} height={height} fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
});

export default IconKakao;
