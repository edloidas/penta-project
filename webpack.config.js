/*
Configurable webpack config.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractConfig = require('./util/config/extract');
const htmlConfig = require('./util/config/html');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const UglifyJsPlugin = require('webpack').optimize.UglifyJsPlugin;
const NoErrorsPlugin = require('webpack').NoErrorsPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const jsMinify = require('./util/config/uglify');
const env = require('./util/env');
const CONFIG = require('./util/config');

const isProd = env.prod;
const isDev = env.dev;


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

// mergeOptions :: Object -> String
const stringifyOptions = R.pipe(R.toPairs, R.map(R.join('=')), R.join('&'));
// stringifyUse :: Object -> String
const stringifyUse = use => `${use.loader}${use.options ? '?' : ''}${stringifyOptions(use.options)}`;
// stringifyUse :: Array -> String
const stringifyUses = R.pipe(R.map(stringifyUse), R.join('!'));


const webpackConfigTemplate = {
  entry: {
    engine: './src/js/engine/index.js',
    ui: './src/js/ui/index.js',
    vendor: [
      'classnames',
      'mathjs',
      'react',
      'react-dom',
      'react-hot-loader',
      'react-redux',
      'react-router',
      'react-router-redux',
      'recompose',
      'redux',
      'redux-actions',
      'redux-devtools',
      'three',
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
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.type) },
    }),
    new NoErrorsPlugin(),
  ],
};


// =====================
// Allows to convert pug->html
// Uglifies code in produnction (see `rule.pretty` and `plugin.minify`)
// Injects CSS and JS in production (disabled)
// =====================
function addPugSupport(cfg) {
  const rule = {
    test: /\.pug$/,
    loader: 'pug-loader',
    options: {
      pretty: !isDev,
      self: true,
    },
  };
  const plugin = new HtmlWebpackPlugin(htmlConfig);

  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}


// =====================
// Removes Flow types with Babel
// Uglifies code in production
// =====================
function addBabelSupport(cfg) {
  const rule = {
    test: /\.jsx?$/,
    exclude: /(node_modules|public)/,
    loader: 'babel-loader',
  };

  const plugins = [
    ...isDev ? [
      // automatically injected by dev server with --hot flag
      // new HotModuleReplacementPlugin(),
    ] : [],
    ...isProd ? [
      new UglifyJsPlugin(jsMinify),
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
      // use `devLoaders` converted to query string as `fallbackLoader`
      fallbackLoader: stringifyUses(devLoaders.use),
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

module.exports = makeConfig(webpackConfigTemplate);
