/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = (nums) => nums.join('').split('');

console.log(separateDigits([32,1,2,2,2,1,3])); // [ [ '3' ], [ '1' ], [ '2' ], [ '2' ], [ '2' ], [ '1' ], [ '3' ] ]