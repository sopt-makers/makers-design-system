import type { Preview } from "@storybook/react";

import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'centered',
    backgrounds: {
      default: 'dark', // 기본 배경을 'dark'로 설정
      values: [
        { name: 'dark', value: "#0F1012" }, // 'dark' 배경의 색상을 검정색으로 지정
        { name: 'white', value: '#ffffff' }
      ],
    },
  },
};

export default preview;
