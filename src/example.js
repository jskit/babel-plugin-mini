
export default function (babel) {
  // const t = babel.types // AST模块
  // const imports = {}
  // 如果你有自己的模块组织方式，用这里把模块名和路径记录下来。

  // const moduleRoot = '' // 你其他的自定义变量

  // module_name写你的插件名称，但并不在调用时使用
  return new babel.Transformer('module_name', {
    // 这里写你的转换逻辑 [逻辑区域]
    // [The ESTree Spec](https://github.com/estree/estree)

    // 根节点
    Program(node) {
    },

    // 对类的处理方法
    Class(node, parent, scope) {},

    // 对new新建对象表达式的处理
    NewExpression(node, parent, scope) {
    },

    // 对调用函数表达式的处理
    CallExpression(node, parent, scope) {
    },

    // 对类成员方法的处理
    MethodDefinition(node, parent, scope) {
    },

    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World'
        }
      },
    },

  })
}

/**

在AST中，我们可以把整个程序看成一个 Program 例如


 */

