import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  backgroundColor: `${theme.colors.gray800}`,
  position: 'relative',
});

export const dialogContainer = styleVariants({
  desktop: [base, { width: '400px', padding: '24px' }],
  mobile: [base, { maxWidth: '324px', padding: '20px', margin: '0px 36px', minWidth: '303px' }],
});

export const overlay = style({
  display: 'flex',
  position: 'fixed',
  inset: '0',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${theme.colors.backgroundDimmed}`,
});

export const buttonSize = styleVariants({
  desktop: { width: '83px' },
  mobile: { width: '100%' },
});

export const buttonMinSize = styleVariants({
  double: { minWidth: '127px' },
  single: { minWidth: '263px' },
});

export const checkBoxWapper = style({
  marginBottom: 20,
});
