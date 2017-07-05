const htmlMinify = require('./minify');
const isProd = require('../env').prod;

// ExtractTextPlugin options
module.exports = {
  filename: 'index.html',
  template: 'src/html/index.pug',
  minify: isProd ? htmlMinify : false,
  inject: false, // when enabled, use 'head' in production
  // Custom variables
  production: isProd
};
