// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['prettier', 'unused-imports', 'simple-import-sort', 'react-hooks'],
  rules: {
    'prettier/prettier': 'error',

    'newline-before-return': 'error',

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
