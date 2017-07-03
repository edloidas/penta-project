const [src, dest] = require('minimist')(process.argv.slice(2))._;
const path = require('path');
const fs = require('fs');

fs
  .createReadStream(path.resolve(__dirname, '../..', src))
  .pipe(fs.createWriteStream(path.join(__dirname, '../..', dest)));
