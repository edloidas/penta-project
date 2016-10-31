const del = require('del');
const CONFIG = require('./config');

function clean(src) {
  const files = src || [CONFIG.root.dist, CONFIG.root.temp];
  // Clean files, started with dot
  const dot = true;

  return del(files, { dot });
}

module.exports = clean;
