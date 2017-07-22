/*
Game webpack config. Compiles engine and ui.
Uses $NODE_ENV, `production` or `development` (also default)
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const extractConfig = require('./util/config/extract');
const htmlConfig = require('./util/config/html');
const babiliConfig = require('./util/config/babili');
const CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
const SourceMapDevToolPlugin = require('webpack').SourceMapDevToolPlugin;
const NamedModulesPlugin = require('webpack').NamedModulesPlugin;
const NoEmitOnErrorsPlugin = require('webpack').NoEmitOnErrorsPlugin;
const DefinePlugin = require('webpack').DefinePlugin;
const env = require('./util/env');
const CONFIG = require('./util/config');

const isProd = env.prod;
const isDev = env.dev;

// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((objPath, data, object) =>
  R.pipe(
    R.path(objPath),
    R.append(data),
    R.set(R.lensPath(objPath), R.__, object)
  )(object)
);
// addRule :: Object -> Object -> Object
const addRule = appendToArrayByPath(['module', 'rules']);
// addPlugin :: Object -> Object -> Object
const addPlugin = appendToArrayByPath(['plugins']);
// addPlugins :: Array -> Array
const addPlugins = list => R.map(addPlugin, list);

// stringifyBoolProperty :: Array -> Array
const stringifyBoolProperty = R.ifElse(
  v => R.equals(R.last(v), true),
  R.init,
  R.clone
);
// mergeOptions :: Object -> String
const stringifyOptions = R.pipe(
  R.toPairs,
  R.map(R.pipe(stringifyBoolProperty, R.join('='))),
  R.join('&')
);
// stringifyUse :: Object -> String
const stringifyUse = use =>
  `${use.loader}${use.options ? '?' : ''}${stringifyOptions(use.options)}`;

const webpackConfigTemplate = {
  entry: {
    engine: './src/js/engine/index.js',
    ui: './src/js/ui/index.js',
    vendor: [
      // 'classnames',
      // 'mathjs',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'history',
      'redux',
      'redux-actions',
      'react-transition-group'
      // 'three',
      // Unnesessary libraries
      // 'styled-components',
      // 'redux-devtools',
      // Vendor libraris, that cause error after extraction
      // 'react-hot-loader',
    ]
  },
  output: {
    path: path.resolve(__dirname, CONFIG.root.dist),
    filename: '[name].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.type) }
    }),
    new NamedModulesPlugin(),
    new NoEmitOnErrorsPlugin()
  ]
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
      self: true
    }
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
    exclude: /(node_modules|\.\/build|\.\/dist)/,
    loader: 'babel-loader'
  };

  const plugins = [
    ...(isDev
      ? [
          // automatically injected by dev server with --hot flag
          // new HotModuleReplacementPlugin(),
          new SourceMapDevToolPlugin({
            filename: '[name].js.map',
            exclude: ['vendor.js']
          })
        ]
      : []),
    ...(isProd
      ? [
          // UglifyJs is replaced with Babili
          // Babili as preset in `.babelrc` does not optimize vendor chunk.
          new BabiliPlugin(babiliConfig)
        ]
      : [])
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
    test: /\.css$/
  };

  const loader = {
    style: {
      loader: 'style-loader'
    },
    css: {
      loader: 'css-loader',
      options: { importLoaders: 1 }
    },
    postcss: {
      loader: 'postcss-loader',
      options: { sourceMap: 'inline' }
    }
  };

  const devLoaders = {
    use: Object.values(loader)
  };

  const prodLoaders = {
    use: ExtractTextPlugin.extract({
      // use `devLoaders` converted to query string as `fallback`
      fallback: stringifyUse(loader.style),
      use: `${stringifyUse(loader.css)}!postcss-loader`
    })
  };
  const loaders = isProd ? prodLoaders : devLoaders;

  rule = R.merge(rule)(loaders);

  const plugin = new ExtractTextPlugin(
    R.merge({ filename: 'style.css' }, extractConfig)
  );

  return R.pipe(addRule(rule), addPlugin(plugin))(cfg);
}

// =====================
// Make final config support needed rules
// =====================
function makeConfig(cfg) {
  return R.pipe(addPugSupport, addBabelSupport, addPostCSSSupport)(cfg);
}

module.exports = makeConfig(webpackConfigTemplate);
