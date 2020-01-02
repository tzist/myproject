module.exports = {
  env: {
    es6: true,
  },
  "settings": {
    "import/resolver": {
      node: { paths: [path.resolve('./src')] }
    },
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-unused-vars": 1,
    "comma-dangle": 0,
    "eol-last": 0,
    "no-console": 0,
    "linebreak-style": 0,
    "import/no-unresolved": 0,
  },
};
