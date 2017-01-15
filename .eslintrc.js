module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'plugin:flowtype/recommended'
  ],
  'plugins': [
    'flowtype'
  ],
  'rules': {
    'space-before-function-paren': [ 2, { 'anonymous': 'always', 'named': 'never' } ],
    'spaced-comment': [ 2, 'always', { 'exceptions': [ '-', '+' ] } ],
    'arrow-spacing': [ 2, { 'before': true, 'after': true } ],
    'no-restricted-syntax': [ 'off' ],
    'object-property-newline': [ 'off', { 'allowMultiplePropertiesPerLine': true } ],
    'no-underscore-dangle': [ 'off' ],
    'comma-dangle': [ 'error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }],
    'import/no-extraneous-dependencies': [ 'off', { 'devDependencies': [ 'util/', '**/*.test.js', '**/*.spec.js' ] } ],
    "react/jsx-filename-extension": [ 1, { "extensions": [ ".js", ".jsx" ] } ],
    // no support in 'babel-eslint'; should be 'error'
    'no-await-in-loop': [ 'off' ]
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true
  }
}
