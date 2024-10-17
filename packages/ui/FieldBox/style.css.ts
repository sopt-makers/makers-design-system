import { style } from '@vanilla-extract/css';
import theme from '../theme.css';

export const label = style({
  ...theme.fontsObject.LABEL_3_14_SB,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  color: theme.colors.white,
});

export const description = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray300,
  marginBottom: '8px',
});

export const required = style({
  color: theme.colors.secondary,
  marginLeft: '4px',
});
