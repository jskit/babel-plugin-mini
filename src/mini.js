const toLowerCase = (word) => {
  return Array.from(word).map((char, index) => {
    return !index ? char.toLowerCase() : char
  }).join('')
}


export default ({ types }) => {
  /* eslint no-unused-vars: 0 */
  return {
    // 插件入口
    visitor: {
      // 处理类型： Import声明
      ImportDeclaration(path) {
        const { node } = path
        const { type, specifiers, source } = node
        // 过滤掉默认引用，如 import antd from 'antd'
        const importSpecifiers = specifiers.filter(specifier => types.isImportSpecifier(specifier))
        // 例子只处理了一个组件的引用
        if (importSpecifiers.length === 1) {
          const [importSpecifier] = importSpecifiers
          // 小写处理组件引用，如Import { Button }，改为: antd/lib/button
          const element = toLowerCase(importSpecifier.imported.name)
          // 引入改为默认引入，如Import { Button }, 改为: import Button
          importSpecifier.type = 'ImportDefaultSpecifier'
          source.value += `/lib/${element}`
        }
      },
    },
  }
}
