import { sprinkles } from './style.css';
import type { ButtonColorTheme, ButtonRadiusTheme, ButtonSizeTheme } from './types';

function createButtonVariant(
  colorTheme: ButtonColorTheme,
  radiusTheme: ButtonRadiusTheme,
  sizeTheme: ButtonSizeTheme,
  styleVariant: 'fill' | 'outlined',
) {
  // 추후 추가되는 디자인 테마 타입에 따라 prefix를 간편하게 추가해주면 되도록 구현
  // (단, constants.ts에서 해당 prefix가 붙은 스타일 상수를 사전 정의해야 함)
  // const typedColor: ButtonTypedColorTheme = outlined ? `outlined-${colorTheme}` : colorTheme;

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
    borderWidth: styleVariant,
    borderColor: {
      default: `${styleVariant}-${colorTheme}-default`,
      hover: `${styleVariant}-${colorTheme}-hover`,
      active: `${styleVariant}-${colorTheme}-press`,
      disabled: 'outlined-disabled',
    },
    borderRadius: radiusTheme === 'lg' ? 'max' : sizeTheme,
    padding: sizeTheme,
    fontSize: sizeTheme,
  });
}

export default createButtonVariant;
