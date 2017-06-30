module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  'plugins': [
    'flowtype',
    'prettier',
  ],
  'rules': {
    'spaced-comment': [ 2, 'always', { 'exceptions': [ '-', '+' ] } ],
    'no-restricted-syntax': [ 'off' ],
    'object-property-newline': [ 'off', { 'allowMultiplePropertiesPerLine': true } ],
    'no-underscore-dangle': [ 'off' ],
    'import/no-extraneous-dependencies': [ 'off', { 'devDependencies': [ 'util/', '**/*.test.js', '**/*.spec.js' ] } ],
    'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx' ] } ],
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'trailingComma': 'all',
      'jsxBracketSameLine': true,
    }],
    // 'quotes': ['error', 'single'],
    // no support in 'babel-eslint'; should be 'error'
    'no-await-in-loop': [ 'off' ],
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  }
}
