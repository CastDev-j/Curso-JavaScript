/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = (nums) => nums
                                    .sort((a,b)=> a-b)
                                    .slice(-2)
                                    .reduce((a,b) => a*b) 
                                    - nums
                                    .slice(0,2)
                                    .reduce((a,b) => a*b);


console.log(maxProductDifference([4,2,5,9,7,4,8])); // 34