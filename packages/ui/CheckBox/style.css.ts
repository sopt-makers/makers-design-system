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
  small: {
    marginLeft: '8px',
    // MEMO: 객체 형태로 css 받도록 수정되면 수정하기
    fontFamily: 'SUIT',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '22px',
    letterSpacing: '-0.21px',
  },
  large: {
    marginLeft: '10px',
    // MEMO: 객체 형태로 css 받도록 수정되면 수정하기
    fontFamily: 'SUIT',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '26px',
    letterSpacing: '-0.24px',
  },
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
