import { colors } from '@sopt-makers/colors';
import { Skeleton, SkeletonProps, Button as MDSButton, Toggle } from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

/**
 * #### Skeleton 컴포넌트는 요소의 로딩 상태를 나타낼 때 사용합니다.
 */
const meta: Meta<SkeletonProps> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: { width: { controls: 'string' }, height: { controls: 'string' }, variant: { controls: 'radio' } },
  args: { width: 350, height: 40, variant: 'default' },
};

export default meta;

/**
 * > 기본 형태는 width, height를 조절하여 사용합니다.
 */
export const Default: StoryObj<SkeletonProps> = {
  render: (args) => {
    return <Skeleton {...args} />;
  },
};

/**
 * `border-radius : '100%'` <br/>
 * width, height 값을 같은 값으로 설정하는것을 권장합니다.
 */
export const Circular: StoryObj<SkeletonProps> = {
  args: { width: 40, variant: 'circular' },
  render: (args) => {
    return <Skeleton {...args} />;
  },
};

/**
 * > **컴포넌트의 형태에 맞춰 스켈레톤의 모양을 설정**하고 싶다면, <br/>
 * **Skeleton의 children에** 해당하는 컴포넌트를 넣어줍니다..
 *
 * #### 예시 코드
 * ```tsx
 * <Skeleton>
 *  <Button>버튼버튼버튼</Button>
 * </Skeleton>
 * <Skeleton>
 *  <Toggle />
 * </Skeleton>
 * ```
 */
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

export const BannerExample: StoryObj<SkeletonProps> = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          padding: '16px',
          alignItems: 'center',
          backgroundColor: `${colors.gray800}`,
          borderRadius: '14px',
          gap: '8px',
        }}
      >
        <Skeleton width={28} height={28} />
        <Skeleton width={47} height={20} />
        <Skeleton width={286} height={20} />
        <Skeleton width={28} height={28} />
      </div>
    );
  },
};
