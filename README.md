# babel-plugin-mini

转换小程序

**提示** 正在开发中，暂无法使用

```bash
(node:61237) DeprecationWarning: "--compilers" will be removed in a future version of Mocha; see https://git.io/vdcSr for more info
// https://github.com/mochajs/mocha/wiki/compilers-deprecation

mocha --harmony --compilers js:babel-core/register test/*.spec.js

改为

mocha --harmony --require babel-core/register test/*.spec.js
```
