// 695. Max Area of Island
// Medium

// 1558

// 70

// Add to List

// Share
// Given a non - empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:

// [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
// [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
// [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
// [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4 - directionally.
//     Example 2:

// [[0, 0, 0, 0, 0, 0, 0, 0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.


// someones 99.55% solution
function maxAreaOfIsland(grid) {
    let height = grid.length
    let width = grid[0].length
    let answer = 0

    function dfs(y, x) {
        if (y < 0 || x < 0 || y >= height || x >= width || grid[y][x] === 0) return 0
        grid[y][x] = 0
        return 1 + dfs(y - 1, x) + dfs(y + 1, x) + dfs(y, x + 1) + dfs(y, x - 1)
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] !== 0) {
                answer = Math.max(answer, dfs(i, j))
            }
        }
    }
    return answer
}
