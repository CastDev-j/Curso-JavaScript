/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let counter = 0;
    let sorted = [...heights].sort((a,b) => a-b);

    for (let i = 0; i < heights.length; i++) {
        if (heights[i] != sorted[i]) counter++;        
    }
    
    return counter;
};

console.log(heightChecker([1,1,4,2,1,3])); // 3