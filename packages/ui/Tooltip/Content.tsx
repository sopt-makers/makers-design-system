import { PropsWithChildren } from 'react';
import { useContext } from 'react';
import { BubblePointIcon } from 'Tooltip/icons';
import { TooltipContext } from 'Tooltip/Tooltip';
import * as S from './style.css';

const TooltipContent = ({ children }: PropsWithChildren) => {
  const isTooltipVisible = useContext(TooltipContext);

  return (
    <div
      aria-hidden={!isTooltipVisible}
      className={`${S.contentWrapper} ${S.contentWrapperVariant[isTooltipVisible ? 'visible' : 'hidden']}`}
      data-visible={isTooltipVisible}
      role='tooltip'
    >
      {children ? (
        <>
          <BubblePointIcon className={S.bubblePointIcon} />
          <span className={S.content}>{children}</span>
        </>
      ) : null}
    </div>
  );
};

export default TooltipContent;
