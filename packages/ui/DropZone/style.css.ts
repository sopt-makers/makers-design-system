import { style, styleVariants } from '@vanilla-extract/css';
import theme from '../theme.css';

export const dropzoneBase = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.gray700,
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  border: '2px dashed transparent',
});

export const dropzoneVariants = styleVariants({
  default: [dropzoneBase],
  dragOver: [
    dropzoneBase,
    {
      backgroundColor: theme.colors.gray600,
      borderColor: theme.colors.white,
      opacity: 0.8,
    },
  ],
});
