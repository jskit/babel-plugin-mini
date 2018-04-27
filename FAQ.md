# 常见问题

- https://github.com/estree/estree
- https://github.com/eslint/espree
- https://github.com/jquery/esprima
- https://github.com/olov/ast-traverse
- http://esprima.org/demo/parse.html
- https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md
- https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md

```js
import * as babylon from "babylon";
import traverse from "@babel/traverse";
import generator from "@babel/generator";
// input string -> babylon parser -> AST -> transformer[s] -> AST -> @babel/generator -> output string

const code = `function square(n) {
  return n * n;
}`;

const ast = babylon.parse(code);

traverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: "n" })) {
      path.node.name = "x";
    }
  }
});
```

```js
import Promise from 'bluebird';

import esprima from 'esprima';
import traverse from 'ast-traverse';

const program = 'const answer = 42';
> esprima.tokenize(program);
[ { type: 'Keyword', value: 'const' },
  { type: 'Identifier', value: 'answer' },
  { type: 'Punctuator', value: '=' },
  { type: 'Numeric', value: '42' } ]

> esprima.parseScript(program);
{ type: 'Program',
  body:
   [ { type: 'VariableDeclaration',
       declarations: [Object],
       kind: 'const' } ],
  sourceType: 'script' }

const ast = esprima.parse("f(1, x) + 2");

/*
 =>
 Program
 ExpressionStatement from parent Program via body[0]
 BinaryExpression from parent ExpressionStatement via expression
 CallExpression from parent BinaryExpression via left
 Identifier from parent CallExpression via callee
 Literal from parent CallExpression via arguments[0]
 Identifier from parent CallExpression via arguments[1]
 Literal from parent BinaryExpression via right
 */

```

## 部分错误处理方案

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

- Fix Cannot read property range of null from on lint

circle 执行 `npm run lint` 时，使用的 `eslint-babel@8.2.1` 报以下错误（本机mac执行不报错），切换为 `babel-eslint@7.2.3` circle 执行成功。

```bash
> eslint --ext .js src app

Cannot read property 'range' of null
TypeError: Cannot read property 'range' of null

# 8.2.1 执行报错，切换到 7.2.3
yarn add babel-eslint@7.2.3 --dev
```
