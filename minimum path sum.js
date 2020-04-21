64. Minimum Path Sum
Medium

2318

50

Add to List

Share
Given a m x n grid filled with non - negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

    Note: You can only move either down or right at any point in time.

        Example:

Input:
[
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (!grid.length) return 0
    
    let dp = Array(grid.length + 1).fill(0).map(() => Array(grid[0].length + 1).fill(Infinity) )
    dp[0][1] = 0

    for (let i = 1; i <= grid.length; i++) {
        for (let j = 1; j <= grid[0].length; j++) {
            dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i-1][j-1]
        }
    }
    return dp[grid.length][grid[0].length]
    
};