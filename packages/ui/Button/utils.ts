import { sprinkles } from './style.css';
import type { ButtonColorTheme, ButtonRadiusTheme, ButtonSizeTheme } from './types';

function createButtonVariant(
  colorTheme: ButtonColorTheme,
  radiusTheme: ButtonRadiusTheme,
  sizeTheme: ButtonSizeTheme,
  styleVariant: 'fill' | 'outlined',
) {
  return sprinkles({
    backgroundColor: {
      default: `${styleVariant}-${colorTheme}-default`,
      hover: `${styleVariant}-${colorTheme}-hover`,
      active: `${styleVariant}-${colorTheme}-press`,
      disabled: `${styleVariant}-disabled`,
    },
    color: {
      default: `${styleVariant}-${colorTheme}-default`,
      hover: `${styleVariant}-${colorTheme}-hover`,
      active: `${styleVariant}-${colorTheme}-press`,
      disabled: `${styleVariant}-disabled`,
    },
    boxShadow: {
      default: `${styleVariant}-${colorTheme}-default`,
      hover: `${styleVariant}-${colorTheme}-hover`,
      active: `${styleVariant}-${colorTheme}-press`,
      disabled: `${styleVariant}-disabled`,
    },
    borderRadius: radiusTheme === 'lg' ? 'max' : sizeTheme,
    padding: sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;
