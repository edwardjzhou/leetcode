// 120. Triangle
// Medium

// 1619

// 193

// Add to List

// Share
// Given a triangle, find the minimum path sum from top to bottom.Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle

// [
//     [2],
//     [3, 4],
//     [6, 5, 7],
//     [4, 1, 8, 3]
// ]
// The minimum path sum from top to bottom is 11(i.e., 2 + 3 + 5 + 1 = 11).

//     Note:

// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    //can only move to same index or index+1
    let costs = Array(triangle.length).fill(null).map(ele => (Array(triangle.length).fill(Infinity)))
    costs[0][0] = triangle[0][0]
    for (let i = 1; i < triangle.length; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            if (j !== 0 && j !== triangle[i].length - 1) {
                costs[i][j] = Math.min(costs[i - 1][j], costs[i - 1][j - 1]) + triangle[i][j]
            } else if (j === 0) {
                costs[i][j] = triangle[i][j] + costs[i - 1][j]
            } else {
                costs[i][j] = triangle[i][j] + costs[i - 1][j - 1]
            }

        }
    }
    return Math.min(...costs[triangle.length - 1])
};

