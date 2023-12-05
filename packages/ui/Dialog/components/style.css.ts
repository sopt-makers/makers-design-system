import { style, styleVariants } from "@vanilla-extract/css";
import theme from "../../theme";

export const title=style({
  font:`${theme.fonts.TITLE_20_SB}`,
  color:`${theme.colors.gray10}`,
  marginBottom:12,

  '@media': {
    'screen and (min-width: 768px)': {
      font:`${theme.fonts.TITLE_18_SB}`,
      marginBottom:8
    },}
})


export const description=style({
  font:`${theme.fonts.BODY_16_R}`,
  color:`${theme.colors.gray100}`,
  marginBottom:36,

  '@media': {
    'screen and (min-width: 768px)': {
      font:`${theme.fonts.BODY_14_R}`,
      marginBottom:24,
    },}
})

export const footerBase=style({
  display: 'grid',
  gridAutoFlow: 'column',
})

export const footer=styleVariants({
  center:[footerBase,{gridAutoColumns: `minmax(10px, 1fr)`}],
  right:[footerBase,{gridAutoColumns:  `max-content`}],
  left:[footerBase,{gridAutoColumns:  `max-content`, justifyContent: `end`}],
})
