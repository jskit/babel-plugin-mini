import * as babylon from 'babylon'
import traverse from 'babel-traverse'
import template from 'babel-template'
import generate from 'babel-generator'
import * as t from 'babel-types'

const code = `function square(n) {
  return n * n;
}`

// const buildRequire = template(`
//   var IMPORT_NAME = require(SOURCE);
// `)
// const ast = buildRequire({
//   IMPORT_NAME: t.identifier('myModule'),
//   SOURCE: t.stringLiteral('my-module'),
// })

const ast = babylon.parse(code)

traverse(ast, {
  enter(path) {
    if (t.isIdentifier(path.node, { name: 'n' })) {
      path.node.name = 'x'
    }
  },
})

const result = generate(ast, {
  retainLines: false,
  compact: 'auto',
  concise: false,
  quotes: 'double',
  // ...
}, code)

console.log(result.code)
