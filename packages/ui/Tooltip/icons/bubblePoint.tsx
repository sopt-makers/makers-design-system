import { HTMLAttributes } from 'react';

interface BubblePointIconProps extends HTMLAttributes<SVGSVGElement> {}

function BubblePointIcon({ className, ...props }: BubblePointIconProps) {
  return (
    <svg
      width='16'
      height='14'
      viewBox='0 0 16 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      {...props}
    >
      <path
        d='M7.61889 0.666999L0 14.0001H16L8.38111 0.666998C8.20848 0.364907 7.79152 0.364907 7.61889 0.666999Z'
        fill='#3F3F47'
      />
    </svg>
  );
}

export default BubblePointIcon;
