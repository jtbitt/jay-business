const { getGlobals } = require("eslint-plugin-mdx/lib/helpers");
const path = require("path");

module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [`react-app`, `plugin:mdx/recommended`],
  settings: {
    "mdx/code-blocks": true,
  },
  overrides: [
    {
      files: "*.mdx",
      globals: getGlobals(
        require(path.resolve(__dirname, "src/components")),
        {}
      ),
    },
  ],
};
