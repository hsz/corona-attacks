const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-emotion', { sourceMap: true, autoLabel: true }]),
  config => ({
    ...config,
    plugins: config.plugins.concat([...(process.env.ANALYZER ? [new BundleAnalyzerPlugin()] : [])]),
  }),
);
