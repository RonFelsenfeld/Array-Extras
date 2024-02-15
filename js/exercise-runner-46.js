'use strict'

// EXERCISE 46

/*
Write the function: multBy(nums, multiplier) which modifies 
the nums array so that each of its items, is multiplied by multiplier.
The function returns the modified array.
Add another parameter to this function named isImmutable.
When this parameter is true, use array.slice()to perform the function’s calculation on a copy of the array, and leave the original array unchanged.
The function should return the modified array.
 */

console.log('--- Multiply Nums --- ')

var nums = [1, 2, 3]
var multiplier = 2
var expected = [2, 4, 6]
var actual = multBy(nums, multiplier, true)

console.log(
  'INPUT:',
  nums,
  multiplier,
  '\nEXPECTED:',
  expected,
  '\nACTUAL:',
  actual
)

function multBy(nums, multiplier, isImmutable) {
  // If immutable --> return a new array
  if (isImmutable) {
    return nums.map(num => num * multiplier)
  }
  // If is mutable --> modified the original array
  nums.forEach((num, i, arr) => (arr[i] = num * multiplier))
  return nums
}
