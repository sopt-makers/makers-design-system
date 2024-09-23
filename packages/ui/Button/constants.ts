import theme from '../theme.css';
import type { ButtonColorThemeWithStatus, ButtonSizeTheme } from './types';

export const bgColors: Record<ButtonColorThemeWithStatus, string> = {
  'fill-white-default': theme.colors.white,
  'fill-black-default': theme.colors.gray700,
  'fill-blue-default': theme.colors.success,
  'fill-red-default': theme.colors.error,
  'fill-white-hover': theme.colors.gray50,
  'fill-black-hover': theme.colors.gray600,
  'fill-blue-hover': theme.colors.blue500,
  'fill-red-hover': theme.colors.red500,
  'fill-white-press': theme.colors.gray100,
  'fill-black-press': theme.colors.gray500,
  'fill-blue-press': theme.colors.blue600,
  'fill-red-press': theme.colors.red600,
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
  'fill-white-default': theme.colors.gray800,
  'fill-black-default': theme.colors.white,
  'fill-blue-default': theme.colors.white,
  'fill-red-default': theme.colors.white,
  'fill-white-hover': theme.colors.gray800,
  'fill-black-hover': theme.colors.white,
  'fill-blue-hover': theme.colors.white,
  'fill-red-hover': theme.colors.white,
  'fill-white-press': theme.colors.gray800,
  'fill-black-press': theme.colors.white,
  'fill-blue-press': theme.colors.white,
  'fill-red-press': theme.colors.white,
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

export const borders: Record<ButtonColorThemeWithStatus, string> = {
  'fill-white-default': 'none',
  'fill-black-default': 'none',
  'fill-blue-default': 'none',
  'fill-red-default': 'none',
  'fill-white-hover': 'none',
  'fill-black-hover': 'none',
  'fill-blue-hover': 'none',
  'fill-red-hover': 'none',
  'fill-white-press': 'none',
  'fill-black-press': 'none',
  'fill-blue-press': 'none',
  'fill-red-press': 'none',
  'outlined-white-default': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-black-default': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-blue-default': `inset 0 0 0 1px ${theme.colors.success}`,
  'outlined-red-default': `inset 0 0 0 1px ${theme.colors.error}`,
  'outlined-white-hover': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-black-hover': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-blue-hover': `inset 0 0 0 1px ${theme.colors.blue500}`,
  'outlined-red-hover': `inset 0 0 0 1px ${theme.colors.red500}`,
  'outlined-white-press': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-black-press': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-blue-press': `inset 0 0 0 1px ${theme.colors.blue600}`,
  'outlined-red-press': `inset 0 0 0 1px ${theme.colors.red600}`,
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
