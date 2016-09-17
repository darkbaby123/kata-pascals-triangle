const pascalsTriangle = require('../lib/solution_1')

describe('pascalsTriangle', () => {
  function test(orig, dest, { focus = false } = {}) {
    const text = `${orig} => ${JSON.stringify(dest)}`
    const fn = () => {
      expect(pascalsTriangle(orig)).toEqual(dest)
    }
    focus ? it.only(text, fn) : it(text, fn)
  }

  test(1, [1])
  test(2, [1, 1, 1])
  test(3, [1, 1, 1, 1, 2, 1])
  test(4, [1, 1, 1, 1, 2, 1, 1, 3, 3, 1])
  test(5, [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1])
})
