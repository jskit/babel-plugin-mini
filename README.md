# babel-plugin-mini

转换小程序

**提示** 正在开发中，暂无法使用

[![Circle CI](https://circleci.com/gh/jskit/babel-plugin-mini/tree/master.svg?style=svg)](https://circleci.com/gh/jskit/babel-plugin-mini/tree/master)

## Usage

```bash
# test
npm t

# build
npm run build
```

## 部分错误处理方案

```bash
# mocha 报错解决方案
(node:61237) DeprecationWarning: "--compilers" will be removed in a future version of Mocha; see https://git.io/vdcSr for more info
// https://github.com/mochajs/mocha/wiki/compilers-deprecation

mocha --harmony --compilers js:babel-core/register test/*.spec.js

改为

mocha --harmony --require babel-core/register test/*.spec.js
```
