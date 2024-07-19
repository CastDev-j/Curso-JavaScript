/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    let result = candies.map((value) => {
        return value + extraCandies >= maxCandies;
    });

    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3)); // [true,true,true,false,true]