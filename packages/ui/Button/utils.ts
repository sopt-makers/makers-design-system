import React from 'react';
import { sprinkles } from './style.css';
import type { ButtonIntent, ButtonSizeTheme, ButtonShape, ButtonColorTheme, ButtonVariant } from './types';

function createButtonVariant(
  buttonIntent: ButtonIntent,
  radiusTheme: ButtonShape,
  sizeTheme: ButtonSizeTheme,
  variant: ButtonVariant,
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
    borderRadius: variant === 'text' ? 'none' : radiusTheme === 'pill' ? 'max' : sizeTheme,
    padding: variant === 'text' ? 'text' : sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;

interface UseResolvedProps {
  intent: ButtonIntent;
  shape: ButtonShape;
  theme?: ButtonColorTheme;
  rounded?: 'md' | 'lg';
}

export const useResolvedProps = ({ intent, shape, theme, rounded }: UseResolvedProps) => {
  const finalIntent = React.useMemo(() => {
    if (!theme) return intent;
    switch (theme) {
      case 'white':
        return 'primary';
      case 'black':
        return 'secondary';
      case 'blue':
        return 'success';
      case 'red':
        return 'danger';
      default:
        return intent;
    }
  }, [intent, theme]);

  const finalShape = React.useMemo(() => {
    if (!rounded) return shape;
    return rounded === 'lg' ? 'pill' : 'rect';
  }, [shape, rounded]);

  return { finalIntent, finalShape };
};
