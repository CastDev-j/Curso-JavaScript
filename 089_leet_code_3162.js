/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count= 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            
            count += (nums1[i] % (nums2[j]*k) == 0)? 1 : 0;
        }
    }

    return count;
};

console.log(numberOfPairs([1,2,4,12], [2,4], 3));