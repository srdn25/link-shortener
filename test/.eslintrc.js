module.exports = {
  env: {
    node: true,
    mocha: true,
  },
  rules: {
    "no-global-assign": ["error", {"exceptions": ["expect"]}],
  },
};
