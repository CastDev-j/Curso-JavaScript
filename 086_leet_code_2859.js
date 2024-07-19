/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let result = 0;
    nums.forEach((num, i) => {
        let bits = i.toString(2).split('0').join('').split('').length;
        result += (bits == k)?num:0;
    });

    return result;
};


console.log(sumIndicesWithKSetBits([5,10,1,5,2], 1)); // 1, 2, 3, 4