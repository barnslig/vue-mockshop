module.exports = {
  plugins: ["prettier"],
  extends: ["airbnb", "prettier", "plugin:vue/recommended"],
  env: {
    browser: true
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
