import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";
import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import nodeExternals from "rollup-plugin-node-externals";
import preserveDirectives from "rollup-plugin-preserve-directives";
import analyze from "rollup-plugin-analyzer";

const plugins = [
  vanillaExtractPlugin(),
  nodeExternals(),
  esbuild(),
  preserveDirectives(),
  analyze({ summaryOnly: true }),
];

const dirSrc = [
  ["dist", "cjs"],
  ["dist/esm", "es"],
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
        exports: "named",
        entryFileNames: ({ name }) =>
          `${name.replace(/\.css$/, ".css.vanilla")}.js`,
        assetFileNames: ({ name }) => name,
      },
      onwarn(warning, warn) {
        const errorCode = ["MODULE_LEVEL_DIRECTIVE", "SOURCEMAP_ERROR"];
        if (!errorCode.includes(warning.code)) {
          warn(warning);
        }
      },
    };
  }),
  {
    input: ["index.ts"],
    plugins: [...plugins, dts()],
    output: [
      {
        dir: "dist",
        format: "es",
        preserveModules: true,
        preserveModulesRoot: ".",
      },
    ],
  },
];
