/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let map = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set];

    for (let i = 1; i < rings.length; i+=2) {
        map[rings.charAt(i)].add(rings.charAt(i-1));
    }

    return map.filter(e => e.size == 3).length;
};

console.log(countPoints("B0R0G0R9R0B0G0")); // 1


