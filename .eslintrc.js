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
    'linebreak-style': 'off',
    'no-underscore-dangle': [ 'off' ],
    'comma-dangle': [ 'error', {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'ignore',
    }],
    'import/no-extraneous-dependencies': [ 'off', { 'devDependencies': [ 'util/', '**/*.test.js', '**/*.spec.js' ] } ],
    'react/jsx-filename-extension': [ 1, { 'extensions': [ '.js', '.jsx' ] } ],
    "jsx-a11y/no-autofocus": [ 2, {
            "ignoreNonDOM": true
        }],
    'jsx-a11y/anchor-is-valid': [ 'warn', { 'aspects': [ 'invalidHref' ] } ],
    'prettier/prettier': ['error', {
      'singleQuote': true,
      'jsxBracketSameLine': true,
    }],
    // 'quotes': ['error', 'single'],
    // no support in 'babel-eslint'; should be 'error'
    'no-await-in-loop': [ 'off' ],
    'jsx-a11y/href-no-hash': [ 'off' ],
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  },
  'globals': {
    'GAME_VERSION': false
  }
}
