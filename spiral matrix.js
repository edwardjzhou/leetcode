// 54. Spiral Matrix
// Medium

// 1878

// 517

// Add to List

// Share
// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
    if (!matrix.length) return []
    let height = matrix.length
    let width = matrix[0].length
    let answer = []

    for (let i = 0; i < height; i++) {
        if (i === 0) {
            answer = answer.concat(matrix[i])
            if (height === 1) return answer
        }
        else if (i === height - 1) {
            matrix[i].reverse()
            matrix.shift()
            matrix.reverse()
            i = -1
            height = matrix.length
        } else {
            if (!matrix[i].length) return answer
            answer = answer.concat(matrix[i].pop())
            matrix[i].reverse()
        }

    }
};