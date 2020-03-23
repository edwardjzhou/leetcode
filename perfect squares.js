// 279. Perfect Squares
// Medium

// 2209

// 170

// Add to List

// Share
// Given a positive integer n, find the least number of perfect square numbers(for example, 1, 4, 9, 16, ...) which sum to n.

//     Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let squares = []
    let number = 1
    while (number*number <= n){
        squares.push(number*number)
        number++
    }
    let dp = Array(n+1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= n + 1; i++){
        for (square of squares){
            if (i - square >= 0){
                dp[i] = Math.min(dp[i - square] + 1, dp[i])
            }
        }
    }
    return dp[n]
};