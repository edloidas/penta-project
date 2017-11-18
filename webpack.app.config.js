/*
Game webpack config. Compiles engine and ui.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');
const babiliConfig = require('./util/config/babili');
const {
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin
} = require('webpack');
const env = require('./util/env');
const CONFIG = require('./util/config');

const isProd = env.prod;

module.exports = {
  entry: './src/js/app/index.js',
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    filename: 'index.js',
    // Allows to use simple name in externals, instead of `require('...')`
    libraryTarget: 'commonjs2'
  },
  // Exclude node packages from loading with webpack
  target: 'node',
  // Allows to use variable in the main file of the Electron application
  node: {
    __dirname: false
  },
  // Externals allows to avoid using webpack's target `electron-main`, since
  // we need to fix the `__dirname` by setting previous two properties.
  externals: {
    electron: 'electron',
    'electron-updater': 'electron-updater',
    'electron-log': 'electron-log'
  },
  plugins: [
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.type) }
    }),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin(),
    ...(isProd
      ? [new BabiliPlugin(Object.assign({}, babiliConfig, { evaluate: true }))]
      : [])
  ]
};
