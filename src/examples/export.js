
export default ({ types }) => {
  return {
    // 插件入口
    visitor: {
      Program: {
        exit(path) {
          if (path.BABEL_PLUGIN_ADD_MODULE_EXPORTS) {
            return
          }

          let hasExportDefault = false
          let hasExportNamed = false
          /* eslint no-shadow: 0 */
          path.get('body').forEach((path) => {
            if (path.isExportDefaultDeclaration()) {
              hasExportDefault = true
              return
            }

            if (path.isExportNamedDeclaration()) {
              if (path.node.specifiers.length === 1 && path.node.specifiers[0].exported.name === 'default') {
                hasExportDefault = true
              } else {
                hasExportNamed = true
              }
            }
          })

          if (hasExportDefault && !hasExportNamed) {
            path.pushContainer('body', [
              types.expressionStatement(types.assignmentExpression(
                '=',
                types.memberExpression(types.identifier('module'), types.identifier('exports')),
                types.memberExpression(types.identifier('exports'), types.stringLiteral('default'), true)
              )),
            ])
          }

          path.BABEL_PLUGIN_ADD_MODULE_EXPORTS = true
        },
      },
    },
  }
}
