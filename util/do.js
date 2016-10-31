/*
Dynamicly load module from command line
First argument without the option is the module name
Other argumets are the parameters, that will be passed
*/
const argv = require('minimist')(process.argv.slice(2));

if (argv._.length > 0) {
  const module = argv._[0];
  const args = argv._.slice(1);
  require(module)(...args); // eslint-disable-line
}
