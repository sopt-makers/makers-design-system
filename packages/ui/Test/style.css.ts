import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

export const root = style({
  color: theme.colors.black,
});

export const textSize = styleVariants({
  big: { fontSize: '24px' },
  normal: { fontSize: '16px' }
})

export const textColor = styleVariants({
  black: { color: theme.colors.black },
  red: { color: theme.colors.red500 },
  blue: { color: theme.colors.blue500 }
})