/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n = nums.length;
    let result = new Array(n).fill(0);
    let sumTotal = nums.reduce((a,b) => a+b, 0);
    let sumLeft = 0;
    let sumRight = 0;

    for (let i=0;i<n;i++){
        sumRight = sumTotal - sumLeft - nums[i];
        result[i] = Math.abs(sumLeft - sumRight);
        sumLeft += nums[i];
    }
    
    return result;
};

console.log(leftRightDifference([10,4,8,3])); 