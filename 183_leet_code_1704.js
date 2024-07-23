/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let left = 0, right = 0;
    for (let i = 0, middle = s.length / 2; i < s.length / 2; i++, middle++) {
        if (/[aeiou]/i.test(s[i])) left++;
        if (/[aeiou]/i.test(s[middle])) right++;
    }

    return left === right;
};


console.log(halvesAreAlike("textbook")); // true