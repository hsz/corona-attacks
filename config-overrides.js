const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { addBabelPlugin, addWebpackResolve, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin(['babel-plugin-emotion', { sourceMap: true, autoLabel: true }]),
  addWebpackResolve({
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  }),
  config => ({
    ...config,
    plugins: config.plugins.concat([...(process.env.ANALYZER ? [new BundleAnalyzerPlugin()] : [])]),
  }),
);
