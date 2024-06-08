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
  const radioBase = style({
    all: 'unset',
    borderRadius: '9999px',
    border: `1.5px solid ${theme.colors.gray500}`,

  }); 

  export const radio = styleVariants({
    small:[radioBase,{
      width: '13px',
      height: '13px',
      selectors: {
      '&:checked': {
        width: '8px',
        height: '8px',
        border: `4px solid ${theme.colors.blue400}`,
        backgroundColor: theme.colors.white,
      },
    } }],
    large:[radioBase,{
      width: '19px',
      height: '19px',
      selectors: {
      '&:checked': {
        width: '10px',
        height: '10px',
        border: `6px solid ${theme.colors.blue400}`,
        backgroundColor: theme.colors.white,
      },
    } }],
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

  // Toggle 관련 스타일링
  const toggleBase = style({
    all: 'unset',
    display: 'flex',
    borderRadius: '9999px',
    border: 'none',
  });

  const toggleThumbBase = style({
    display: 'block',
    borderRadius: '9999px',
    backgroundColor: theme.colors.white,
    filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.20))',
  });

  export const toggleWrapper = styleVariants({
    large : [toggleBase, { width : 32, height : 16, padding: 4 }],
    small : [toggleBase, { width : 24, height : 12, padding: 3 }]
  });

  export const toggleState = styleVariants({
    true : { justifyContent: 'flex-end', backgroundColor: theme.colors.blue400 },
    false : { justifyContent: 'flex-start', backgroundColor: theme.colors.gray400 }  
  });

  export const toggleThumb = styleVariants({
    large : [toggleThumbBase, { width : 16, height : 16 }],
    small : [toggleThumbBase, { width : 12, height : 12 }]
  });