/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('');
    let j = 0;
    let k = s.length - 1;

    while (j < k) {
        if (isVowel(s[j]) && isVowel(s[k])) {
            [s[j], s[k]] = [s[k], s[j]];
            j++;
            k--;
        }

        j += !(isVowel(s[j])) ? 1 : 0;
        k -= !(isVowel(s[k])) ? 1 : 0;
    }

    return s.join('');
};

const isVowel = l => /[aeiou]/i.test(l);



console.log(reverseVowels('leetcode')); // 'holle'