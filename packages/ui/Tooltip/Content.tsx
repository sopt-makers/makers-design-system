import type { CSSProperties, PropsWithChildren, ReactNode } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';
import BubblePointIcon from 'Tooltip/icons/bubblePoint';
import { useTooltipContentPlacement } from 'Tooltip/useTooltipContentPlacement';
import CloseIcon from 'Tooltip/icons/close';
import * as S from './style.css';
import { useTooltipContext } from './TooltipContext';

export interface TooltipContentProps extends PropsWithChildren {
  size?: 'small' | 'large';
  prefixIcon?: ReactNode;
  title?: ReactNode;
  bodyText?: ReactNode;
  closeButton?: boolean;
  secondaryButton?: ReactNode;
  style?: CSSProperties;
}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ size = 'small', prefixIcon, title, bodyText, closeButton, secondaryButton, style, children }) => {
    const { isOpen, tooltipId, contentRef, showTooltip, hideTooltip } = useTooltipContext();
    const { placement } = useTooltipContentPlacement();

    const iconColor = { color: style?.backgroundColor };
    const isLargeWithCloseButton = size === 'large' && closeButton;

    const prefixIconWithBodyOnly = prefixIcon && !title && bodyText;

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
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        ref={contentRef}
        role='tooltip'
        style={style}
      >
        <BubblePointIcon className={clsx(S.bubblePointIcon, S.bubblePointIconPosition[placement])} style={iconColor} />

        {isLargeWithCloseButton && (
          <button className={S.closeButton} onClick={hideTooltip} type='button'>
            <CloseIcon />
          </button>
        )}

        <section className={S.content}>
          {prefixIconWithBodyOnly ? (
            <div className={S.contentBodyWithPrefixIcon}>
              <i className={S.prefixIcon}>{prefixIcon}</i>
              <span className={S.bodySection}>{bodyText}</span>
            </div>
          ) : (
            <>
              {(prefixIcon || title) && (
                <div className={S.titleRow}>
                  {prefixIcon && <i className={S.prefixIcon}>{prefixIcon}</i>}
                  {title && <h1 className={S.titleSection}>{title}</h1>}
                </div>
              )}
              <div className={S.contentBody}>
                {bodyText && <span className={S.bodySection}>{bodyText}</span>}
                {children}
              </div>
            </>
          )}

          {secondaryButton && <div className={S.secondaryButton}>{secondaryButton}</div>}
        </section>
      </div>
    );
  },
);

TooltipContent.displayName = 'TooltipContent';

export default TooltipContent;
