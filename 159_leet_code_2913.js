/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    let result = 0

    for (let i = 0; i < nums.length; i++) {
        let a = new Set([nums[i]]);
        for (let j = i; j < nums.length; j++) {
            a.add(nums[j]);
            result += (a.size ** 2);
        }
    }

    return result;
};

console.log(sumCounts([1, 1]));