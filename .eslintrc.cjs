module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single'],
    'radix': 'error',
    'eqeqeq': ['error', 'always'],
    'no-use-before-define': ['error', {'functions': false}],
    'no-unused-expressions': 'error',
  },
  'parserOptions': {
    'sourceType': 'module'
  }
};