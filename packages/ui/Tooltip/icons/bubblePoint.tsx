import type { HTMLAttributes } from 'react';

type BubblePointIconProps = HTMLAttributes<SVGSVGElement>;

function BubblePointIcon({ className, ...props }: BubblePointIconProps) {
  return (
    <svg
      className={className}
      fill='none'
      height='14'
      viewBox='0 0 16 14'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.61889 0.666999L0 14.0001H16L8.38111 0.666998C8.20848 0.364907 7.79152 0.364907 7.61889 0.666999Z'
        fill='currentColor'
      />
    </svg>
  );
}

export default BubblePointIcon;
