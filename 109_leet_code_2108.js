/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        if(isPalindrome(word)) return word;
    }

    return "";
};

var isPalindrome = function(word) {
    let i = 0;
    let j = word.length - 1;
    while (i < j) {
        if (word[i] !== word[j]) return false;
        i++;
        j--;
    }

    return true;
}

console.log(firstPalindrome(["abac", "abacaba"])); // abacaba