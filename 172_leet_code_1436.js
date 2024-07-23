/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = (paths) => paths.filter(path => !paths.map(p => p[0]).includes(path[1]))[0][1];


console.log(destCity([["B","C"],["D","B"],["C","A"]]));