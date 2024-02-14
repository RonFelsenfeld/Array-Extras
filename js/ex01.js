'use strict'

var input = ['return', 'phrases', 'with one word']
var expected = ['return', 'phrases']
var actual = onlyOneWord(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

////////////////////////////////////////////////////

function onlyOneWord(strs) {
  const onlyOneWordStrs = strs.filter((str) => str.split(' ').length === 1)
  return onlyOneWordStrs
}
