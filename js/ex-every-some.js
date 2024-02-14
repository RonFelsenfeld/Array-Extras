'use strict'

// Task 01

const gStudents = [
  { name: 'Ron', grade: 100 },
  { name: 'Gili', grade: 50 },
  { name: 'Avi', grade: 80 },
]

var expected = false
const isAllPassed = allPassed(gStudents)

// console.log(`expected: `, expected)
// console.log(`isAllPassed: `, isAllPassed)

function allPassed(students) {
  return students.every((student) => student.grade >= 70)
}

////////////////////////////////////////////////////

// Task 02

const gPlayers = [
  { name: 'Ron', isAlive: true },
  { name: 'Gili', isAlive: false },
  { name: 'Avi', isAlive: true },
]

expected = true
const isStillAlive = isGameOn(gPlayers)

// console.log(`expected: `, expected)
// console.log(`isStillAlive: `, isStillAlive)

function isGameOn(players) {
  return players.some((player) => player.isAlive)
}

////////////////////////////////////////////////////

// Task 03

const gMat = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]

expected = true
const isMat = isMatrix(gMat)

// console.log(`expected: `, expected)
// console.log(`isMat: `, isMat)

function isMatrix(arr2d) {
  const rowLength = arr2d[0].length
  return arr2d.every((row) => row.length === rowLength)
}

////////////////////////////////////////////////////

// Task 04

const gWideMat = [
  [1, 2, 3, 5, 3, 6],
  [1, 2, 3],
  [1, 2, 3],
]

expected = true
const isWideMat = isWide(gWideMat)

// console.log(`expected: `, expected)
// console.log(`isWideMat: `, isWideMat)

function isWide(arr2d) {
  return arr2d.some((row) => row.length > 5)
}

////////////////////////////////////////////////////

// Task 05

var input = [
  [1, 10, -100],
  [2, -20, 200],
  [3, 30, 300],
]
expected = [[3, 30, 300]]
var actual = positiveRowsOnly(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

function positiveRowsOnly(mat) {
  const onlyPositiveRows = mat.filter((row) => row.every((num) => num > 0))

  return onlyPositiveRows
}
