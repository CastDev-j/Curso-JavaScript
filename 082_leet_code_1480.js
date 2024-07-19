/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = nums.map((value, i) =>{
        return nums.slice(0, i+1).reduce((acc, curr) => acc + curr);
    });
    return result;
};

console.log(runningSum([1,2,3,4])); // [1,3,6,10]