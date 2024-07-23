/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = (nums) => nums.filter((v,i)=>nums.length%(i+1)==0).reduce((a,b)=>a+b**2,0);

console.log(sumOfSquares([1,2,3,4])); // 385