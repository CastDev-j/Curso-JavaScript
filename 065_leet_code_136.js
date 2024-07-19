/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i]);
        }else {
            map.set(nums[i], 1);
        }
    }

    return [...map.keys()][0];
    
};

console.log(singleNumber([2,2,1])); // 1