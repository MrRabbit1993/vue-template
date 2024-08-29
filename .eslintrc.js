// 1. 关闭段落校验
// /* eslint-disable */
// /* eslint-enable */
// 2. 关闭当前行校验
// // eslint-disable-line
// 3. 关闭下一行校验
// // eslint-disable-next-line
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier/skip-formatting'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'generator-star-spacing': 'off',
    'no-mixed-operators': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 120, // 单行长度，默认80
        singleQuote: true, // 单引号
        trailingComma: 'none', // 在对象或数组最后一个元素后面是否加逗号
        bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
        jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
        semi: false,
        endOfLine: 'auto'
      }
    ],
    'vue/no-setup-props-destructure': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-unused-components': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/no-parsing-error': 0,
    'no-tabs': 0,
    'no-useless-escape': 0, // 禁止不必要的转移字符
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never'
      }
    ],
    'no-delete-var': 2,
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'template-curly-spacing': 'off',
    indent: ['error', 2],
    'vue/name-property-casing': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    eqeqeq: [1, 'allow-null'] // 使用 === 替代 ==
  }
}
