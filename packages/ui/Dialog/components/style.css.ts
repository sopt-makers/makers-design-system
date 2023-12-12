import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../../theme.css';

export const titleBase = style({
  color: `${theme.colors.gray10}`,
  marginBottom: 12,
});

export const title = styleVariants({
  desktop: [
    titleBase,
    {
      // TODO: css 객체로 폰트 나오면 수정 예정입니다
      fontFamily: 'SUIT',
      fontSize: '20px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '30px',
      letterSpacing: '-0.4px',
    },
  ],
  mobile: [
    titleBase,
    {
      // TODO: css 객체로 폰트 나오면 수정 예정입니다
      fontFamily: 'SUIT',
      fontSize: '18px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: '28px',
      letterSpacing: '-0.36px',
      marginBottom: 8,
    },
  ],
});

export const descriptionBase = style({
  maxHeight: '264px',
  overflowY: 'scroll',
  color: `${theme.colors.gray100}`,

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

export const description = styleVariants({
  desktop: [
    descriptionBase,
    {
      // TODO: css 객체로 폰트 나오면 수정 예정입니다
      fontFamily: 'SUIT',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '26px',
      letterSpacing: '-0.24px',
    },
  ],
  mobile: [
    descriptionBase,
    {
      // TODO: css 객체로 폰트 나오면 수정 예정입니다
      fontFamily: 'SUIT',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '-0.21px',
    },
  ],
});

export const footerBase = style({
  display: 'grid',
  gridAutoFlow: 'column',
});

export const footer = styleVariants({
  center: [footerBase, { width: '100%', display: 'flex', justifyContent: 'space-between' }],
  right: [footerBase, { width: '100%', display: 'flex', justifyContent: 'flex-end' }],
  left: [footerBase, { width: '100%', display: 'flex', justifyContent: 'flex-start' }],
});

export const base = style({
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '14px',
  backgroundColor: `${theme.colors.gray800}`,
  position: 'relative',
});

export const gap = style({
  gap: 'var(--mds-dialog-container-button-gap,12px)',
});
