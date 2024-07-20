/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function (nums1, nums2) {
    let left = nums1.filter(v => nums2.includes(v)).length;
    let right = nums2.filter(v => nums1.includes(v)).length;

    return [left, right];
};

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6])); // [2, 2]