/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    let sArr = s.split('');
    while (i < j) {
        if (sArr[i] !== sArr[j]) {
            if (sArr[i] < sArr[j]) {
                sArr[j] = sArr[i];
            } else {
                sArr[i] = sArr[j];  
            }
        }
        i++;
        j--;
    }
    return sArr.join('');
};