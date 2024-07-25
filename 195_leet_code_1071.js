/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1+str2 !== str2+str1) return "";

    let gcd = (a, b) => {
        if(b === 0) return a;
        return gcd(b, a % b);
    };

    return str1.substring(0, gcd(str1.length, str2.length));
};

console.log(gcdOfStrings("ABABAB", "ABAB")); // ABAB

