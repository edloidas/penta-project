const yauzl = require('yauzl');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const pify = require('pify');

function unzip(src, dest, callback) {
  yauzl.open(src, { autoClose: true, lazyEntries: true }, (error, zipfile) => {
    if (error) throw error;
    zipfile.readEntry();
    zipfile.on('entry', entry => {
      const fileName = path.join(dest, entry.fileName);
      if (/\/$/.test(entry.fileName)) {
        // directory file names end with '/'
        mkdirp(fileName, dirError => {
          if (dirError) throw dirError;
          zipfile.readEntry();
        });
      } else {
        // file entry
        zipfile.openReadStream(entry, (fileError, readStream) => {
          if (fileError) throw fileError;
          // ensure parent directory exists
          mkdirp(path.dirname(fileName), err => {
            if (err) throw err;
            readStream.pipe(fs.createWriteStream(fileName));
            readStream.on('end', () => {
              zipfile.readEntry();
            });
          });
        });
      }
    });
    zipfile.once('end', callback);
  });
}

module.exports = pify(unzip);
