/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => nums.map((n)=> n-1).sort((a,b) => a-b).slice(-2).reduce((a,b) => a*b);

console.log(maxProduct([3,4,5,2])); // 12