const R = require('ramda');
const download = require('download');
const path = require('path');
const url = require('url');
const clean = require('../clean');
const unzip = require('../unzip');
const CONFIG = require('../config');

const nameFromUrl = R.pipe(
  url.parse,
  R.prop('pathname'),
  path.basename
);

const dataUrl = CONFIG.data.url;
const { temp } = CONFIG.root;
const dataZip = path.join(temp, nameFromUrl(dataUrl));
const dataDest = path.join(CONFIG.root.dist, CONFIG.data.dist);

/* eslint-disable no-console */
const logger = msg => () => console.log(msg);
const root = path.resolve(__dirname, '../..');
const headers = { headers: { 'content-type': 'application/zip' } };

clean([dataDest])
  .then(() => download(dataUrl, temp, headers))
  .then(logger(`Downloaded '${dataUrl}' to '${path.join(root, temp)}'`))
  .then(() => unzip(dataZip, dataDest))
  .then(logger(`Unziped to '${path.join(root, dataDest)}'`))
  .then(() => clean([temp]))
  .catch(error => console.error(error));
