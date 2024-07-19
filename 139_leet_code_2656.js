/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let max = Math.max(...nums);
    let count = 0;
    for (let i = 0; i < k; i++)
        count += max + i;


    return count;
};

console.log(maximizeSum([1, 2, 3, 4, 5], 3)); // 19


