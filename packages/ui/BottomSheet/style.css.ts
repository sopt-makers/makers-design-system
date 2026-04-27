import { style } from '@vanilla-extract/css';
import theme from '../theme.css';

export const iconStyle = style({
  width: '24px',
  height: '24px',
  color: theme.colors.gray10,
  cursor: 'pointer',
});

export const overlayStyle = style({
  position: 'fixed',
  bottom: 0,
  left: 0,

  zIndex: 999,
  width: 'calc(100% - 32px)',
  padding: '12px 8px',
  margin: '0px 16px',

  backgroundColor: theme.colors.gray800,
  borderRadius: '16px',
});

export const buttonWrapperStyle = style({
  padding: '8px 8px 0px 8px',
});

export const actionButtonStyle = style({
  width: '100%',
});

export const titleWrapperStyle = style({
  display: 'flex',
  alignItems: 'center',
  paddingTop: '8px',
});

export const titleTextStyle = style({
  padding: '0 8px',
  color: theme.colors.gray10,
  ...theme.fontsObject.TITLE_4_20_SB,
});

export const bodyWrapperStyle = style({
  padding: '12px 8px',
});

export const contentWrapperStyle = style({
  overflowY: 'auto',
});

export const dimStyle = style({
  position: 'fixed',
  left: 0,
  top: 0,

  zIndex: 999,
  width: '100%',
  height: '100%',
  backgroundColor: theme.colors.backgroundDimmed,
  overflowY: 'hidden',
  touchAction: 'none',
});
