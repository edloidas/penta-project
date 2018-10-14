module.exports = {
  'parser': 'babel-eslint',
  'extends': [
    'airbnb',
  ],
  'rules': {
    'spaced-comment': [2, 'always', { 'exceptions': ['-', '+'] }],
    'no-restricted-syntax': ['off'],
    'object-property-newline': ['off', { 'allowMultiplePropertiesPerLine': true }],
    'linebreak-style': 'off',
    'no-underscore-dangle': ['off'],
    'comma-dangle': ['error', 'only-multiline'],
    'import/no-extraneous-dependencies': ['off', { 'devDependencies': ['util/', '**/*.test.js', '**/*.spec.js'] }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    "jsx-a11y/no-autofocus": [2, {
      "ignoreNonDOM": true
    }],
    'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],
    'no-await-in-loop': ['off'],
    'jsx-a11y/href-no-hash': ['off'],
    // prettier conflicts
    'max-len': ['error', { 'code': 80, 'tabWidth': 2 }],
    'implicit-arrow-linebreak': ['off'],
    'function-paren-newline': ['off'],
    'arrow-parens': ['off'],
    'indent': ['off']
  },
  'env': {
    'browser': true,
    'node': true,
    'jest': true,
  }
}
