import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

// Control 컴포넌트에서 사용되는 공통 스타일링
export const controlWrapper = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: 'fit-content',
});

export const controlLabel = styleVariants({
  sm: [
    theme.fontsObject.BODY_3_14_R,
    {
      marginLeft: '6px',
    },
  ],
  lg: [
    theme.fontsObject.BODY_2_16_R,
    {
      marginLeft: '8px',
    },
  ],
});

// Radio 관련 스타일링
const radioBase = style({
  all: 'unset',
  borderRadius: '9999px',
  border: `1.5px solid ${theme.colors.gray500}`,
  boxSizing: 'border-box',
});

export const radio = styleVariants({
  sm: [
    radioBase,
    {
      width: '16px',
      height: '16px',
      selectors: {
        '&:checked': {
          border: `4px solid ${theme.colors.blue400}`,
          backgroundColor: theme.colors.white,
        },
      },
    },
  ],
  lg: [
    radioBase,
    {
      width: '22px',
      height: '22px',
      selectors: {
        '&:checked': {
          border: `6px solid ${theme.colors.blue400}`,
          backgroundColor: theme.colors.white,
        },
      },
    },
  ],
});

// CheckBox 관련 스타일링
const checkBoxBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s background-color',
  borderRadius: '5px',
});

export const checkBox = styleVariants({
  sm: [checkBoxBase, { width: '16px', height: '18px' }],
  lg: [checkBoxBase, { width: '22px', height: '24px' }],
});

export const checkBoxInput = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
});

export const checkBoxChecked = styleVariants({
  true: [checkBoxBase, { backgroundColor: theme.colors.blue400 }],
  false: [checkBoxBase, { backgroundColor: theme.colors.gray500 }],
});

export const check = styleVariants({
  sm: { width: 12, color: theme.colors.white },
  lg: { width: 16, color: theme.colors.white },
});

// Toggle 관련 스타일링
const toggleBase = style({
  all: 'unset',
  display: 'flex',
  borderRadius: '9999px',
  border: 'none',
  boxSizing: 'border-box',
  cursor: 'pointer',
  justifyContent: 'flex-start',
});

const toggleThumbBase = style({
  display: 'block',
  borderRadius: '9999px',
  backgroundColor: theme.colors.white,
  filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.20))',
  transform: 'translateX(0)',
  transition: 'transform 200ms',
  willChange: 'transform',
});

export const toggleWrapper = styleVariants({
  lg: [toggleBase, { width: 40, height: 24, padding: 4 }],
  sm: [toggleBase, { width: 30, height: 18, padding: 3 }],
});

export const toggleState = styleVariants({
  true: { 'backgroundColor': theme.colors.blue400, '& > span[data-state="true"]': { transform: 'translateX(100%)' } },
  false: { backgroundColor: theme.colors.gray400 },
});

export const toggleThumb = styleVariants({
  lg: [toggleThumbBase, { width: 16, height: 16 }],
  sm: [toggleThumbBase, { width: 12, height: 12 }],
});
