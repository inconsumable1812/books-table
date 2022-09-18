module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: ['off', { omitLastInOneLineBlock: 'never' }],
    camelcase: ['off', { properties: 'never' }],
    'space-before-function-paren': 'off',
    'linebreak-style': 'off',
    'comma-dangle': 'off',
    'operator-linebreak': 'off',
    'no-undef': 'off',
    'no-restricted-syntax': 'off',
    'max-len': 'off',
    'vue/no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './'
      }
    ]
  }
};
