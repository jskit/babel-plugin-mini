
// https://github.com/jonsharratt/babel-plugin-starter

export default function () {
  return {
    visitor: {
      StringLiteral(path) {
        if (path.node.value === 'Hello') {
          path.node.value = 'World'
        }
      },
    },
  }
}
