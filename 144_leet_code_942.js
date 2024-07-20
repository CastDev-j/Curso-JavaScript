/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    s = s.split('');

    let left = 0;
    let right = s.length;

    for (let i = 0; i < s.length; i++) 
        if (s[i] === 'I') s[i] = left++;
        else s[i] = right--;

    s.push(left);
    return s;
};

console.log(diStringMatch("DDD")); // [0,4,1,3,2]
