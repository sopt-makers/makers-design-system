import { style } from '@vanilla-extract/css';
import theme from '../theme.css';

export const dropzoneStyle = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.colors.gray700,
  borderRadius: '10px',

  cursor: 'pointer',
});

export const dropzoneInputStyle = style({
  position: 'absolute',
  width: 'transparent',
  height: 'transparent',
});
