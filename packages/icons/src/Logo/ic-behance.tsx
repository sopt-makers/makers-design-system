import { HTMLAttributes, forwardRef } from 'react';

interface IconBehanceProps extends HTMLAttributes<SVGSVGElement> {}

const IconBehance = forwardRef<SVGSVGElement, IconBehanceProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_8887_2549)'>
        <path
          d='M8.73179 10.7801C9.08348 10.7801 9.37194 10.6853 9.59323 10.5233C9.81452 10.3612 9.91331 10.0767 9.91331 9.72504C9.91331 9.53142 9.88169 9.34174 9.81847 9.21529C9.75525 9.08884 9.66041 8.99005 9.53001 8.89522C9.40356 8.83199 9.27316 8.76877 9.11509 8.73715C8.95703 8.70554 8.79502 8.70554 8.60534 8.70554H6.75207V10.7841C6.75207 10.7801 8.73179 10.7801 8.73179 10.7801Z'
          fill='currentColor'
        />
        <path
          d='M8.82663 14.5538C9.02026 14.5538 9.20993 14.5222 9.37194 14.4906C9.53001 14.459 9.69202 14.3958 9.81847 14.297C9.94492 14.1982 10.0437 14.1034 10.1385 13.9453C10.2018 13.7872 10.265 13.5936 10.265 13.3684C10.265 12.9218 10.1385 12.6018 9.88169 12.3765C9.62484 12.1829 9.27316 12.0881 8.85824 12.0881H6.75207V14.5499H8.82663V14.5538Z'
          fill='currentColor'
        />
        <path
          d='M16.0224 10.8117C16.4373 10.8117 16.789 10.9382 17.0142 11.1634C17.2355 11.3886 17.3975 11.7087 17.4608 12.1829H14.584C14.584 12.0762 14.6066 11.9666 14.6326 11.84C14.6374 11.8166 14.6423 11.7926 14.6473 11.768C14.6789 11.6099 14.7461 11.4479 14.8725 11.3215C14.8772 11.3168 14.8819 11.3121 14.8865 11.3074C15.0084 11.1854 15.1326 11.0611 15.319 10.9698C15.5127 10.8749 15.7339 10.8117 16.0224 10.8117Z'
          fill='currentColor'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.98864 7.2C9.40356 7.2 9.78686 7.23161 10.1385 7.32645C10.4902 7.38968 10.7787 7.52008 11.0355 7.67814C11.2924 7.8362 11.4821 8.06144 11.6125 8.3499C11.7389 8.63837 11.8061 8.99005 11.8061 9.37335C11.8061 9.81988 11.7113 10.2032 11.486 10.4916C11.2924 10.7801 10.9763 11.037 10.589 11.2266C11.1343 11.3847 11.5492 11.6732 11.8021 12.0565C12.055 12.4398 12.2171 12.9179 12.2171 13.4632C12.2171 13.9097 12.1222 14.293 11.9602 14.6131C11.8021 14.9332 11.5453 15.2217 11.2568 15.4113C10.9684 15.605 10.6167 15.763 10.2334 15.8579C9.85008 15.9527 9.46678 16.0159 9.08348 16.0159L4.8 16.0238V7.2H8.98864ZM16.1489 14.9055C15.6391 14.9055 15.2558 14.7791 14.999 14.5222C14.7421 14.2654 14.5524 13.7872 14.5524 13.2656H19.1876C19.2192 12.7559 19.1876 12.3054 19.1244 11.8589C18.994 11.4124 18.8043 10.9974 18.5474 10.6458C18.2906 10.2625 17.9705 10.0096 17.5556 9.78432C17.1407 9.55908 16.6626 9.46424 16.1172 9.46424C15.6035 9.46424 15.1886 9.56303 14.7737 9.72109C14.3904 9.87916 14.0387 10.136 13.7503 10.4245C13.4618 10.7445 13.2405 11.0962 13.0785 11.5111C12.9165 11.9261 12.8533 12.3765 12.8533 12.8547C12.8533 13.3684 12.9204 13.8149 13.0785 14.2298C13.2089 14.6447 13.4302 14.9964 13.7187 15.2849C14.0071 15.605 14.3272 15.8302 14.7421 15.9883C15.157 16.1503 15.6075 16.2451 16.1172 16.2451C16.8522 16.2451 17.4608 16.0554 17.9705 15.7354C18.4803 15.3837 18.8636 14.8384 19.1204 14.0718H17.5556C17.4924 14.2654 17.3343 14.4551 17.0775 14.6487C16.8206 14.8107 16.5005 14.9055 16.1489 14.9055ZM17.7808 7.80854H14.2007V8.66998H17.7808V7.80854Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_8887_2549'>
          <rect width='24' height='24' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  );
});

export default IconBehance;
