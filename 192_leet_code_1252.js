/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let a = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < indices.length; i++) {
        let r = indices[i][0];
        let c = indices[i][1];
        for (let j = 0; j < n; j++) a[r][j]++;
        for (let j = 0; j < m; j++) a[j][c]++;
    }

    return a.flat().filter((x) => x % 2 == 1).length;
};

console.log(oddCells(2, 2,[[1,1],[0,0]])); 