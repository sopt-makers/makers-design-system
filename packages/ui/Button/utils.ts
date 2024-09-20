import { sprinkles } from './style.css';
import type { ButtonColorTheme, ButtonRadiusTheme, ButtonSizeTheme, ButtonTypedColorTheme } from './types';

function createButtonVariant(
  colorTheme: ButtonColorTheme,
  radiusTheme: ButtonRadiusTheme,
  sizeTheme: ButtonSizeTheme,
  outlined: boolean,
) {
  // 추후 추가되는 디자인 테마 타입에 따라 prefix를 간편하게 추가해주면 되도록 구현
  // (단, constants.ts에서 해당 prefix가 붙은 스타일 상수를 사전 정의해야 함)
  const typedColor: ButtonTypedColorTheme = outlined ? `outlined-${colorTheme}` : colorTheme;

  return sprinkles({
    backgroundColor: {
      default: `${typedColor}-default`,
      hover: `${typedColor}-hover`,
      active: `${typedColor}-press`,
      disabled: outlined ? 'outlined_disabled' : 'disabled',
    },
    color: {
      default: `${typedColor}-default`,
      hover: `${typedColor}-hover`,
      active: `${typedColor}-press`,
      disabled: outlined ? 'outlined_disabled' : 'disabled',
    },
    borderWidth: outlined ? 'outlined' : 'fill',
    borderColor: {
      default: `${typedColor}-default`,
      hover: `${typedColor}-hover`,
      active: `${typedColor}-press`,
      disabled: 'outlined_disabled',
    },
    borderRadius: radiusTheme === 'lg' ? 'max' : sizeTheme,
    padding: sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;
