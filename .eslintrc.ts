export default {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  rules: {
    'no-inner-declarations': 'warn',
    'no-useless-escape': 'warn',
    'no-irregular-whitespace': 'warn',
    'prefer-rest-params': 'warn',
    'no-prototype-builtins': 'warn',
    'no-empty': 'warn',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
    '@typescript-eslint/no-extra-semi': 'off',
    // conflicts with prettier
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
  },
}
