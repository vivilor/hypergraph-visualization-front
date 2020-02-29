module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript/recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'camelcase': 0,
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'import/prefer-default-export': 0,
    'object-curly-spacing': 1,
    'import/no-cycle': 1,
    'no-use-before-define': 1,
    'no-param-reassign': 1,
    'no-unreachable': 1,
    'consistent-return': 1,
    'no-empty': 1,
    'no-underscore-dangle': 1,
    'no-restricted-syntax': 1,
    'prefer-destructuring': 1,
    'no-return-assign': 1,
    'getter-return': 1,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
