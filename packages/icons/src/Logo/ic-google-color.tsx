import { HTMLAttributes, forwardRef } from 'react';

interface IconGoogleColorProps extends HTMLAttributes<SVGSVGElement> {}

const IconGoogleColor = forwardRef<SVGSVGElement, IconGoogleColorProps>((props, ref) => {
  return (
    <svg {...props} ref={ref} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.5041 12.2255C21.5041 11.5237 21.4414 10.8483 21.3237 10.2004H12.0001V14.0295H17.3285C17.0986 15.267 16.4012 16.3164 15.3529 17.0182V19.502H18.5517C20.4239 17.7783 21.5041 15.2406 21.5041 12.2255Z'
        fill='#3D82F0'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.0004 21.9004C14.6734 21.9004 16.9138 21.0134 18.5517 19.502L15.3529 17.0182C14.4663 17.6122 13.3325 17.9624 12.0004 17.9624C9.42197 17.9624 7.23957 16.2211 6.46077 13.8814H3.15307V16.4466C4.78217 19.6817 8.13057 21.9004 12.0004 21.9004Z'
        fill='#31A752'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M6.46077 13.8814C6.26277 13.2874 6.1503 12.6527 6.1503 12.0004C6.1503 11.3481 6.2625 10.7134 6.4605 10.1194V7.55416H3.1528C2.4829 8.89066 2.1001 10.4032 2.1001 12.0004C2.1001 13.5976 2.48317 15.1101 3.15307 16.4466L6.46077 13.8814Z'
        fill='#F9BA00'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M12.0004 6.03798C13.4535 6.03798 14.7592 6.53738 15.7844 7.51858L18.6246 4.67948C16.9097 3.08118 14.669 2.09998 12.0004 2.09998C8.13057 2.09998 4.7819 4.31796 3.1528 7.55416L6.4605 10.1194C7.2393 7.77966 9.42197 6.03798 12.0004 6.03798Z'
        fill='#E64234'
      />
    </svg>
  );
});

export default IconGoogleColor;
