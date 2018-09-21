module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
  },
  rules: {
    'react/prefer-stateless-function': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
    'arrow-body-style': 'off',
    'max-len': [2, 160, 2, { ignoreComments: true }],
    indent: ['error', 2, {
      MemberExpression: 0,
    }],
  }
}
