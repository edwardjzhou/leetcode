// 1162. As Far from Land as Possible
// Medium

// 288

// 16

// Add to List

// Share
// Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized and return the distance.

// The distance used in this problem is the Manhattan distance: the distance between two cells(x0, y0) and(x1, y1) is | x0 - x1 | + | y0 - y1 |.

// If no land or water exists in the grid, return -1.



// Example 1:



// Input: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
// Output: 2
// Explanation:
// The cell(1, 1) is as far as possible from all the land with distance 2.
// Example 2:



// Input: [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
// Output: 4
// Explanation:
// The cell(2, 2) is as far as possible from all the land with distance 4.


// Note:

// 1 <= grid.length == grid[0].length <= 100
// grid[i][j] is 0 or 1

var maxDistance = function (grid) {
    const height = grid.length
    const width = grid[0].length
    const memo = new Set()
    let queue = []
    let best = -Infinity
    let flag = false
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
                memo.add(`${i},${j}`)
                queue.push([i, j, 1])
            }
        }
    }


    while (queue.length) {
        let current = queue.shift()
        for (const [dy, dx] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
            if (dy + current[0] >= height || dy + current[0] < 0 ||
                dx + current[1] >= width || dx + current[1] < 0) continue
            if (memo.has(`${dy + current[0]},${dx + current[1]}`)) continue


            if (grid[dy + current[0]][dx + current[1]] === 0) {
                flag = true
                grid[dy + current[0]][dx + current[1]] = current[2] + 1
                queue.push([dy + current[0], dx + current[1], grid[dy + current[0]][dx + current[1]]])
            }
            memo.add(`${dy + current[0]},${dx + current[1]}`)
        }
    }

    if (!flag) return -1
    for (y of grid) best = Math.max(best, Math.max(...y) - 1)
    return best

};