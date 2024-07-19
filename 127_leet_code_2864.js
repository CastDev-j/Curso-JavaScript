/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    s = s.split('').sort();
    let i=s.length-2
    let j=0
    while(s[i]==1 && i>=Math.floor(s.length/2)){
        [s[i],s[j]]=[s[j],s[i]]
        i--
        j++
    }
    return s.join('')
};

console.log(maximumOddBinaryNumber("0101")); // 1110

console.log(maximumOddBinaryNumber("10")); // 01