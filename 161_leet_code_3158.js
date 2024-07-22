/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = nums => nums.filter((value, index) => nums.indexOf(value) !== index).reduce((a,b)=> a^=b,0);

console.log(duplicateNumbersXOR([1,2,2,1])); 