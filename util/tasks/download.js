const R = require('ramda');
const download = require('download');
const path = require('path');
const url = require('url');
const clean = require('../clean');
const unzip = require('../unzip');
const CONFIG = require('../config');

const nameFromUrl = R.pipe(url.parse, R.prop('pathname'), path.basename);

const dataUrl = CONFIG.data.url;
const temp = CONFIG.root.temp;
const dataZip = path.join(temp, nameFromUrl(dataUrl));
const dataDest = path.join(CONFIG.root.dist, CONFIG.data.dist);

clean([dataDest])
  .then(() => download(dataUrl, temp))
  .then(() => unzip(dataZip, dataDest))
  .then(() => clean([temp]));
