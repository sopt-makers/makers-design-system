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

const bridgeBase = {
  content: '""',
  position: 'absolute' as const,
  backgroundColor: 'transparent',
  pointerEvents: 'auto' as const,
};

const bridgeVariants = {
  vertical: {
    ...bridgeBase,
    left: '0',
    width: '100%',
    height: '35px',
  },
  horizontal: {
    ...bridgeBase,
    top: '0',
    width: '20px',
    height: '100%',
  },
};

export const commonContentWrapper = style({
  'position': 'absolute',
  'width': 'max-content',
  'maxWidth': '273px',
  'minWidth': '160px',
  'padding': '16px',
  'borderRadius': '10px',
  'backgroundColor': theme.colors.gray600,
  'transition': 'opacity 0.3s ease-in-out, transform 0.3s ease-out',

  '::before': bridgeBase,
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
    'bottom': '35px',
    'top': 'auto',
    'left': '50%',
    'right': 'auto',
    'transform': 'translateX(-50%)',

    '::before': {
      ...bridgeVariants.vertical,
      top: '100%',
    },
  },
  bottom: {
    'top': '35px',
    'bottom': 'auto',
    'left': '50%',
    'right': 'auto',
    'transform': 'translateX(-50%)',

    '::before': {
      ...bridgeVariants.vertical,
      bottom: '100%',
    },
  },
  left: {
    'right': '100%',
    'left': 'auto',
    'top': '50%',
    'bottom': 'auto',
    'transform': 'translateX(-20px) translateY(-50%)',

    '::before': {
      ...bridgeVariants.horizontal,
      right: '100%',
    },
  },
  right: {
    'left': '100%',
    'right': 'auto',
    'top': '50%',
    'bottom': 'auto',
    'transform': 'translateX(20px) translateY(-50%)',

    '::before': {
      ...bridgeVariants.horizontal,
      left: '100%',
    },
  },
  topLeft: {
    'bottom': '35px',
    'top': 'auto',
    'left': '0',
    'right': 'auto',

    '::before': {
      ...bridgeVariants.vertical,
      top: '100%',
    },
  },
  topRight: {
    'bottom': '35px',
    'top': 'auto',
    'left': 'auto',
    'right': '0',

    '::before': {
      ...bridgeVariants.vertical,
      top: '100%',
    },
  },
  bottomLeft: {
    'top': '35px',
    'bottom': 'auto',
    'left': '0',
    'right': 'auto',

    '::before': {
      ...bridgeVariants.vertical,
      bottom: '100%',
    },
  },
  bottomRight: {
    'top': '35px',
    'bottom': 'auto',
    'left': 'auto',
    'right': '0',

    '::before': {
      ...bridgeVariants.vertical,
      bottom: '100%',
    },
  },
  leftTop: {
    'right': '100%',
    'left': 'auto',
    'top': '-16px',
    'bottom': 'auto',
    'transform': 'translateX(-20px)',

    '::before': {
      ...bridgeVariants.horizontal,
      right: '100%',
    },
  },
  leftBottom: {
    'right': '100%',
    'left': 'auto',
    'bottom': '-16px',
    'top': 'auto',
    'transform': 'translateX(-20px)',

    '::before': {
      ...bridgeVariants.horizontal,
      right: '100%',
    },
  },
  rightTop: {
    'left': '100%',
    'right': 'auto',
    'top': '-16px',
    'bottom': 'auto',
    'transform': 'translateX(20px)',

    '::before': {
      ...bridgeVariants.horizontal,
      left: '100%',
    },
  },
  rightBottom: {
    'left': '100%',
    'right': 'auto',
    'bottom': '-16px',
    'top': 'auto',
    'transform': 'translateX(20px)',

    '::before': {
      ...bridgeVariants.horizontal,
      left: '100%',
    },
  },
});

export const bubblePointIcon = style({
  position: 'absolute',
  color: theme.colors.gray600,
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
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) rotate(90deg)',
  },
  right: {
    left: '-13px',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    transform: 'translateY(-50%) rotate(-90deg)',
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
  color: theme.colors.gray50,
  ...theme.fontsObject.LABEL_4_12_SB,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const titleRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const contentBody = style({
  display: 'flex',
  flexDirection: 'column',
});

export const closeButton = style({
  position: 'absolute',
  top: '16px',
  right: '18px',
  width: '18px',
  height: '18px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.gray300,
  zIndex: 1,
});

export const secondaryButton = style({
  display: 'flex',
  alignItems: 'center',
  marginTop: '24px',
});

export const prefixIcon = style({
  display: 'flex',
  alignItems: 'flex-start',
});

export const titleSection = style({
  display: 'flex',
  alignItems: 'center',
  color: theme.colors.gray30,
  ...theme.fontsObject.TITLE_7_14_SB,
  wordBreak: 'keep-all',
});

export const bodySection = style({
  color: theme.colors.gray50,
  ...theme.fontsObject.BODY_4_13_M,
  wordBreak: 'keep-all',
});

export const contentBodyWithPrefixIcon = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  gap: '4px',
  wordBreak: 'keep-all',
});
