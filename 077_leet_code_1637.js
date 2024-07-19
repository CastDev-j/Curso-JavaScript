/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    let sortedCoordinates = points.sort((a, b) => a[0] - b[0]);
    let maxDifference = 0;
    sortedCoordinates.forEach((value, index) => {
        if (index > 0) 
            maxDifference = Math.max(maxDifference, value[0] - sortedCoordinates[index - 1][0]);
    });
    return maxDifference;
};

console.log(maxWidthOfVerticalArea([[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]])); // 3