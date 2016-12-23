const R = require('ramda');
const isProd = require('./util/env');


const postcssConfig = {
  parser: false,
  // Map is additionally set in webpack config
  map: { inline: !isProd },
  plugins: {
    // postcss-import is replaced by webpack's import
    // 'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-nested': {},
    'postcss-calc': {},
    autoprefixer: { browsers: ['last 2 versions'] },
  },
};

function makeConfig() {
  let plugins;
  if (isProd) {
    // production plugins
    plugins = {
      'css-mqpacker': {},
      'postcss-discard-comments': {},
      cssnano: { discardUnused: true },
    };
  } else {
    // development plugins
    plugins = {
    };
  }

  const prop = R.merge(postcssConfig.plugins, plugins);
  const cfg = R.set(R.lensProp('plugins'), prop, postcssConfig);

  return cfg;
}

module.exports = makeConfig();
