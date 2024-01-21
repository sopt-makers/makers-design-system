import { keyframes, style, styleVariants } from '@vanilla-extract/css';
import theme from '../../theme.css';

export const title = style({
  color: `${theme.colors.gray10}`,
  marginBottom: 'var(--mds-dialog-title-margin-bottom,8px)',
  fontFamily: 'var(--mds-dialog-title-font-family,SUIT)',
  fontSize: 'var(--mds-dialog-title-font-size,18px)',
  fontStyle: 'var(--mds-dialog-title-font-style,normal)',
  fontWeight: 'var(--mds-dialog-title-font-weight,600)',
  lineHeight: 'var(--mds-dialog-title-font-line-height,28px)',
  letterSpacing: 'var(--mds-dialog-title-font-letter-spacing,-2%)',
});

export const description = style({
  maxHeight: '264px',
  overflowY: 'scroll',
  color: `${theme.colors.gray100}`,

  fontFamily: 'var(--mds-dialog-description-font-family, SUIT)',
  fontSize: 'var(--mds-dialog-description-font-size, 14px)',
  fontStyle: 'var(--mds-dialog-description-font-style, normal)',
  fontWeight: 'var(--mds-dialog-description-font-weight, 400)',
  lineHeight: 'var(--mds-dialog-description-font-line-height, 22px)',
  letterSpacing: 'var(--mds-dialog-v-font-letter-spacing, -1.5%)',

  '::-webkit-scrollbar': {
    width: '4px',
  },
  '::-webkit-scrollbar-thumb': {
    background: `${theme.colors.gray500}`,
    borderRadius: '4px',
  },
  '::-webkit-scrollbar-track': {
    background: 'none',
  },
});

export const footerBase = style({
  display: 'grid',
  gridAutoFlow: 'column',
});

export const footer = styleVariants({
  center: [footerBase, { width: '100%', display: 'flex', justifyContent: 'space-between' }],
  right: [footerBase, { width: '100%', display: 'flex', justifyContent: 'flex-end' }],
  left: [footerBase, { width: '100%', display: 'flex', justifyContent: 'flex-start' }],
  default: [
    footerBase,
    {
      width: 'var(--mds-dialog-footer-width,100%)',
      display: 'var(--mds-dialog-footer-display,flex)',
      justifyContent: 'var(--mds-dialog-footer-justifycontent,space-between)',
    },
  ],
});

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  backgroundColor: `${theme.colors.gray800}`,
  position: 'relative',
});

export const gap = style({
  gap: 'var(--mds-dialog-container-button-gap,8px)',
});

const dialogAnimation = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

export const animation = style({
  animation: `${dialogAnimation} 0.3s`,
});
