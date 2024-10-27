import { Skeleton, SkeletonProps, Button as MDSButton, Toggle } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
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

export const HasChildren: StoryObj<SkeletonProps> = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Skeleton>
          <MDSButton>버튼버튼버튼</MDSButton>
        </Skeleton>
        <Skeleton>
          <Toggle />
        </Skeleton>
      </div>
    );
  },
};
