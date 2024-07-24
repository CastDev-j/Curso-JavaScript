/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = new Map();
    nums.forEach(v => {
        if (map.has(v)) map.set(v, map.get(v) + 1);
        else map.set(v, 1);
    });

    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a);
};


console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1])); // [3,1,1,2,2,2]