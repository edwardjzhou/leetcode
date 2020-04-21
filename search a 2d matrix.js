74. Search a 2D Matrix
Medium

1442

146

Add to List

Share
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// [1,2,3]
var searchMatrix = function(matrix, target) {
    if (!matrix.length || !matrix[0].length) return false
    let height = matrix.length
    let width = matrix[0].length
    
    let top = 0
    let bottom = height
    while (top < bottom) {
        let mid = top + bottom >> 1

        if (matrix[mid][width -1] >= target && matrix[mid][0] <= target) {
            let left = 0
            let right = width
            while (left < right) {
                let mid2 = left + right >> 1
                if (matrix[mid][mid2] === target) {
                    return true
                }
                else if (matrix[mid][mid2] > target) {
                    right = mid2
                } else {
                    left = mid2 + 1
                }
            }
            return false
        } else if (matrix[mid][0] > target) {
            bottom = mid 
        } else {
            top = mid + 1
        }
    }
    return false
    
//     if (!matrix.length || !matrix[0].length ) return false
//     let height = matrix.length
//     let width = matrix[0].length
//     let left = 0
//     let right = height * width
//     while (left < right) {
//         let mid = left + right >> 1
//         if (matrix[Math.floor(mid/width)][mid % width] === target) return true
//         else if (matrix[Math.floor(mid/width)][mid % width] > target) right = mid
//         else {
//             left = mid + 1
//         }
//     }
    
//     return false
    
};

