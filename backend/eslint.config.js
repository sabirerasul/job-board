import globals from "globals";
import pluginJs from "@eslint/js";
import pluginNode from "eslint-plugin-node";

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ...pluginJs.configs.recommended,
  },
  {
    ...pluginNode.configs["flat/recommended"],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];
