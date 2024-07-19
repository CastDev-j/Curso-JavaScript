/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for (let index = 0; index < nums.length; index++) {
        ans.push(nums[nums[index]]);
    }

    return ans;
};

console.log(buildArray([0,2,1,5,3,4])); // [0,1,2,4,5,3]