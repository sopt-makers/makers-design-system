import { style, styleVariants } from "@vanilla-extract/css";
import theme from "../theme";

export const checkBoxContainer=style({
    display:"flex",
    alignItems:"center"
})

export const checkBoxWrapper=style({
    cursor: 'pointer'
})

export const checkBoxInput=style({
    position: 'absolute',
    width: '1px',
    height: '1px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
})

const checkBoxBase=style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s background-color',
    borderRadius: '5px',
    
})

export const checkBox=styleVariants({
    small:[checkBoxBase, {width:'18px', height:'18px'}],
    large:[checkBoxBase,  {width:'24px', height:'24px'}],
})

export const checkBoxChecked=styleVariants({
    true:[checkBoxBase,{backgroundColor: `${theme.colors.blue400}`,}],
    false:[checkBoxBase,{backgroundColor: `${theme.colors.gray500}`,}],
})

export const checkBoxLabel=styleVariants({
    small:{
        marginLeft:'8px',
        font:`${theme.fonts.BODY_14_R}`
    },
    large:{
        marginLeft:'10px',
        font:`${theme.fonts.BODY_16_R}`
    }
})