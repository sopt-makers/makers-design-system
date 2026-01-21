import { sprinkles } from './style.css';
import type { ButtonIntent, ButtonSizeTheme, ButtonShape, ButtonColorTheme, ButtonVariant } from './types';

function createButtonVariant(
  buttonIntent: ButtonIntent,
  radiusTheme: ButtonShape,
  sizeTheme: ButtonSizeTheme,
  variant: ButtonVariant,
  isExpanded: boolean,
) {
  return sprinkles({
    backgroundColor: {
      default: `${variant}-${buttonIntent}-default`,
      hover: `${variant}-${buttonIntent}-hover`,
      active: `${variant}-${buttonIntent}-press`,
      disabled: `${variant}-disabled`,
    },
    color: {
      default: `${variant}-${buttonIntent}-default`,
      hover: `${variant}-${buttonIntent}-hover`,
      active: `${variant}-${buttonIntent}-press`,
      disabled: `${variant}-disabled`,
    },
    boxShadow: {
      default: `${variant}-${buttonIntent}-default`,
      hover: `${variant}-${buttonIntent}-hover`,
      active: `${variant}-${buttonIntent}-press`,
      disabled: `${variant}-disabled`,
    },
    borderRadius: variant === 'text' || variant === 'floating' ? variant : radiusTheme === 'pill' ? 'max' : sizeTheme,
    padding:
      variant === 'floating'
        ? isExpanded
          ? 'floating-extended'
          : 'floating-default'
        : variant === 'text'
          ? 'text'
          : sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;
