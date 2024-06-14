import { Meta, StoryObj } from "@storybook/react";

import { type HTMLAttributes } from "react";
import { Tag } from "@sopt-makers/ui";

interface TagOwnProps extends HTMLAttributes<HTMLSpanElement> {
  children?: string;
  size?: "sm" | "md" | "lg";
  shape?: "rect" | "pill";
  variant?: "default" | "primary" | "secondary";
  type?: "solid" | "line";
}

type TagStoryProps = TagOwnProps & { children: string };

export default {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    shape: { control: 'radio', options: ['rect', 'pill'] },
    variant: { control: 'radio', options: ['default', 'primary', 'secondary'] },
    type: { control: 'radio', options: ['solid', 'line'] },
  }
} as Meta<TagStoryProps>;

// 기본 태그 스토리
export const Default: StoryObj<TagStoryProps> = {
  args: {
    children: "Default Tag",
    size: "sm",
    shape: "rect",
    variant: "default",
    type: "solid",
  },
};
