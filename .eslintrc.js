module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',

    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
