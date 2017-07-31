const fs = require('fs');

const { version } = JSON.parse(fs.readFileSync('package.json', 'utf8'));

module.exports = { version };
