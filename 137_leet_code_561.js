/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let counter = 0;
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i+=2) 
        counter += nums[i];
    

    return counter;
};

console.log(arrayPairSum([6,2,6,5,1,2])); // 4