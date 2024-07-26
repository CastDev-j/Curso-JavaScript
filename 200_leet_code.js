/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const res = [];

    let prefixProduct = 1;

    for(let i = 0; i < n; i++) {
        res[i] = prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct = 1;

    for(let i = n - 1; i >= 0; i--) {        
        res[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return res;
};

console.log(productExceptSelf([0, 0, 9, 0, 0])); // [24, 12, 8, 6]