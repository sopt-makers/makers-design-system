import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

export const dialogContainer = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  backgroundColor: theme.colors.gray800,
  position: 'relative',

  padding: 'var(--mds-dialog-container-padding, 20px)',
  margin: 'var(--mds-dialog-container-margin, 0px 36px)',
  maxWidth: 'var(--mds-dialog-container-max-width, 324px)',
  minWidth: 'var(--mds-dialog-container-min-width, 303px)',
});

export const overlay = style({
  display: 'flex',
  position: 'fixed',
  inset: '0',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.backgroundDimmed,
});

export const buttonSize = style({
  width: 'var(--mds-dialog-container-button-size, 100%)',
});

export const buttonMinSize = styleVariants({
  double: { minWidth: '127px' },
  single: { minWidth: 'var(--mds-dialog-button-minsize, 263px)' },
});

export const checkBoxWapper = style({
  marginBottom: 20,
});

export const descriptionMarginBottom = styleVariants({
  // MEMO: true는 체크박스가 있는 경우, false는 없는 경우
  true: {
    marginBottom: 24,
  },
  false: {
    marginBottom: 'var(--mds-dialog-description-margin-bottom,24px)',
  },
});
