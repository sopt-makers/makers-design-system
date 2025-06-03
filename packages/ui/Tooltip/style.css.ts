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

export const contentWrapper = style({
  position: 'absolute',
  top: '32px',
  right: 0,
  width: 'max-content',
  maxWidth: '191px',
  padding: '16px',
  borderRadius: '10px',
  backgroundColor: theme.colors.gray600,
  opacity: 0,
  transform: 'translateY(-5px)',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  pointerEvents: 'auto',

  selectors: {
    '&[data-visible="true"]': {
      opacity: 1,
      transform: 'translateY(0)',
      transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
    },
    '&[data-visible="true"]:hover': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
});

export const contentWrapperVariant = styleVariants({
  visible: {
    visibility: 'visible',
    pointerEvents: 'auto',
  },
  hidden: {
    visibility: 'hidden',
    pointerEvents: 'none',
  },
});

export const bubblePointIcon = style({
  position: 'absolute',
  top: '-13px',
  right: '16px',
});

export const content = style({
  wordBreak: 'keep-all',
  color: theme.colors.gray50,
  ...theme.fontsObject.LABEL_4_12_SB,
});
