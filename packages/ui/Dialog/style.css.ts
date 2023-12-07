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
  mobile: [base, { maxWidth: '324px', padding: '20px', margin: '0px 36px' }],
});

export const overlay = style({
  display: 'flex',
  position: 'fixed',
  inset: '0',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: `${theme.colors.backgroundDimmed}`,
});
