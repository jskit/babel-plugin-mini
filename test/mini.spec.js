const assert = require('assert')
const mini = require('../lib/mini')

const babel = require('babel-core');

const code = `import { Button } from 'antd'`;

var result = babel.transform(code, {
  plugins:["mini"]
});

// console.log(result.code);

assert.equal(result.code, `import Button from 'antd/lib/button'`)

console.log('Test passed')
