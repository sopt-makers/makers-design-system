import { sprinkles } from './style.css';
import type { ButtonIntent, ButtonSizeTheme, ButtonShape, ButtonVariant } from './types';

interface BorderRadiusParams {
  radiusTheme: ButtonShape;
  sizeTheme: ButtonSizeTheme;
  variant: ButtonVariant;
}

interface PaddingParams {
  isExtended: boolean;
  sizeTheme: ButtonSizeTheme;
  variant: ButtonVariant;
}

function createButtonVariant(
  buttonIntent: ButtonIntent,
  radiusTheme: ButtonShape,
  sizeTheme: ButtonSizeTheme,
  variant: ButtonVariant,
  isExtended: boolean,
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
    borderRadius: getBorderRadius({ radiusTheme, sizeTheme, variant }),
    padding: getPadding({ isExtended, sizeTheme, variant }),
    fontSize: sizeTheme,
  });
}

function getBorderRadius({ radiusTheme, sizeTheme, variant }: BorderRadiusParams) {
  if (variant === 'text' || variant === 'floating') return variant;
  if (radiusTheme === 'pill') return 'max';
  return sizeTheme;
}

function getPadding({ isExtended, sizeTheme, variant }: PaddingParams) {
  if (variant === 'floating') {
    return isExtended ? 'floating-extended' : 'floating-default';
  }

  if (variant === 'text') return 'text';

  return sizeTheme;
}

export default createButtonVariant;
