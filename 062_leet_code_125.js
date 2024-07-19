/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s.length === 0) {
        return true;
    }
    
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let isPalindrome = true;

    let left = 0;
    let right = string.length - 1;

    while (string[left] === string[right] && left < right) {
        left++;
        right--;
        
    }

    if (left < right) {
        isPalindrome = false;
    }
    
    return isPalindrome;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));