module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: 'babel-eslint',
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
    'no-console': 1
  },
};
