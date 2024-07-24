/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let r = [];
    for (let i = left; i <= right; i++) {
        let flag = true;
        let ns = i.toString();
        for (let j = 0; j < ns.length; j++) {
            if (ns[j] == 0 || i % parseInt(ns[j]) != 0) {
                flag = false;
                break;
            }
        }
        if(flag) r.push(i);
    }

    return r;
};

console.log(selfDividingNumbers(1, 22)); // [1,2,3,4,5,6,7,8,9,11,12,15,22]