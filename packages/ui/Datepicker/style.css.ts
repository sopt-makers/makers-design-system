import { style, globalStyle } from '@vanilla-extract/css';
import theme from '../theme.css';

export const container = style({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
});

export const dropdown = style({
  position: 'fixed',
  backgroundColor: theme.colors.gray900,
  borderRadius: '12px',
  padding: '12px',
  zIndex: 1000,
  width: '318px',
  boxSizing: 'border-box',
});

export const rangeContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const textFieldWrapper = style({
  width: '180px',
});

globalStyle(`${textFieldWrapper} input`, {
  width: '100%',
  height: '100%',
});

globalStyle(`${textFieldWrapper} input:disabled`, {
  cursor: 'not-allowed',
});

export const rangeSeparator = style({
  color: theme.colors.gray300,
});

export const grid = style({
  display: 'grid',
  justifyContent: 'center',
  justifyItems: 'center',
  width: '294px',
  rowGap: '8px',
});

export const dayGrid = style({
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridAutoRows: '42px',
});

export const monthGrid = style({
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(4, 42px)',
  gap: '20px',
  paddingBottom: '40px',
});

const commonCellColors = {
  'backgroundColor': 'transparent',
  'color': theme.colors.gray30,

  ':hover': {
    backgroundColor: theme.colors.gray700,
    color: theme.colors.gray30,
  },

  ':active': {
    backgroundColor: theme.colors.gray10,
    color: theme.colors.gray800,
  },
};

const selectedCellColors = {
  'backgroundColor': theme.colors.gray10,
  'color': theme.colors.gray800,

  ':hover': {
    backgroundColor: theme.colors.gray10,
    color: theme.colors.gray800,
  },

  ':active': {
    backgroundColor: theme.colors.gray10,
    color: theme.colors.gray800,
  },
};

const disabledCellColors = {
  'backgroundColor': 'transparent',
  'color': theme.colors.gray500,

  ':hover': {
    backgroundColor: 'transparent',
    color: theme.colors.gray500,
  },

  ':active': {
    backgroundColor: 'transparent',
    color: theme.colors.gray500,
  },
};

export const dayHeaders = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  marginBottom: '8px',
});

export const dayHeader = style({
  color: theme.colors.gray400,
  textAlign: 'center',
  padding: '8px 0',
  ...theme.fontsObject.LABEL_4_12_SB,
});

export const cell = style({
  'position': 'relative',
  'width': '32px',
  'height': '32px',
  'border': 'none',
  'borderRadius': '50%',
  'cursor': 'pointer',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'margin': '5px',
  'fontSize': '18px',
  ...commonCellColors,

  ':focus': {
    outline: 'none',
  },
});

export const monthYearCell = style({
  width: '100%',
  height: '38x',
  ...theme.fontsObject.LABEL_1_18_SB,
  borderRadius: '8px',
});

export const cellOtherMonth = style({
  color: theme.colors.gray500,
});

export const todayIndicator = style({
  position: 'absolute',
  bottom: '-10px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '4px',
  height: '4px',
  backgroundColor: theme.colors.gray400,
  borderRadius: '50%',
  pointerEvents: 'none',
});

export const cellSelected = style({
  ...selectedCellColors,
});

export const cellRangeStart = style({
  ...selectedCellColors,
  'position': 'relative',
  'display': 'flex',
  'width': '32px',
  'height': '32px',
  'zIndex': 2,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '32px',
    height: '32px',
    backgroundColor: theme.colors.gray10,
    borderRadius: '50%',
    zIndex: -1,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    left: '-3px',
    height: '38px',
    backgroundColor: theme.colors.gray700,
    borderRadius: '19px 0  0 19px',
    zIndex: -2,
  },
});

// 시작날짜만 선택된 경우 (range에서 endDate가 없을 때)
export const cellRangeStartOnly = style({
  ...selectedCellColors,
  'position': 'relative',
  'width': '32px',
  'height': '32px',
  'zIndex': 2,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '32px',
    height: '32px',
    backgroundColor: theme.colors.gray10,
    borderRadius: '50%',
    zIndex: -1,
  },
});

export const cellRangeEnd = style({
  ...selectedCellColors,
  'position': 'relative',
  'zIndex': 2,
  'width': '32px',
  'height': '32px',

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '32px',
    height: '32px',
    backgroundColor: theme.colors.gray10,
    borderRadius: '50%',
    zIndex: -1,
  },

  '::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '40px',
    height: '38px',
    right: '-3px',
    backgroundColor: theme.colors.gray700,
    borderRadius: '0 19px 19px 0',
    zIndex: -2,
  },
});

export const cellInRange = style({
  ...commonCellColors,
  'position': 'relative',
  'zIndex': 1,

  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '42px',
    height: '38px',
    backgroundColor: theme.colors.gray700,
    zIndex: -1,
  },
});

export const cellDisabled = style({
  ...disabledCellColors,
  cursor: 'not-allowed',
});

export const navigation = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const navButtons = style({
  display: 'flex',
  gap: '8px',
});

export const navButton = style({
  'width': '20px',
  'height': '20px',
  'border': 'none',
  'color': theme.colors.white,
  'cursor': 'pointer',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'transition': 'background-color 0.2s ease',
  'backgroundColor': 'transparent',
  'borderRadius': '8px',

  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
  },
});

export const currentView = style({
  background: 'none',
  border: 'none',
  color: theme.colors.gray30,
  cursor: 'pointer',
  padding: '8px 0',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',

  ...theme.fontsObject.LABEL_2_16_SB,
});
