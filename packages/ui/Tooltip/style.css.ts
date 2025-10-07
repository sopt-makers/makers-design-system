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
  width: 'max-content',
  maxWidth: '191px',
  minWidth: '160px',
  padding: '16px',
  borderRadius: '10px',
  backgroundColor: theme.colors.gray600,
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-out',
});

export const contentWrapperSize = styleVariants({
  small: {
    padding: '12px 14px',
  },
  large: {
    padding: '16px 18px',
  },
});

export const contentWrapper = styleVariants({
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
});

export const contentWrapperPosition = styleVariants({
  top: {
    bottom: '35px',
    top: 'auto',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)',
  },
  bottom: {
    top: '35px',
    bottom: 'auto',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)',
  },
  left: {
    right: '100%',
    left: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(-20px)',
  },
  right: {
    left: '100%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(20px)',
  },
  topLeft: {
    bottom: '35px',
    top: 'auto',
    left: 0,
    right: 'auto',
  },
  topRight: {
    bottom: '35px',
    top: 'auto',
    left: 'auto',
    right: 0,
  },
  bottomLeft: {
    top: '35px',
    bottom: 'auto',
    left: 0,
    right: 'auto',
  },
  bottomRight: {
    top: '35px',
    bottom: 'auto',
    left: 'auto',
    right: 0,
  },
  leftTop: {
    right: '100%',
    left: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(-20px)',
  },
  leftBottom: {
    right: '100%',
    left: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(-20px)',
  },
  rightTop: {
    left: '100%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(20px)',
  },
  rightBottom: {
    left: '100%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) translateX(20px)',
  },
});

export const bubblePointIcon = style({
  position: 'absolute',
});

export const bubblePointIconPosition = styleVariants({
  top: {
    bottom: '-13px',
    top: 'auto',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%) rotate(180deg)',
  },
  bottom: {
    top: '-13px',
    bottom: 'auto',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%) rotate(0deg)',
  },
  left: {
    right: '-13px',
    left: 'auto',
    top: '16px',
    bottom: 'auto',
    transform: 'rotate(90deg)',
  },
  right: {
    left: '-13px',
    right: 'auto',
    top: '16px',
    bottom: 'auto',
    transform: 'rotate(-90deg)',
  },
  topLeft: {
    bottom: '-13px',
    top: 'auto',
    left: '16px',
    right: 'auto',
    transform: 'rotate(180deg)',
  },
  topRight: {
    bottom: '-13px',
    top: 'auto',
    left: 'auto',
    right: '16px',
    transform: 'rotate(180deg)',
  },
  bottomLeft: {
    top: '-13px',
    bottom: 'auto',
    left: '16px',
    right: 'auto',
    transform: 'rotate(0deg)',
  },
  bottomRight: {
    top: '-13px',
    bottom: 'auto',
    left: 'auto',
    right: '16px',
    transform: 'rotate(0deg)',
  },
  leftTop: {
    right: '-13px',
    left: 'auto',
    top: '16px',
    bottom: 'auto',
    transform: 'rotate(90deg)',
  },
  leftBottom: {
    right: '-13px',
    left: 'auto',
    top: 'auto',
    bottom: '16px',
    transform: 'rotate(90deg)',
  },
  rightTop: {
    left: '-13px',
    right: 'auto',
    top: '16px',
    bottom: 'auto',
    transform: 'rotate(-90deg)',
  },
  rightBottom: {
    left: '-13px',
    right: 'auto',
    top: 'auto',
    bottom: '16px',
    transform: 'rotate(-90deg)',
  },
});

export const content = style({
  wordBreak: 'break-word',
  color: theme.colors.gray50,
  ...theme.fontsObject.LABEL_4_12_SB,
});
