/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let r=[1];
    for(i=1;i<=rowIndex;i++){
        r[i]=r[i-1] * (rowIndex-i+1)/i
    }
    return r

};

console.log(getRow(3)); // [1,3,3,1]