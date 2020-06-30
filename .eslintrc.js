module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['hooks', 'src/hooks'],
          ['types', 'src/index.ts'],
          ['common', 'src/components/Common/index.ts'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prefer-stateless-function': 'off',
    'prefer-arrow-callback': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/camelcase': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'max-len': [
      'off',
      {
        code: 140,
        ignoreUrls: true,
      },
    ],
  },
};
