const R = require('ramda');
const isProd = require('./util/env').prod;
const isDev = require('./util/env').dev;


const postcssConfig = {
  parser: false,
  // Map is additionally set in webpack config
  map: { inline: isDev },
  plugins: {
    // postcss-import is replaced by webpack's import
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-calc': {},
    autoprefixer: { browsers: [
      '>1%',
      'last 2 versions',
      'not ie < 11',
    ] },
  },
};

function makeConfig() {
  const devPlugins = {};
  const prodPlugins = {
    'css-mqpacker': {},
    'postcss-discard-comments': {},
    cssnano: { discardUnused: true },
  };

  const plugins = isProd ? prodPlugins : devPlugins;

  const prop = R.merge(postcssConfig.plugins, plugins);
  const cfg = R.set(R.lensProp('plugins'), prop, postcssConfig);

  return cfg;
}

module.exports = makeConfig();
