import { style } from '@vanilla-extract/css';
import theme from '../theme.css';

export const TopAddonLabelStyle = style({
  ...theme.fontsObject.LABEL_3_14_SB,
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  textAlign: 'left',
  color: theme.colors.white,
});

export const TopAddonDescriptionStyle = style({
  ...theme.fontsObject.LABEL_4_12_SB,
  color: theme.colors.gray300,
});

export const requiredMarkStyle = style({
  color: theme.colors.secondary,
  marginLeft: '4px',
});

export const topAddonContainerStyle = style({
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const bottomAddonContainerStyle = style({
  marginTop: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const errorMessage = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  color: theme.colors.error,
  ...theme.fontsObject.LABEL_4_12_SB,
});
