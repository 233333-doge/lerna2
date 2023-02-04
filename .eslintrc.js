module.exports = {
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  //   使用prttier插件，它可以关闭跟eslint冲突的那些规则，走自己的风格规则
  plugins: ["prettier"],
  rules: {
    //如果不符合prettier的规范的话会报错，进行错误提示
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
  env: {
    node: true,
  },
};
