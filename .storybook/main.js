const { resolve } = require("path");

module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: resolve(__dirname, "../"),
    });
    return config;
  },
  stories: ["../src/stories/*.stories.[tj]s"],
  addons: ["@storybook/addon-viewport"],
};
