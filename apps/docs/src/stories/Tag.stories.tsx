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

// 커스텀 버튼 스토리
export const Another: StoryObj<TagStoryProps> = {
  args: {
    children: "Another Tag",
    size: "md",
    shape: "pill",
    variant: "primary",
    type: "line",
  },
};
