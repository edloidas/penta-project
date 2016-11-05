const R = require('ramda');


const environment = process.env.NODE_ENV;
// Consider `development` by default
const isProd = environment === 'production';


const postcssConfig = {
  parser: false,
  map: isProd ? false : 'inline',
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
  let prop;

  if (isProd) {
    prop = R.merge(postcssConfig.plugins, {
      'css-mqpacker': {},
      'postcss-discard-comments': {},
      cssnano: { discardUnused: false },
    });
  } else {
    prop = R.merge(postcssConfig.plugins, {
      stylelint: {},
    });
  }

  const cfg = R.set(R.lensProp('plugins'), prop, postcssConfig);

  return cfg;
}

module.exports = makeConfig();
