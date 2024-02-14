'use strict'

var input = ['abcdefg', 'xyz']
var expected = ['Abcdefg', 'xyz']
var actual = capitalizeLongerThan5(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

input = ['abcdef', 'hellooo', 'bye']
expected = ['Abcdef', 'Hellooo', 'bye']
actual = capitalizeLongerThan5(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

////////////////////////////////////////////////////

function capitalizeLongerThan5(strs) {
  const capitalizeMoreThan5Strs = strs.map((str) => {
    if (str.length > 5) str = str.charAt(0).toUpperCase() + str.slice(1)
    return str
  })

  return capitalizeMoreThan5Strs
}
