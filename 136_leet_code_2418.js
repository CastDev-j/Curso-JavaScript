/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = (names, heights) => names.map((name, index) => ({ name, height: heights[index] })).sort((a, b) => b.height - a.height).map(person => person.name);

console.log(sortPeople(["Alice","Bob","Bob"], [155,185,150])); // ["Eddy","Curt","Ben","Dennis","Alex"]