const rimraf = require('rimraf');
const CONFIG = require('./config');

function rimrafPromise(files) {
  return new Promise((resolve, reject) =>
    rimraf(files.join(' '), err => (err ? reject(err) : resolve(true)))
  );
}

function clean(src) {
  const files = src || [CONFIG.root.dist, CONFIG.root.temp];

  return rimrafPromise(files);
}

module.exports = clean;
