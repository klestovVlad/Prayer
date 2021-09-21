module.exports = {
  env: {
    node: true,
    jest: true,
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
<<<<<<< HEAD
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
=======
    'plugin:react/jsx-runtime',
>>>>>>> e57c8b47d689bd39026fb733bbb4270f2a9441e5
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: 'tsconfig.eslint.json',
  },
  plugins: ['react', '@typescript-eslint/eslint-plugin', 'simple-import-sort'],
  rules: {
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { variables: false }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'global-require': 'off',
    'simple-import-sort/imports': 'error',
    'import/first': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['react-native', 'babel.config.js'],
  },
  ignorePatterns: ['.eslintrc.js'],
};
