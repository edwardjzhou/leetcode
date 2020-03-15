// 62. Unique Paths
// Medium

// 2485

// 180

// Add to List

// Share
// A robot is located at the top - left corner of a m x n grid(marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time.The robot is trying to reach the bottom - right corner of the grid(marked 'Finish' in the diagram below).

// How many possible unique paths are there ?


//     Above is a 7 x 3 grid.How many possible unique paths are there ?



//         Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top - left corner, there are a total of 3 ways to reach the bottom - right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28


// Constraints:

// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //     takes forever time limit exceeded at  41/62 test cases
    //     if ( m==1 && n==1) return 1
    //     if ( m > 1 && n > 1) {
    //         return uniquePaths(m-1, n) + uniquePaths(m , n-1)
    //     } else if ( m > 1) {
    //         return uniquePaths(m-1, n)
    //     } else if ( n > 1){
    //         return uniquePaths(m, n-1)
    //     }

    // if above me and left of me have a value add them and that is me
    let answer = [Array(m).fill(1)]
    for (let i = 1; i < n; i++) {
        answer.push([1, ...Array(m - 1).fill(0)])
    }

    // console.log(answer)

    for (let j = 1; j < n; j++) {
        for (let i = 1; i < m; i++) {
            answer[j][i] = answer[j - 1][i] + answer[j][i - 1]
        }
    }
    // console.log(answer)
    return answer[n - 1][m - 1]

};