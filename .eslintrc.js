module.exports = {
    env: {
        browser: true,
      },
    extends: 'airbnb',
    parser: 'babel-eslint',
    parserOptions: {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true
      }
    },
    rules: {
      //"class-methods-use-this": ["error", { "exceptMethods": ["render"] }],

      //react组件推荐写法
      "react/prefer-stateless-function": 0,
      //拖尾逗号
      "comma-dangle": 0,
      //箭头函数函数体
      "arrow-body-style": [2,'always']
    },
    plugins: [
      'jsx-a11y',
      'react',
    ],
  };
