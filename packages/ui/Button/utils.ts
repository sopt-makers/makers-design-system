import { colorThemeToTextColor } from './constants';
import { sprinkles } from './style.css';
import { ButtonColorTheme, ButtonRadiusTheme, ButtonSizeTheme } from './types';

export function createButtonVariant(
  colorTheme: ButtonColorTheme,
  radiusTheme: ButtonRadiusTheme,
  sizeTheme: ButtonSizeTheme
) {
  return sprinkles({
    backgroundColor: {
      default: `${colorTheme}-default`,
      hover: `${colorTheme}-hover`,
      active: `${colorTheme}-press`,
      disabled: 'disabled',
    },
    color: {
      default: colorThemeToTextColor[colorTheme],
      disabled: 'disabled',
    },
    borderRadius: radiusTheme === 'lg' ? 'max' : sizeTheme,
    padding: sizeTheme,
    fontSize: sizeTheme,
  });
}
