/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = (nums1, nums2)  => Math.max(...nums2)-Math.max(...nums1)

console.log(addedInteger([4,10], [849, 845])); // 0