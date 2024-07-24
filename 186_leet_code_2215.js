/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
function findDifference(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    for (const s1 of set1) {
      if (set2.has(s1)) {
        set1.delete(s1);
        set2.delete(s1);
      }
    }
  
    return [[...set1], [...set2]];
  }
console.log(findDifference([1,2,2,1], [2,2])); // [1]