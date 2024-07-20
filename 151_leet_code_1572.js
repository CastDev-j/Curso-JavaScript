/**
 * @param {number[][]} mat
 * @return {number}
 */

var diagonalSum = function(mat) {
    let sum = 0, n = mat.length;
    for(let i=0; i<n; i++){
        sum+=mat[i][i];
        
        if(i!=n-i-1){
            sum+=mat[i][n-1-i]
        }
    };
    return sum;
};

// console.log(diagonalSum([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]]));// 25

console.log(diagonalSum([
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]));// 25