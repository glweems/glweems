module.exports = {
  extends: ['wesbos'],
  rules: {
    'import/no-unresolved': false,
    'no-nested-ternary': 0,
    undefined: 0,
    'react/display-name': 0,
    'react/no-danger': 0,
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
}
