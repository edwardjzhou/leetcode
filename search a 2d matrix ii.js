// 240. Search a 2D Matrix II
// Medium

// 2634

// 71

// Add to List

// Share
// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
// Example:

// Consider the following matrix:

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// Given target = 5, return true.

// Given target = 20, return false.


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) return false
    
    let height = matrix.length
    let width = matrix[0].length
    let rememberj = 0
    
    for (var i = height - 1; i >= 0; i--) {
        for (let j = rememberj; j < width; j++) {
            if (matrix[i][j] === target) return true
            else if (matrix[i][j] < target) {
                if (j === width - 1) return false
                
                // search = binarySearch(j, width-1)
                // console.log(search, i, j)
                // if (search === true) return true
                // else {
                //     if (i === 0 ) return false
                //     // if (search <= j ) return false
                //     j = search  - 1
                // }
                
                continue
            }
            else {
                rememberj = j
                break
            }
        }
    }
    return false
    
    // [[1,3,4],
    // [1,8,8],
    // [4,12,17]]
// 11
    
//     [[1,2,3,7,8],
//      [5,10,14,16,19],
//      [8,10,18,19,23],
//      [9,12,22,24,29]] target = 25 should be in 4th spot after bsearch 
// 14
    //[[1,4,7,11,15],
//     [2,5,8,12,19],
//     [3,6,9,16,22],
//     [10,13,14,17,24],
//     [18,21,23,26,30]]
// // 5

    

//     function binarySearch(left, right) {
//         let mid = left + right >> 1
//         if (matrix[i][mid] === target) return true
//         else if (left >= right) return left // THIS IS WHERE IT OUGHT TO BE [1,2,3] target = 4 will yield 2 target=0 will yield 0 target=2.5 will yield 2 target=1.5 will yield 1-- ALWAYS  after mid-1 fixed to (left, mid)
//         else if (matrix[i][mid] > target) return binarySearch(left, mid) // mid-1 is BAD never do that again
//         else if (matrix[i][mid] < target) return binarySearch(mid + 1, right)
//     }
    
};

// function searchMatrix(matrix, target) {
//   if (matrix.length === 0 || matrix[0].length === 0) return false;

//   let i = 0;
//   let j = matrix[0].length - 1;

//   while (j >= 0 && i < matrix.length) {
//     if (matrix[i][j] === target) return true;
//     else if (matrix[i][j] > target) j--;
//     else i++;
//   }

//   return false;
// }

// var searchMatrix = function(matrix, target) {
//     if (matrix.length === 0)
//         return false;
//     for (let row of matrix) {
//         if (row.length > 0 && row[0] <= target && row[row.length - 1] >= target) {
//             if (binarySearch(row, target)) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };

// function binarySearch(list, target) {
//     let min = 0;
//     let max = list.length;
//     while (min < max) {
//         const pivot = min + Math.floor((max - min) / 2);
//         if (list[pivot] === target)
//             return true;
//         else {
//             if (list[pivot] < target) {
//                 min = pivot + 1;
//             } else {
//                 max = pivot;
//             }
//         }
//     }
//     return false;
// }

// We start search the matrix from top right corner, initialize the current position to top right corner, if the target is greater than the value in current position, then the target can not be in entire row of current position because the row is sorted, if the target is less than the value in current position, then the target can not in the entire column because the column is sorted too. We can rule out one row or one column each time, so the time complexity is O(m+n).

// public class Solution {
//     public boolean searchMatrix(int[][] matrix, int target) {
//         if(matrix == null || matrix.length < 1 || matrix[0].length <1) {
//             return false;
//         }
//         int col = matrix[0].length-1;
//         int row = 0;
//         while(col >= 0 && row <= matrix.length-1) {
//             if(target == matrix[row][col]) {
//                 return true;
//             } else if(target < matrix[row][col]) {
//                 col--;
//             } else if(target > matrix[row][col]) {
//                 row++;
//             }
//         }
//         return false;
//     }
// }