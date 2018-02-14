
// import { expect } from 'chai';
import assert from 'assert'
import { transform } from 'babel-core'
// import * as babel from 'babel-core';
import { describe, it } from 'mocha'

const transformCode = (str) => {
  return transform(str, {
    comments: false,
    plugins: [
      './src/examples/import',
    ],
  }).code
}

describe('Plugin', () => {
  describe('Import', () => {
    it('import', () => {
      // 清除注释，删除文件底部换行
      const code = `
// 注释
import { Button } from 'antd'
`
      const target = `
import Button from 'antd/lib/button';`
      const result = transformCode(code)
      // console.log(result)
      // expect(result).to.equal(target)
      assert.equal(result, target)
    })
  })
})
