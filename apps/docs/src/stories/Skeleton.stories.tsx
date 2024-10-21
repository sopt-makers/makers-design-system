import { Skeleton, SkeletonProps } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;

export const Default: StoryObj<SkeletonProps> = {
  render: () => {
    return <Skeleton width={300} height={48} variant='default' />;
  },
};

export const Circular: StoryObj<SkeletonProps> = {
  render: () => {
    return <Skeleton width={40} height={40} variant='circular' />;
  },
};
