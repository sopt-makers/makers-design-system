import { style, styleVariants } from '@vanilla-extract/css';
import { colors } from '../../colors/src';
import theme from '../theme.css';

export const checkBoxWrapper = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
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

const checkBoxBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s background-color',
  borderRadius: '5px',
});

export const checkBox = styleVariants({
  small: [checkBoxBase, { width: '18px', height: '18px' }],
  large: [checkBoxBase, { width: '24px', height: '24px' }],
});

export const checkBoxChecked = styleVariants({
  true: [checkBoxBase, { backgroundColor: `${theme.colors.blue400}` }],
  false: [checkBoxBase, { backgroundColor: `${theme.colors.gray500}` }],
});

export const checkBoxLabel = styleVariants({
  small: [
    theme.fontsObject.BODY_14_R,
    {
      marginLeft: '8px',
    },
  ],
  large: [
    theme.fontsObject.BODY_16_R,
    {
      marginLeft: '10px',
    },
  ],
});

export const labelColor = styleVariants({
  white: {
    color: `${colors.gray10}`,
  },
});

export const check = styleVariants({
  small: { width: 18, color: `${colors.white}` },
  large: { width: 24, color: `${colors.white}` },
});
