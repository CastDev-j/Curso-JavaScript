/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let map = {};
    for(let i of nums) 
        map[i] ? map[i]++ : map[i] = 1 
    
    let pairs = 0;
    for(let i = 0; i<nums.length; i++) 
            pairs += map[nums[i] - k]? map[nums[i] - k]: 0;

    return pairs;
};

console.log(countKDifference([1, 2, 2, 1], 1)); // 4   