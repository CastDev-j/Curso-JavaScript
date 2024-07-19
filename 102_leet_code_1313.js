/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) 
     counter += (nums[i] >=k)?  1 : 0;;        
    
    return nums.length-counter;
};

console.log(minOperations([1,1,2,4,9], 9)) // 3