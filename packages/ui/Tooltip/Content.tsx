import { PropsWithChildren } from 'react';
import { useContext } from 'react';
import { BubblePointIcon } from 'Tooltip/icons';
import { TooltipContext } from 'Tooltip/Tooltip';
import * as S from './style.css';

const TooltipContent = ({ children }: PropsWithChildren) => {
  const isVisible = useContext(TooltipContext);

  return (
    <div
      aria-hidden={!isVisible}
      className={`${S.contentWrapper} ${S.contentWrapperVariant[isVisible ? 'visible' : 'hidden']}`}
      data-visible={isVisible}
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
