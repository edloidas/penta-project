const project = require('./util/project');

module.exports = {
  globals: {
    GAME_VERSION: JSON.stringify(project.version)
  }
};
