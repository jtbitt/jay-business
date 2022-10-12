const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@icons": path.resolve(__dirname, "src/icons"),
        "@images": path.resolve(__dirname, "src/images"),
        "@content": path.resolve(__dirname, "content"),
        "@downloads": path.resolve(__dirname, "downloads"),
      },
    },
  });
};

exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `https://jay-business.netlify.app/*`,
    toPath: `https://www.jaybittner.com/*`,
  });

  createRedirect({
    fromPath: `http://www.jaybittner.com/* `,
    toPath: `https://www.jaybittner.com/*`,
  });

  createRedirect({
    fromPath: `http://jaybittner.com/*`,
    toPath: `https://www.jaybittner.com/*`,
  });
};
