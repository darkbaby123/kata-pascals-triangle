function pascalsTriangle(n) {
  return generateTriangle(n).reduce((acc, level) => acc.concat(level), [])
}

function generateTriangle(n) {
  if (n === 1) return [[1]]
  if (n === 2) return [[1], [1, 1]]

  const triangle = generateTriangle(n - 1)
  const prevLevel = triangle[triangle.length-1]

  const currLevel = [1]
  for (let i = 1; i <= prevLevel.length - 1; i++) {
    currLevel.push(prevLevel[i-1] + prevLevel[i])
  }
  currLevel.push(1)

  triangle.push(currLevel)
  return triangle
}

module.exports = pascalsTriangle
