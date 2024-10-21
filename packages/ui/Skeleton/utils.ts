import { sprinkles } from './style.css';
import type { SkeletonVariant } from './types';

const createSkeletonStyle = (variant: SkeletonVariant) => {
  return sprinkles({ borderRadius: variant });
};

export default createSkeletonStyle;
