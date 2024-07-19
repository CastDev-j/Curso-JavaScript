/**
 * @param {number[]} nums
 * @return {number}
 */

var numIdenticalPairs = function (nums) {
    let map = {}, count = 0;
    for (let num of nums) {
        if (map[num]) {
            count += map[num];
            map[num] += 1;
        } else map[num] = 1;
    }
    return count;
};
