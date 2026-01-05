import { HTMLAttributes, forwardRef } from "react";
  
  interface IconProps extends HTMLAttributes<SVGSVGElement> {}
  
  const Icon = forwardRef<SVGSVGElement, IconProps>(
    (props, ref) => {
      return (
        <svg
          {...props}
          ref={ref}
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 91.2003C40 73.2784 40 64.3175 43.4878 57.4723C46.5557 51.4511 51.4511 46.5557 57.4723 43.4878C64.3175 40 73.2783 40 91.2 40H596.8C614.722 40 623.682 40 630.528 43.4878C636.549 46.5557 641.444 51.4511 644.512 57.4723C648 64.3175 648 73.2783 648 91.2V6928.8C648 6946.72 648 6955.68 644.512 6962.53C641.444 6968.55 636.549 6973.44 630.528 6976.51C623.682 6980 614.722 6980 596.8 6980H91.2C73.2783 6980 64.3175 6980 57.4723 6976.51C51.4511 6973.44 46.5557 6968.55 43.4878 6962.53C40 6955.68 40 6946.72 40 6928.8V91.2003Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }
  );
  
  export default Icon;