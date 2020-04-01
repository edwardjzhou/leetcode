// 221. Maximal Square
// Medium

// 2262

// 58

// Add to List

// Share
// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4
/**
 * @param {character[][]} matrix
 * @return {number}
 */

//re this: trying to figure out bottom up and dfs differences but still 
// kinda mixed up... recursion goes to the ends of the earth and releases layer by layer
// bottom up just starts from the ends of the earth and builds up 
//Runtime: 68 ms, faster than 87.52% of JavaScript online submissions for Maximal Square.

var maximalSquare = function(matrix) {
    
    if(!matrix.length) return 0
    let height = matrix.length
    let width = matrix[0].length
    let answer = 0
    let memo = Array(height).fill(null).map(()=>Array(width).fill(null))
    let calculation
    
    let dfs = function(y,x){
        if (y < 0 || x < 0 || y >= height || x >= width || matrix[y][x] !=1) return 0 
        if (memo[y][x] !==null) return memo[y][x]
        if (memo[y][x] ===null) {
            calculation = (Math.min(dfs(y+1,x), dfs(y, x+1), dfs(y+1,x+1) )+1)
            memo[y][x] = calculation
            return calculation
        }
    }
    
    
    for (let i = height-1; i >= 0; i--){
        for (let j = width-1; j >= 0; j--){
            answer = Math.max(dfs(i,j), answer)
        }
    }


    
    
    return answer*answer
    
 
    
};