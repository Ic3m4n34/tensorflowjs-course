module.exports = {
  extends: ['airbnb'],
  plugins: ['html'],
  rules: {
    'no-console': 0,
    'max-len': 0,
  },
  globals: {
    tfvis: true,
    tf: true,
    document: true,
  },
};
