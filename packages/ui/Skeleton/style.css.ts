import { colors } from '@sopt-makers/colors';
import { keyframes, style, globalStyle } from '@vanilla-extract/css';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import SkeletonBorderRadius from './constants';

const pulseKeyframe = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
  },
});

export const root = style({
  display: 'block',
  backgroundColor: colors.gray700,
  animation: `${pulseKeyframe} 2s ease-in-out 0.5s infinite`,
});

export const hasChildren = style({
  maxWidth: 'fit-content',
  height: 'auto',
});

globalStyle(`${hasChildren} > *`, {
  visibility: 'hidden',
});

const sprinkleProperties = defineProperties({
  properties: {
    borderRadius: SkeletonBorderRadius,
  },
});

export const sprinkles = createSprinkles(sprinkleProperties);
