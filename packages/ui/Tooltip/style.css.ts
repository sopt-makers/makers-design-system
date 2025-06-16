import { style, styleVariants } from '@vanilla-extract/css';
import theme from 'theme.css';

export const tooltipWrapper = style({
  position: 'relative',
  width: 'fit-content',
  paddingRight: '16px',
  cursor: 'default',
});

export const trigger = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  whiteSpace: 'nowrap',
  color: theme.colors.gray300,
  ...theme.fontsObject.LABEL_4_12_SB,
});

export const commonContentWrapper = style({
  position: 'absolute',
  right: 0,
  width: 'max-content',
  maxWidth: '191px',
  padding: '16px',
  borderRadius: '10px',
  backgroundColor: theme.colors.gray600,
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
});

export const contentWrapper = styleVariants({
  visible: {
    opacity: 1,
    visibility: 'visible',
    transform: 'translateY(0)',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
    transform: 'translateY(10px)',
  },
});

export const contentWrapperPosition = styleVariants({
  top: {
    bottom: '35px',
    top: 'auto',
  },
  bottom: {
    top: '35px',
    bottom: 'auto',
  },
});

export const bubblePointIcon = style({
  position: 'absolute',
  right: '16px',
});

export const bubblePointIconPosition = styleVariants({
  top: {
    bottom: '-13px',
    top: 'auto',
    transform: 'rotate(180deg)',
  },
  bottom: {
    top: '-13px',
    bottom: 'auto',
    transform: 'rotate(0deg)',
  },
});

export const content = style({
  wordBreak: 'break-word',
  color: theme.colors.gray50,
  ...theme.fontsObject.LABEL_4_12_SB,
});
