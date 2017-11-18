const args = require('minimist')(process.argv.slice(2));
const path = require('path');
const fs = require('fs');

const [src, dest] = args._.map(file => path.resolve(__dirname, '../..', file));
const { dir } = path.parse(dest);

// TODO: create full path, if doesn't exists
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.createReadStream(src).pipe(fs.createWriteStream(dest));
