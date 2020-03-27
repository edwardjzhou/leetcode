// 733. Flood Fill
// Easy

// 804

// 157

// Add to List

// Share
// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input: 
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: 
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.
// Note:

// The length of image and image[0] will be in the range [1, 50].
// The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
//     let target = image[sr][sc]
//     let queue = [[sr,sc]]
//     image[sr][sc] = newColor
//     let set = new Set()
//     set.add(`${sr},${sc}`)
//     let current
//     while (queue.length){        
//         current = queue.shift()
//         for ([dy,dx] of [[1,0],[-1,0],[0,1],[0,-1]]){
//             if(current[0]+dy >= 0 && current[0]+dy < image.length && current[1]+dx >= 0 && current[1]+dx < image[0].length && !set.has(`${current[0]+dy},${current[1]+dx}`)  && image[current[0]+dy][current[1]+dx] === target){
//                 queue.push([current[0]+dy,current[1]+dx])
//                 set.add(`${current[0]+dy},${current[1]+dx}`)
//                 image[current[0]+dy][current[1]+dx] = newColor
//             }
        
//         }

//     }
//     return image
    
    let height = image.length
    let width = image[0].length
    let target = image[sr][sc]
    dfs(sr,sc)    
    function dfs(y, x){
        if (y >= height || x >= width || y < 0 || x < 0 || image[y][x] !== target || image[y][x] === newColor) return false
        image[y][x] = newColor
        dfs(y, x+1)
        dfs(y, x-1)  
        dfs(y-1, x)
        dfs(y+1, x)

        return true
    }
    return image
    
};
