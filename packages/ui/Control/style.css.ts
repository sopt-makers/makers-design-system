import { style, styleVariants } from '@vanilla-extract/css';
import theme from "../theme.css";

// Control 컴포넌트에서 사용되는 공통 스타일링
export const controlWrapper = style({
    display:'flex',
    alignItems:'center',
    cursor:'pointer',
});

export const controlLabel = styleVariants({
    small: [
        theme.fontsObject.BODY_3_14_R,
        {
          marginLeft: '6px',
        },
      ],
      large: [
        theme.fontsObject.BODY_2_16_R,
        {
          marginLeft: '8px',
        },
      ],
});

export const labelColor = styleVariants({
    white: {
      color: theme.colors.gray10,
    },
  });

  // Radio 관련 스타일링
  const RadioBase = style({

  }); 

  export const radio = styleVariants({
    small:[RadioBase,{ width: '16px', height: '16px' }],
    big:[RadioBase, { width:'22px', height: '22px' }],
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
    small: [checkBoxBase, { width: '18px', height: '18px' }],
    large: [checkBoxBase, { width: '24px', height: '24px' }],
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
    small: { width: 18, color: theme.colors.white },
    large: { width: 24, color: theme.colors.white },
  });

export const toggleBase = style({
  all: 'unset',
})