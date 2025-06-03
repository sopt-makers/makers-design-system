import { style } from '@vanilla-extract/css';
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
