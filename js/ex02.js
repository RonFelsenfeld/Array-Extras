'use strict'

var input = ['abc', 'xyz']
var expected = ['cba', 'zyx']
var actual = reverseAll(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

input = ['ron', 'good']
expected = ['nor', 'doog']
actual = reverseAll(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

////////////////////////////////////////////////////

function reverseAll(strs) {
  const reverseStrs = strs.map((str) => str.split('').reverse().join(''))
  return reverseStrs
}
