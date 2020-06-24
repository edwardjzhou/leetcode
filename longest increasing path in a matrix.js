// 329. Longest Increasing Path in a Matrix
// Hard

// 1847

// 35

// Add to List

// Share
// Given an integer matrix, find the length of the longest increasing path.

// From each cell, you can either move to four directions: left, right, up or down.You may NOT move diagonally or move outside of the boundary(i.e.wrap - around is not allowed).

//     Example 1:

// Input: nums =
//     [
//         [9, 9, 4],
//         [6, 6, 8],
//         [2, 1, 1]
//     ]
// Output: 4
// Explanation: The longest increasing path is[1, 2, 6, 9].
//     Example 2:

// Input: nums =
//     [
//         [3, 4, 5],
//         [3, 2, 6],
//         [2, 2, 1]
//     ]
// Output: 4
// Explanation: The longest increasing path is[3, 4, 5, 6].Moving diagonally is not allowed.


// my errors:
// array memo is better than string interpolated coordinates keyed Map()
// also dont assign to map like map[5] = 32 because get() can't get it
var longestIncreasingPath = function (matrix) {
    if (!matrix.length) return 0;
    const height = matrix.length;
    const width = matrix[0].length;
    const memo = Array.from({length: height}, () => Array(width) );
    // const map = new Map();
    let best = 0;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            best = Math.max(dfs(i, j), best);
        }
    }
    return best;

    function dfs(y, x) {
        if (memo[y][x]) return memo[y][x];
        // if ( map.has(`${y},${x}`) ) return map.get(`${y},${x}`);
        let current = matrix[y][x];
        let best = 0;

        for (const [dy, dx] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
            if (isValidSpot(y + dy, x + dx) && matrix[y + dy][x + dx] > current) {
                best = Math.max(best, dfs(y + dy, x + dx));
            }
        }

        // map.set(`${y},${x}`, best + 1);
        memo[y][x] = best+1;
        return best + 1;
    };

    function isValidSpot(y, x) {
        if (y >= 0 && y < height && x >= 0 && x < width) return true;
        return false;
    };
};