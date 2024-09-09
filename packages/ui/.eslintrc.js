const vitest = require('eslint-plugin-vitest');

module.exports = {
  extends: ['custom/react-internal'],
  plugins: ['vitest'],
  rules: {
    ...vitest.configs.recommended.rules,
  },
};
