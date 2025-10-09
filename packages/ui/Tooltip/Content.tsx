import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import BubblePointIcon from 'Tooltip/icons/bubblePoint';
import clsx from 'clsx';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';
import { useTooltipContentPlacement } from 'Tooltip/useTooltipContentPlacement';
import CloseIcon from 'Tooltip/icons/close';

export interface TooltipContentProps extends PropsWithChildren {
  size?: 'small' | 'large';
  prefixIcon?: ReactNode;
  title?: ReactNode;
  bodyText?: ReactNode;
  closeButton?: boolean;
  style?: CSSProperties;
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ size = 'small', prefixIcon, title, bodyText, closeButton, style, children }) => {
    const { isOpen, tooltipId, contentRef, showTooltip, hideTooltip } = useTooltipContext();
    const { placement } = useTooltipContentPlacement();

    const iconColor = { color: style?.backgroundColor };
    const isLargeWithCloseButton = size === 'large' && closeButton;

    return (
      <div
        aria-hidden={!isOpen}
        className={clsx(
          S.contentWrapper[isOpen ? 'visible' : 'hidden'],
          S.contentWrapperPosition[placement],
          S.commonContentWrapper,
          S.contentWrapperSize[size],
        )}
        id={tooltipId}
        ref={contentRef}
        role='tooltip'
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        style={style}
      >
        <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[placement])} style={iconColor} />

        {isLargeWithCloseButton && (
          <button type='button' onClick={hideTooltip} className={S.closeButton}>
            <CloseIcon />
          </button>
        )}

        <div className={clsx(S.content)}>
          {prefixIcon && <span className={S.prefixIcon}>{prefixIcon}</span>}
          {title && <div className={S.titleSection}>{title}</div>}
          {bodyText && <div className={S.bodySection}>{bodyText}</div>}
          {children}
        </div>
      </div>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
