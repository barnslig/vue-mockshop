module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb-base", "prettier", "plugin:vue/recommended"],
  env: {
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    // allow storybook files to have local require() and import devDependencies
    {
      files: ["**/*.stories.js", "**/stories.js", "**/data/*.js"],
      rules: {
        "global-require": "off",
        "import/no-extraneous-dependencies": "off"
      }
    }
  ]
};
