module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}

// 1. root: true
// root: true 表示这是一个 根配置文件。ESLint 会停止查找上层目录中的配置文件，意味着在当前目录及其子目录中，ESLint 会仅使用这个配置文件，不会再向上查找配置。
// 2. env: { node: true }
// env 指定了代码将在哪些环境下运行。这里的 node: true 表示该项目是运行在 Node.js 环境 中，因此 ESLint 会启用 Node.js 环境相关的全局变量，如 require 和 module 等。
// 3. extends: [...]
// extends 用来继承其他 ESLint 配置或插件，扩展现有的规则集。
// 'plugin:vue/essential'：这是 eslint-plugin-vue 插件的一个配置，表示启用 Vue.js 相关的基本规则，用于检查 Vue 文件（.vue 文件）中的代码。
// '@vue/standard'：这是 Vue 官方推荐的 标准风格的 ESLint 配置，包含了 Vue 项目中常见的 JavaScript 和 Vue 代码风格规则。
// 4. parserOptions: { parser: '@babel/eslint-parser' }
// parserOptions 用来配置 ESLint 使用哪个解析器来解析代码。这里使用 @babel/eslint-parser，它使 ESLint 能够解析 ES6+ 和 JSX 等现代 JavaScript 语法，因为默认的解析器并不支持这些语法。
// 使用 Babel 解析器还可以让 ESLint 支持一些新的 ECMAScript 特性。
// 5. rules: {...}
// rules 配置了项目中的具体代码风格规则，可以根据项目需求启用或禁用某些规则，并设置规则的级别（如 off, warn, error）。
// 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
// 这个规则是针对 console 语句的：在生产环境（process.env.NODE_ENV === 'production'）下，如果代码中存在 console.log 等调试信息，ESLint 会发出警告 (warn)，但在开发环境下（process.env.NODE_ENV !== 'production'）则允许使用 console（off），因此在开发过程中不会对 console 语句进行报错或警告。
// 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
// 这个规则与 no-console 类似，针对 debugger 语句。只有在生产环境下，debugger 会触发警告，而在开发环境下不会有任何提示。
// 6. 规则的优先级
// 配置中的规则使用了 process.env.NODE_ENV 来判断环境，确保在开发环境中可以使用 console 和 debugger，而在生产环境中则会避免将这些调试语句打包到最终的代码中。
