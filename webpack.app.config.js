/*
Game webpack config. Compiles Electron app.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const {
  NamedModulesPlugin,
  NoEmitOnErrorsPlugin,
  DefinePlugin
} = require('webpack');
const minifyConfig = require('./util/config/minify');
const env = require('./util/env');
const CONFIG = require('./util/config');

const isProd = env.prod;

module.exports = {
  entry: './src/js/app/index.ts',
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    filename: 'index.js',
    // Allows to use simple name in externals, instead of `require('...')`
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /(node_modules|\.\/build|\.\/dist)/,
        options: {
          configFile: 'src/js/tsconfig.app.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
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
      ? [new MinifyPlugin(Object.assign({}, minifyConfig, { evaluate: true }))]
      : [])
  ],
  mode: env.type,
  devtool: isProd ? false : 'inline-source-map'
};
