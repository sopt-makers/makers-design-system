import { style } from '@vanilla-extract/css';
import theme from '../theme.css';

export const TopAddonLabelStyle = style({
  ...theme.fontsObject.LABEL_3_14_SB,
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  color: theme.colors.white,
});

export const TopAddonDescriptionStyle = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray300,
  marginBottom: '8px',
});

export const requiredMarkStyle = style({
  color: theme.colors.secondary,
  marginLeft: '4px',
});

export const bottomAddonContainerStyle = style({
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
