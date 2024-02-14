'use strict'

// EXERCISE 38

/*
Implement a function named biggerThan100.
It receives an array of numbers and returns a new array containing only the numbers which are greater than 100.
 */

console.log('---  Bigger than 100 --- ')

var input = [1, 2, 150, 123, 4, 421]
var expected = [150, 123, 421]
var actual = biggerThan100(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

input = [100, 1000, 3, -1, 432, 777]
expected = [1000, 432, 777]
actual = biggerThan100(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

function biggerThan100(nums) {
  return nums.filter((num) => num > 100)
}
