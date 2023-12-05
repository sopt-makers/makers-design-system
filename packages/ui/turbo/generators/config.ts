import type { PlopTypes } from "@turbo/gen";

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator("react-component", {
    description: "Adds a new react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{pascalCase name}}/style.css.ts",
        templateFile: "templates/style.hbs",
      },
      {
        type: "add",
        path: "{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: '{{pascalCase name}}/index.tsx',
        template: 'export { default } from "./{{pascalCase name}}";'
      },
      {
        type: "append",
        path: "index.tsx",
        pattern: /(?<insertion>\/\/ component exports)/g,
        template: 'export { default as {{pascalCase name}} } from "./{{pascalCase name}}";',
      },
    ],
  });
}
