import { colors } from '@sopt-makers/colors';
import {
  FieldBox,
  FieldBoxProps,
  FieldBoxLabelProps,
  FieldBoxBottomAddonProps,
  FieldBoxLabel,
  TextField,
  TextArea,
  Radio,
  CheckBox,
  Chip,
  Button,
} from '@sopt-makers/ui';
import { Meta, StoryObj } from '@storybook/react';

type FieldBoxStoryProps = FieldBoxProps & FieldBoxLabelProps & FieldBoxBottomAddonProps;

/**
 * FieldBox는 입력을 받는 각좀 필드류 컴포넌트(TextField, TextArea, Select등)의 Wrapper역할을 하는 컴포넌트로,<br/>
 * 서브 컴포넌트로 `FieldBox.Label`, `FieldBox.BottomAddon`, FieldBox.ErrorMessage`컴포넌트를 제공합니다.<br/>
 *
 * #### 예시 코드
 * ```tsx
 * <FieldBox
 *  topAddon={<FieldBox.Label label='안녕?' description='디스크립션' required />}
 *  bottomAddon={
 *   <FieldBox.BottomAddon
 *    leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
 *    rightAddon={<div style={{ color: colors.white }}>롸이트애드온</div>}
 *  />
 * }>
 *  <span style={{ color: colors.white }}>여긴 본문</span>
 * </FieldBox>
 * ```
 */

const meta: Meta<FieldBoxStoryProps> = {
  title: 'Components/FieldBox',
  component: FieldBox,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'string' },
    description: { control: 'string' },
    required: { control: 'boolean' },
    style: { control: false },
  },
  args: { style: { width: '100%', minWidth: '335px' }, label: 'Label', description: 'Description', required: false },
};

export default meta;

export const WithTextField: StoryObj<FieldBoxStoryProps> = {
  render: (args) => {
    return (
      <FieldBox
        topAddon={
          <FieldBoxLabel label={args.label} description={args.description} required={args.required}></FieldBoxLabel>
        }
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
            rightAddon={<div style={{ color: colors.white }}>롸이트애드온</div>}
          />
        }
        {...args}
      >
        <TextField value='value' />
      </FieldBox>
    );
  },
};

export const WithTextArea: StoryObj<FieldBoxStoryProps> = {
  render: (args) => {
    return (
      <FieldBox
        topAddon={
          <FieldBoxLabel label={args.label} description={args.description} required={args.required}></FieldBoxLabel>
        }
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
            rightAddon={<div style={{ color: colors.white }}>롸이트애드온</div>}
          />
        }
        {...args}
      >
        <TextArea value='value' />
      </FieldBox>
    );
  },
};

export const WithRadio: StoryObj<FieldBoxStoryProps> = {
  args: { label: '파트', description: '파트를 선택해주세요.', required: true },
  render: (args) => {
    return (
      <FieldBox
        topAddon={
          <FieldBoxLabel label={args.label} description={args.description} required={args.required}></FieldBoxLabel>
        }
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
            rightAddon={
              <Button theme='blue' size='sm'>
                입력 완료
              </Button>
            }
          />
        }
        {...args}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <Radio label='기획' size='lg' checked />
          <Radio label='디자인' size='lg' />
          <Radio label='안드로이드' size='lg' />
          <Radio label='iOS' size='lg' />
          <Radio label='웹' size='lg' />
          <Radio label='서버' size='lg' />
        </div>
      </FieldBox>
    );
  },
};

export const WithCheckBox: StoryObj<FieldBoxStoryProps> = {
  render: (args) => {
    return (
      <FieldBox
        topAddon={
          <FieldBoxLabel label={args.label} description={args.description} required={args.required}></FieldBoxLabel>
        }
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<div style={{ color: colors.white }}>레프트애드온</div>}
            rightAddon={
              <Button theme='blue' size='sm'>
                입력 완료
              </Button>
            }
          />
        }
        {...args}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <CheckBox label='CheckBox1' size='lg' checked />
          <CheckBox label='CheckBox2' size='lg' />
          <CheckBox label='CheckBox3' size='lg' />
        </div>
      </FieldBox>
    );
  },
};

export const WithChip: StoryObj<FieldBoxStoryProps> = {
  args: {
    label: '경력',
    description: '정규직으로 근무한 경력을 기준으로 선택해주세요.',
    required: true,
  },
  render: (args) => {
    return (
      <FieldBox
        topAddon={
          <FieldBoxLabel label={args.label} description={args.description} required={args.required}></FieldBoxLabel>
        }
        bottomAddon={
          <FieldBox.BottomAddon
            leftAddon={<FieldBox.ErrorMessage message='경력을 선택해주세요' />}
            rightAddon={
              <Button theme='blue' size='sm' disabled>
                선택 완료
              </Button>
            }
          />
        }
        {...args}
      >
        <div style={{ display: 'flex', gap: '10px' }}>
          <Chip size='sm'>아직 없어요</Chip>
          <Chip size='sm'>인턴 경험만 있어요</Chip>
          <Chip size='sm'>주니어(0~3년)</Chip>
          <Chip size='sm'>미들(4~8년)</Chip>
          <Chip size='sm'>시니어(9년 이상)</Chip>
        </div>
      </FieldBox>
    );
  },
};
