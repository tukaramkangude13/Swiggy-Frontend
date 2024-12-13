const { runtime } = require("webpack");

module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react", {runtime: "automatic"}],
    ],
};
