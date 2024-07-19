/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    return command.replace(/\(\)/g, 'o').replace(/\(al\)/g, 'al');
};

console.log(interpret("G()(al)")); // "Goal"