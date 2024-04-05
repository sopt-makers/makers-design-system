import fs from 'node:fs';
import path from 'node:path';
import allVariables from '../cssVariables';

const tsconfigPath = path.resolve("../tsconfig.json");
const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf8"));
const outputDir = tsconfig.compilerOptions.outDir;

Object.keys(allVariables).forEach((key) => {
  const variableValues = Object.entries(allVariables).find(
    ([name]) => name === key
  )[1];

  fs.writeFileSync(
    path.join(outputDir, `${toFileName(key)}.css`),
    `${variableValues}`
  );
});

function toCssCasing(str) {
  return str
    .replace(/(?:[a-z])/g, "$1")
    .replace(/(?:[A-Z])/g, "-$1")
    .toLowerCase();
}

function toFileName(str) {
  return toCssCasing(str);
}
