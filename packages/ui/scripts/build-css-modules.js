const fs = require("fs");
const path = require("path");
const allVariables = require("../dist/cssVariables");
const outputDir = require("../tsconfig.json").compilerOptions.outDir;

Object.keys(allVariables).forEach((key) => {
  const variableValues = Object.entries(allVariables).find(
    ([name]) => name === key
  )[1];

  fs.writeFileSync(
    path.join(outputDir, toFileName(key) + ".css"),
    `${variableValues}`
  );
});

function toCssCasing(str) {
  return str
    .replace(/([a-z])/, "$1")
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase();
}

function toFileName(str) {
  return toCssCasing(str);
}
