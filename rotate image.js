// 48. Rotate Image
// Medium

// 2561

// 206

// Add to List

// Share
// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]
// Accepted
// 365,348
// Submissions
// 672,878
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//swap rows first with last to mid wiht mid
// then reflect upon the diagonal

// bit unary/binary operators have same priority as addition subtraction; that is they're immediately finished going left to right
// multiplication divison have higehr priority than even that in that theyre even more immedaitely finished
// > and < comparison operators have lowest priority i THINK so theyre last fiddle
var rotate = function(matrix) {
    // [ i=0
    //
    //
    // i=3] length = 4
//     Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// [7,8,9]
// [4,5,6]
// [1,2,3]
// square matrix transpose the diagonal remains the same, lucky
// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
    let length = matrix.length 
    for (let i = 0; i < length >> 1; i++) {
        [matrix[i], matrix[length-1-i]] = [matrix[length-1-i], matrix[i]]
    }
    // matrix = matrix[0].map( (column, index) => matrix.map(row => row[index]) )
    //  0,1 <=> 1,0 ; 0,2 <=> 2,0 ; 1,2 <=> 2,1
    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j <= matrix[0].length - 1; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
    
    // return matrix

};
