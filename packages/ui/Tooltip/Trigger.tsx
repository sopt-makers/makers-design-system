import { PropsWithChildren } from 'react';

import { useContext } from 'react';
import { AlertIcon } from 'Tooltip/icons';
import { TooltipContext } from 'Tooltip/Tooltip';
import * as S from './style.css';

const TooltipTrigger = ({ children }: PropsWithChildren) => {
  const isVisible = useContext(TooltipContext);

  return (
    <span aria-describedby={isVisible ? 'tooltip-content' : undefined} className={S.trigger}>
      {children} <AlertIcon />
    </span>
  );
};

export default TooltipTrigger;
