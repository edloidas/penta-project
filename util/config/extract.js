const isDev = require('../env').dev;

// ExtractTextPlugin options
module.exports = {
  allChunks: true,
  disable: isDev,
};
