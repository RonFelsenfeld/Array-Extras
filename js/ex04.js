'use strict'

var input = ['average', 'exceptional', 'amazing']
var expected = ['aeae', 'eeioa', 'aai']
var actual = onlyVowels(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

input = ['hello', 'aabbeiu', 'ouria']
expected = ['eo', 'aaeiu', 'ouia']
actual = onlyVowels(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

////////////////////////////////////////////////////

function onlyVowels(strs) {
  const vowels = 'aeiou'

  const onlyVowelsStrs = strs.map((str) => {
    const onlyVowelsStr = str
      .split('')
      .filter((letter) => vowels.includes(letter))
      .join('')

    return onlyVowelsStr
  })

  return onlyVowelsStrs
}
