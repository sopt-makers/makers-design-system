import theme from '../theme.css';
import type { ChipSizeTheme } from './types';

export const paddings: Record<ChipSizeTheme, string> = {
  sm: '9px 14px',
  md: '10px 20px',
};

export const fonts = {
  sm: theme.fontsObject.LABEL_3_14_SB,
  md: theme.fontsObject.LABEL_2_16_SB,
};
