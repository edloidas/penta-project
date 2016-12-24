/*
Configurable webpack config.
Uses $NODE_ENV, `production` or `development`
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const htmlMinify = require('./util/config/minify');
// const jsMinify = require('./util/config/uglify');
const isProd = require('./util/env');
const CONFIG = require('./util/config');


// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((objPath, data, object) =>
  R.pipe(R.path(objPath), R.append(data), R.set(R.lensPath(objPath), R.__, object))(object)
);
// addRule :: Object -> Object -> Object
const addRule = appendToArrayByPath(['module', 'rules']);
// addPlugin :: Object -> Object -> Object
const addPlugin = appendToArrayByPath(['plugins']);

// Webpack config template
const webpackConfig = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    publicPath: '',
    filename: 'app.js',
  },
  module: {
    rules: [],
  },
  plugins: [],
};


// Allows to convert pug->html
function addPugSupport(cfg) {
  const rule = {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: !isProd,
    },
  };
  const plugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/html/index.pug',
    minify: isProd ? htmlMinify : false,
    inject: false,
  });
  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}

// Removes Flow types with Babel
// Uglifies code in production
function addBabelSupport(cfg) {
  const rule = {
    test: /\.js$/,
    exclude: /(node_modules|public)/,
    loader: 'babel-loader',
  };

  const sharedPlugins = [];
  const devPlugins = [
    // automatically injected by dev server with --hot flag
    // new HotModuleReplacementPlugin(),
  ];
  const prodPlugins = [
    // TODO: ✘ does not support ES2015+.
    // new UglifyJsPlugin(jsMinify),
  ];
  const plugins = R.concat(sharedPlugins)(isProd ? prodPlugins : devPlugins);

  const addPlugins = list => R.map(addPlugin, list);
  return R.pipe(addRule(rule), ...addPlugins(plugins))(cfg);
}

// Add support for the css bundle
// - CSS file needs to be required from JS entry
// - ExtractTextPlugin extracts css from JS to a separate file
function addPostCSSSupport(cfg) {
  const rule = {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader', loader: `css-loader?importLoaders=1!postcss-loader${isProd ? '' : '?sourceMap=inline'}`,
    }),
  };
  const plugin = new ExtractTextPlugin('style.css');

  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}

function makeConfig(cfg) {
  let updatedConfig = cfg;
  updatedConfig = R.pipe(
    addPugSupport,
    addBabelSupport,
    addPostCSSSupport
  )(updatedConfig);

  return updatedConfig;
}

module.exports = makeConfig(webpackConfig);
