/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = (arr) => { 
    arr.sort((a, b) => {
        let a1 = a.toString(2).split('0').join('').length;
        let b1 = b.toString(2).split('0').join('').length;
        if (a1 !== b1)
            return a1 - b1;
        else return a - b;
    });
    return arr;
};

let sorstByBits = (arr) => {10}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8])); // [0,1,2,4,8,3,5,6,7]
