/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = points => {
    let totalTime = 0;
    for (let i = 1; i < points.length; i++) {
        let dx = Math.abs(points[i][0] - points[i - 1][0]);
        let dy = Math.abs(points[i][1] - points[i - 1][1]);
        totalTime += Math.max(dx, dy);
    }
    return totalTime;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])); // 7