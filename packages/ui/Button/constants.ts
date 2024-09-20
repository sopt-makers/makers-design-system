import theme from '../theme.css';
import type { ButtonColorThemeWithStatus, ButtonSizeTheme } from './types';

export const bgColors: Record<ButtonColorThemeWithStatus, string> = {
  'white-default': theme.colors.white,
  'black-default': theme.colors.gray700,
  'blue-default': theme.colors.success,
  'red-default': theme.colors.error,
  'white-hover': theme.colors.gray50,
  'black-hover': theme.colors.gray600,
  'blue-hover': theme.colors.blue500,
  'red-hover': theme.colors.red500,
  'white-press': theme.colors.gray100,
  'black-press': theme.colors.gray500,
  'blue-press': theme.colors.blue600,
  'red-press': theme.colors.red600,
  'outlined-white-default': 'transparent',
  'outlined-black-default': 'transparent',
  'outlined-blue-default': 'transparent',
  'outlined-red-default': 'transparent',
  'outlined-white-hover': 'transparent',
  'outlined-black-hover': 'transparent',
  'outlined-blue-hover': theme.colors.blueAlpha100,
  'outlined-red-hover': theme.colors.redAlpha100,
  'outlined-white-press': 'transparent',
  'outlined-black-press': 'transparent',
  'outlined-blue-press': theme.colors.blueAlpha100,
  'outlined-red-press': theme.colors.redAlpha100,
};

export const textColors: Record<ButtonColorThemeWithStatus, string> = {
  'white-default': theme.colors.gray800,
  'black-default': theme.colors.white,
  'blue-default': theme.colors.white,
  'red-default': theme.colors.white,
  'white-hover': theme.colors.gray800,
  'black-hover': theme.colors.white,
  'blue-hover': theme.colors.white,
  'red-hover': theme.colors.white,
  'white-press': theme.colors.gray800,
  'black-press': theme.colors.white,
  'blue-press': theme.colors.white,
  'red-press': theme.colors.white,
  'outlined-white-default': theme.colors.white,
  'outlined-black-default': theme.colors.white,
  'outlined-blue-default': theme.colors.success,
  'outlined-red-default': theme.colors.error,
  'outlined-white-hover': theme.colors.white,
  'outlined-black-hover': theme.colors.white,
  'outlined-blue-hover': theme.colors.blue500,
  'outlined-red-hover': theme.colors.red500,
  'outlined-white-press': theme.colors.white,
  'outlined-black-press': theme.colors.white,
  'outlined-blue-press': theme.colors.blue600,
  'outlined-red-press': theme.colors.red600,
};

export const borderWidths: Record<string, string> = {
  outlined: '1px',
  fill: '0',
};

export const borderColors: Record<ButtonColorThemeWithStatus, string> = {
  'white-default': 'none',
  'black-default': 'none',
  'blue-default': 'none',
  'red-default': 'none',
  'white-hover': 'none',
  'black-hover': 'none',
  'blue-hover': 'none',
  'red-hover': 'none',
  'white-press': 'none',
  'black-press': 'none',
  'blue-press': 'none',
  'red-press': 'none',
  'outlined-white-default': theme.colors.white,
  'outlined-black-default': theme.colors.white,
  'outlined-blue-default': theme.colors.success,
  'outlined-red-default': theme.colors.error,
  'outlined-white-hover': theme.colors.white,
  'outlined-black-hover': theme.colors.white,
  'outlined-blue-hover': theme.colors.blue500,
  'outlined-red-hover': theme.colors.red500,
  'outlined-white-press': theme.colors.white,
  'outlined-black-press': theme.colors.white,
  'outlined-blue-press': theme.colors.blue600,
  'outlined-red-press': theme.colors.red600,
};

export const borderRadiuses: Record<ButtonSizeTheme, string> = {
  sm: '8px',
  md: '10px',
  lg: '12px',
};

export const paddings: Record<ButtonSizeTheme, string> = {
  sm: '9px 14px',
  md: '12px 20px',
  lg: '16px 26px',
};

export const fontSizes: Record<ButtonSizeTheme, string> = {
  sm: '14px',
  md: '14px',
  lg: '18px',
};

export const iconSizes: Record<ButtonSizeTheme, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};
