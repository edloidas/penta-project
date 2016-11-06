/*
Configurable webpack config.
Uses $NODE_ENV, `production` or `development`
*/
const path = require('path');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglify-js-plugin');
const htmlMinify = require('./util/config/minify');
const jsMinify = require('./util/config/uglify');
const CONFIG = require('./util/config');


const environment = process.env.NODE_ENV;
// Consider `development` by default
const isProd = environment === 'production';


// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((objPath, data, object) =>
  R.pipe(R.path(objPath), R.append(data), R.set(R.lensPath(objPath), R.__, object))(object)
);
// addLoader :: Object -> Object -> Object
const addLoader = appendToArrayByPath(['module', 'loaders']);
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
    loaders: [],
  },
  plugins: [],
};

// Allows to convert pug->html
function addPugSupport(cfg) {
  const loader = {
    test: /\.pug$/,
    loader: 'pug',
    options: {
      pretty: !isProd,
    },
  };
  const plugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/html/index.pug',
    minify: isProd ? htmlMinify : false,
  });
  return R.pipe(addLoader(loader), addPlugin(plugin))(cfg);
}

// Removes Flow types with Babel
// Uglifies code in production
function addBabelSupport(cfg) {
  const loader = {
    test: /\.js$/,
    exclude: /(node_modules|public)/,
    loader: 'babel',
  };

  const devPlugins = [];
  const prodPlugins = [
    new UglifyJsPlugin(jsMinify),
  ];
  const plugins = isProd ? R.concat(devPlugins, prodPlugins) : devPlugins;

  const addPlugins = list => R.map(addPlugin, list);
  return R.pipe(addLoader(loader), ...addPlugins(plugins))(cfg);
}

// Add support for the css bundle
// - CSS file needs to be required from JS entry
// - ExtractTextPlugin extracts css from JS to a separate file
function addPostCSSSupport(cfg) {
  const loader = {
    test: /\.css$/,
    loaders: ExtractTextPlugin.extract({
      fallbackLoader: 'style', loader: `css?importLoaders=1!postcss${isProd ? '' : '?sourceMap=inline'}`,
    }),
  };
  const plugin = new ExtractTextPlugin('style.css');

  return R.pipe(addLoader(loader), addPlugin(plugin))(cfg);
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
