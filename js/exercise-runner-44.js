'use strict'

// EXERCISE 44

/*
Write the function printNumsCount(nums). 
The parameter nums, is an array of integers in the range 0 - 3 like this one:
The function prints how many times each of these numbers appears in the array.

For example: for this input array [3,2,0,2,2,0,3]
the output will look like this:[2,0,3,2]
 */

console.log('--- printNumsCount() --- ')

var input = [0, 1, 1, 2, 3, 3]
var expected = [1, 2, 1, 2]
var actual = printNumsCount(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

input = [1, 0, 1, 1, 2, 2, 3, 3]
expected = [1, 3, 2, 2]
actual = printNumsCount(input)
console.log('INPUT:', input, '\nEXPECTED:', expected, '\nACTUAL:', actual)

function printNumsCount(nums) {
  const numsCount = []

  nums.forEach((num) => {
    if (!numsCount[num]) numsCount[num] = 0
    numsCount[num]++
  })

  return numsCount
}
