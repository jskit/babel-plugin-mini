# 部分错误处理方案

- macha 执行test 报错

(node:61237) DeprecationWarning: "--compilers" will be removed in a future version of Mocha; see https://git.io/vdcSr for more info

```bash
// https://github.com/mochajs/mocha/wiki/compilers-deprecation

mocha --harmony --compilers js:babel-core/register test/*.spec.js

改为

mocha --harmony --require babel-core/register test/*.spec.js
```

- 处理circleci报错 sh: 1: babel: not found

```bash
# 添加 babel-cli
yarn add babel-cli --dev
```

- Cannot read property 'range' of null

```bash
> eslint --ext .js src app

Cannot read property 'range' of null
TypeError: Cannot read property 'range' of null
```