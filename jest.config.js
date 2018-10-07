const project = require('./util/project');

module.exports = {
  globals: {
    GAME_VERSION: JSON.stringify(project.version)
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // Fix jsdom localStorage issue
  // verbose: true,
  testURL: 'http://localhost/',
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: './test/setupEnzyme.ts'
};
