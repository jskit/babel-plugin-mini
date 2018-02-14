# babel-plugin-mini

转换小程序

```js
(node:61237) DeprecationWarning: "--compilers" will be removed in a future version of Mocha; see https://git.io/vdcSr for more info
// https://github.com/mochajs/mocha/wiki/compilers-deprecation

mocha --harmony --compilers js:babel-core/register test/hello.spec.js

改为

mocha --harmony --require babel-core/register test/hello.spec.js
```
