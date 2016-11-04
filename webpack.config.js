/*
Configurable webpack config.
Uses $NODE_ENV, `production` or `development`
*/
const path = require('path');
const deepAssign = require('deep-assign');
const R = require('ramda');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlMinify = require('./util/config/minify');
const CONFIG = require('./util/config');


const environment = process.env.NODE_ENV;
// Consider `development` by default
const isProd = environment === 'production';


// assign :: Object -> Object -> Object
const assign = R.curry((a, b) => deepAssign({}, a, b));
// appendToArrayByPath :: Array -> Object -> Object -> Object
const appendToArrayByPath = R.curry((path, data, object) =>
  R.pipe(R.path(path), R.append(data), R.set(R.lensPath(path), R.__, object))(object)
);

// addLoader :: Object -> Object -> Object
const addLoader = appendToArrayByPath(['module', 'loaders']);
// addPlugin :: Object -> Object -> Object
const addPlugin = appendToArrayByPath(['plugins']);

const webpackConfig = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: 'app.js',
  },
  module: {
    loaders: [],
  },
  plugins: [],
};

function addPugSupport(cfg) {
  const loader = {
    test: /\.pug$/,
    loader: 'pug',
    options: {
      pretty: !isProd,
    },
  };
  const plugin = new HtmlWebpackPlugin({
    filename: 'html/index.html',
    template: 'src/html/index.pug',
    minify: isProd ? htmlMinify : false,
  });
  return R.pipe(addLoader(loader), addPlugin(plugin))(cfg);
}

function addBabelSupport(cfg) {
  const loader = {
    test: /\.js$/,
    exclude: /(node_modules|public)/,
    loader: 'babel',
  };
  return addLoader(loader)(cfg);
}

function makeConfig(cfg) {
  let updatedConfig = cfg;

  updatedConfig = addPugSupport(updatedConfig);
  updatedConfig = addBabelSupport(updatedConfig);

  return updatedConfig;
}

module.exports = makeConfig(webpackConfig);
