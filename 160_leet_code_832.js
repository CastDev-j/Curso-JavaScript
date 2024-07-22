/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = image[i][j] === 0 ? 1 : 0;
        }
    }
    return image;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));



//[[1,1,0]
//,[1,0,1]
//,[0,0,0]]

//[[1,0,0]
//,[0,1,0]
//,[1,1,1]]