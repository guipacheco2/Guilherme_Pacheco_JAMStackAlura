module.exports = {
  env: {
    browser: true,
    'cypress/globals': true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'jest',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'typescript-sort-keys',
    'sort-keys-fix',
    'sort-destructure-keys',
  ],
  rules: {
    'react/prop-types': 0,
    'sort-destructure-keys/sort-destructure-keys': 1,
    'sort-keys-fix/sort-keys-fix': 1,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
