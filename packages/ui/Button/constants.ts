import theme from '../theme.css';
import type { ButtonColorThemeWithStatus, ButtonSizeTheme } from './types';

export const bgColors: Record<ButtonColorThemeWithStatus, string> = {
  'fill-primary-default': theme.colors.white,
  'fill-secondary-default': theme.colors.gray700,
  'fill-success-default': theme.colors.success,
  'fill-danger-default': theme.colors.error,
  'fill-primary-hover': theme.colors.gray50,
  'fill-secondary-hover': theme.colors.gray600,
  'fill-success-hover': theme.colors.blue500,
  'fill-danger-hover': theme.colors.red500,
  'fill-primary-press': theme.colors.gray100,
  'fill-secondary-press': theme.colors.gray500,
  'fill-success-press': theme.colors.blue600,
  'fill-danger-press': theme.colors.red600,
  'outlined-primary-default': 'transparent',
  'outlined-secondary-default': 'transparent',
  'outlined-success-default': 'transparent',
  'outlined-danger-default': 'transparent',
  'outlined-primary-hover': 'transparent',
  'outlined-secondary-hover': 'transparent',
  'outlined-success-hover': theme.colors.blueAlpha100,
  'outlined-danger-hover': theme.colors.redAlpha100,
  'outlined-primary-press': 'transparent',
  'outlined-secondary-press': 'transparent',
  'outlined-success-press': theme.colors.blueAlpha100,
  'outlined-danger-press': theme.colors.redAlpha100,
};

export const textColors: Record<ButtonColorThemeWithStatus, string> = {
  'fill-primary-default': theme.colors.gray800,
  'fill-secondary-default': theme.colors.white,
  'fill-success-default': theme.colors.white,
  'fill-danger-default': theme.colors.white,
  'fill-primary-hover': theme.colors.gray800,
  'fill-secondary-hover': theme.colors.white,
  'fill-success-hover': theme.colors.white,
  'fill-danger-hover': theme.colors.white,
  'fill-primary-press': theme.colors.gray800,
  'fill-secondary-press': theme.colors.white,
  'fill-success-press': theme.colors.white,
  'fill-danger-press': theme.colors.white,
  'outlined-primary-default': theme.colors.white,
  'outlined-secondary-default': theme.colors.white,
  'outlined-success-default': theme.colors.success,
  'outlined-danger-default': theme.colors.error,
  'outlined-primary-hover': theme.colors.white,
  'outlined-secondary-hover': theme.colors.white,
  'outlined-success-hover': theme.colors.blue500,
  'outlined-danger-hover': theme.colors.red500,
  'outlined-primary-press': theme.colors.white,
  'outlined-secondary-press': theme.colors.white,
  'outlined-success-press': theme.colors.blue600,
  'outlined-danger-press': theme.colors.red600,
};

export const borders: Record<ButtonColorThemeWithStatus, string> = {
  'fill-primary-default': 'none',
  'fill-secondary-default': 'none',
  'fill-success-default': 'none',
  'fill-danger-default': 'none',
  'fill-primary-hover': 'none',
  'fill-secondary-hover': 'none',
  'fill-success-hover': 'none',
  'fill-danger-hover': 'none',
  'fill-primary-press': 'none',
  'fill-secondary-press': 'none',
  'fill-success-press': 'none',
  'fill-danger-press': 'none',
  'outlined-primary-default': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-secondary-default': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-success-default': `inset 0 0 0 1px ${theme.colors.success}`,
  'outlined-danger-default': `inset 0 0 0 1px ${theme.colors.error}`,
  'outlined-primary-hover': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-secondary-hover': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-success-hover': `inset 0 0 0 1px ${theme.colors.blue500}`,
  'outlined-danger-hover': `inset 0 0 0 1px ${theme.colors.red500}`,
  'outlined-primary-press': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-secondary-press': `inset 0 0 0 1px ${theme.colors.white}`,
  'outlined-success-press': `inset 0 0 0 1px ${theme.colors.blue600}`,
  'outlined-danger-press': `inset 0 0 0 1px ${theme.colors.red600}`,
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
  md: '16px',
  lg: '18px',
};

export const iconSizes: Record<ButtonSizeTheme, number> = {
  sm: 16,
  md: 20,
  lg: 24,
};
