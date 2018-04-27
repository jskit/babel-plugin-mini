
// import { expect } from 'chai';
import assert from 'assert'
import { transform } from 'babel-core'
// import * as babel from 'babel-core';
import { describe, it } from 'mocha'

const transformCode = (str) => {
  return transform(str, {
    comments: true,
    plugins: [
      './src/examples/mini',
    ],
  }).code
}

// 清除注释，删除文件底部换行
const source = `
// 保留注释
const mini = {};
export default mini;
`
const target = `
// 保留注释
const mini = {};
modules.export = mini;`

describe('Plugin', () => {
  describe('Mini', () => {
    it('export', () => {
      const result = transformCode(source)
      // console.log(result)
      // expect(result).to.equal(target)
      assert.equal(result, target)
    })
  })
})
