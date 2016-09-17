function pascalsTriangle(n) {
  const triangle = []
  let level
  let prevLevel

  for (let i = 1; i <= n; i++) {
    level = generateLevel(i, prevLevel)
    triangle.push(...level)
    prevLevel = level
  }
  return triangle
}

function generateLevel(n, prevLevel) {
  if (n === 1) return [1]
  if (n === 2) return [1, 1]

  const currLevel = [1]
  for (let i = 1; i <= n - 2; i++) currLevel[i] = prevLevel[i-1] + prevLevel[i]
  currLevel[n-1] = 1

  return currLevel
}

module.exports = pascalsTriangle
Object.assign(module.exports, { generateLevel })
