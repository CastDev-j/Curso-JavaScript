/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for (let arr of items) {
        let [phone, color, name] = arr;
        if (ruleKey === "type" && ruleValue === phone ||
            ruleKey === "color" && ruleValue === color ||
            ruleKey === 'name' && ruleValue === name) {
            count++;
        }
    }
    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver")); 