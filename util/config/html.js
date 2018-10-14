const isProd = require('../env').prod;

// html-minifier options
const htmlMinify = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  html5: true,
  preserveLineBreaks: true,
  removeComments: true,
  removeEmptyAttributes: true,
  useShortDoctype: true,
};

// ExtractTextPlugin options
module.exports = {
  filename: 'index.html',
  template: 'src/html/index.pug',
  minify: isProd ? htmlMinify : false,
  inject: false, // when enabled, use 'head' in production
  // Custom variables
  production: isProd,
};
