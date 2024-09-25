import { sprinkles } from './style.css';
import type { ButtonColorTheme, ButtonRadiusTheme, ButtonSizeTheme } from './types';

function createButtonVariant(
  colorTheme: ButtonColorTheme,
  radiusTheme: ButtonRadiusTheme,
  sizeTheme: ButtonSizeTheme,
  variant: 'fill' | 'outlined',
) {
  return sprinkles({
    backgroundColor: {
      default: `${variant}-${colorTheme}-default`,
      hover: `${variant}-${colorTheme}-hover`,
      active: `${variant}-${colorTheme}-press`,
      disabled: `${variant}-disabled`,
    },
    color: {
      default: `${variant}-${colorTheme}-default`,
      hover: `${variant}-${colorTheme}-hover`,
      active: `${variant}-${colorTheme}-press`,
      disabled: `${variant}-disabled`,
    },
    boxShadow: {
      default: `${variant}-${colorTheme}-default`,
      hover: `${variant}-${colorTheme}-hover`,
      active: `${variant}-${colorTheme}-press`,
      disabled: `${variant}-disabled`,
    },
    borderRadius: radiusTheme === 'lg' ? 'max' : sizeTheme,
    padding: sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;
