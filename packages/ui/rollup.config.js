import json from "@rollup/plugin-json";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import path from "path";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
import ts from "typescript";

const loadCompilerOptions = (tsconfig) => {
  if (!tsconfig) return {};
  const configFile = ts.readConfigFile(tsconfig, ts.sys.readFile);
  const { options } = ts.parseJsonConfigFileContent(
    configFile.config,
    ts.sys,
    "./"
  );
  return options;
};

const compilerOptions = loadCompilerOptions("tsconfig.json");

const plugins = [vanillaExtractPlugin(), nodeExternals(), esbuild(), json()];

const dirSrc = [
  ["dist", "cjs"],
  ["dist/esm", "esm"],
];

export default [
  ...dirSrc.map(([dir, format]) => {
    return {
      input: ["index.ts", "cssVariables.ts"],
      plugins,
      output: {
        dir,
        format,
        preserveModules: true,
        preserveModulesRoot: ".",
        entryFileNames({ name }) {
          return `${name.replace(/\.css$/, ".css.vanilla")}.js`;
        },
        assetFileNames({ name }) {
          return name;
        },
        exports: "named",
      },
    };
  }),
  // Declaration files
  {
    input: ["index.ts", "cssVariables.ts"],
    plugins: [
      ...plugins,
      dts({
        compilerOptions: {
          ...compilerOptions,
          baseUrl: path.resolve(compilerOptions.baseUrl || "."),
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true,
          noEmitOnError: true,
          target: ts.ScriptTarget.ESNext,
        },
      }),
    ],
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: ".",
      },
    ],
  },
];
