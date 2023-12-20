import theme from '../theme.css';
import {
  ButtonColorTheme,
  ButtonColorThemeWithStatus,
  ButtonSizeTheme,
} from './types';

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
};

export const textColors = {
  light: theme.colors.white,
  dark: theme.colors.gray800,
};

export const colorThemeToTextColor: Record<ButtonColorTheme, 'light' | 'dark'> =
  {
    white: 'dark',
    black: 'light',
    red: 'light',
    blue: 'light',
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

export const iconSizes: Record<ButtonSizeTheme, string> = {
  sm: '16px',
  md: '20px',
  lg: '24px',
};
