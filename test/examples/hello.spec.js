
// import { expect } from 'chai';
import assert from 'assert'
import { transform } from 'babel-core'
// import * as babel from 'babel-core';
import { describe, it } from 'mocha'

const transformCode = (str) => {
  return transform(str, {
    comments: false,
    plugins: [
      './src/examples/hello',
    ],
  }).code
}

describe('Plugin', () => {
  describe('Hello', () => {
    it('World', () => {
      const code = `const example = "Hello";`
      const target = `const example = "World";`
      const result = transformCode(code)
      // expect(result).to.equal(target)
      assert.equal(result, target)
      // assert.equal(result, target, `err: should be ${target}`)
    })
  })
})
