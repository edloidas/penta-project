/*
Configurable webpack config.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractConfig = require('./util/config/extract');
// const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const htmlMinify = require('./util/config/minify');
// const jsMinify = require('./util/config/uglify');
const isProd = require('./util/env').prod;
const isDev = require('./util/env').dev;
const CONFIG = require('./util/config');


// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((objPath, data, object) =>
  R.pipe(R.path(objPath), R.append(data), R.set(R.lensPath(objPath), R.__, object))(object)
);
// addRule :: Object -> Object -> Object
const addRule = appendToArrayByPath(['module', 'rules']);
// addPlugin :: Object -> Object -> Object
const addPlugin = appendToArrayByPath(['plugins']);
// addPlugins :: Array -> Array
const addPlugins = list => R.map(addPlugin, list);


// Webpack config template
const webpackConfig = {
  entry: {
    app: [
      './src/js/app.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    publicPath: '',
    filename: '[name].js',
  },
  module: {
    rules: [],
  },
  plugins: [],
};


// =====================
// Allows to convert pug->html
// Uglifies code in produnction (see `rule.pretty` and `plugin.minify`)
// Injects CSS in production
// =====================
function addPugSupport(cfg) {
  const rule = {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: isDev,
    },
  };
  const plugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/html/index.pug',
    minify: isProd ? htmlMinify : false,
    inject: isProd ? 'head' : false,
  });

  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}


// =====================
// Removes Flow types with Babel
// Uglifies code in production
// =====================
function addBabelSupport(cfg) {
  const rule = {
    test: /\.js$/,
    exclude: /(node_modules|public)/,
    loader: 'babel-loader',
  };

  const plugins = [
    ...isDev ? [
      // automatically injected by dev server with --hot flag
      // new HotModuleReplacementPlugin(),
    ] : [],
    ...isProd ? [
      // TODO: ✘ does not support ES2015+.
      // new UglifyJsPlugin(jsMinify),
    ] : [],
  ];

  return R.pipe(addRule(rule), ...addPlugins(plugins))(cfg);
}


// =====================
// Add support for the css bundle
// - CSS file needs to be required from JS entry
// - ExtractTextPlugin extracts css from JS to a separate file
// =====================
function addPostCSSSupport(cfg) {
  let rule = {
    test: /\.css$/,
  };

  const devLoaders = {
    use: [
      { loader: 'style-loader' },
      {
        loader: 'css-loader',
        options: { importLoaders: 1 },
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: 'inline' },
      },
    ],
  };
  const prodLoaders = {
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader!css-loader?importLoaders=1!postcss-loader?sourceMap=inline',
      loader: 'css-loader?importLoaders=1!postcss-loader',
    }),
  };
  const loaders = isProd ? prodLoaders : devLoaders;

  rule = R.merge(rule)(loaders);

  const plugin = new ExtractTextPlugin(R.merge({ filename: 'style.css' }, extractConfig));

  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}


// =====================
// Make final config support needed rules
// =====================
function makeConfig(cfg) {
  return R.pipe(
    addPugSupport,
    addBabelSupport,
    addPostCSSSupport
  )(cfg);
}

module.exports = makeConfig(webpackConfig);
