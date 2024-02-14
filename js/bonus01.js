'use strict'

var input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
var expected = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
]

var actual = doubleMatrix(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)
console.log('Original mat after execution: ', input)

////////////////////////////////////////////////////

function doubleMatrix(mat) {
  const doubleMat = mat.map((matRow) => {
    const doubleRow = matRow.map((num) => num * 2)
    return doubleRow
  })

  return doubleMat
}
