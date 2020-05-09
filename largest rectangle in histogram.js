// 84. Largest Rectangle in Histogram
// Hard

// 3168

// 77

// Add to List

// Share
// Given n non - negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.




// Above is a histogram where width of each bar is 1, given height = [2, 1, 5, 6, 2, 3].




// The largest rectangle is shown in the shaded area, which has area = 10 unit.



//     Example:

// Input: [2, 1, 5, 6, 2, 3]
// Output: 10
/**
 * @param {number[]} heights
 * @return {number}
 */
//  profundity is track minimums to both sides of me
// how to do that? let each ele remember its closest smaller neighbor -- this should still be worst case N^2 i believe dunno average case i would just guess nlogn
// because logarithms are cool 
// example : [1,2, 6,5] answer = 10
//           left: [-1,0,1,1] if we never find a lower to our left we are -1 (undershoot by 1 otherwise if we set left[0] = 0 instead of -1 it would be unfair for ppl who blow past it vs those who stop at it)
//.         right: [4 ,4,3,4] if we never find a lower to our right we are length of heights array (overshoot by 1)
// intervallength: [4, 3,1,2]
//          index: [0,1, 2, 3]
// each one is height[i] * ( right - left - 1) ) how much unit distance comes from counting # of posts to the right we extend - left posts? (net posts - 1) distance! 
// we start counting AFTEr letft post ends and stop counting BEFORE right post starts interval 3-5, is just distance 1
//          calcs: [4, 6, 6,10 ]
//should be ordered and reversed invariant like an odd function

// [5,6,2,1] 4 - (-1) -1,  3-(-1)-1, 1, 2 - (-1) -1

var largestRectangleArea = function(heights) {
    if (!heights.length) return 0
    
    const left = Array(heights.length) // first index to my left that is smaller than me for a given i
    const right = Array(heights.length) // first index to my right that is smaller than me for a given i
    
    //boundary conditions / initial conditions
    left[0] = -1
    right[heights.length-1] = heights.length
    
    let best = 0
    
    for (let i = 1; i < heights.length; i++) {
        if (heights[i] > heights[i-1]) {
            left[i] = i-1
        } else {            
            left[i] = left[i-1]
            while (heights[left[i]] >= heights[i] && left[i] > -1) {
                left[i] = left[left[i]]
            }
        }
    }
    
    for (let i = heights.length - 2; i >= 0; i--) {
        if (heights[i+1] < heights[i]) {
            right[i] = i + 1
        } else {            
            right[i] = right[i+1]
            while (heights[right[i]] >= heights[i] && right[i] < heights.length) {
                right[i] = right[right[i]]
            }
        }
    }
    
    for (let i = 0; i < heights.length; i++) {
        best = Math.max(best, (right[i] - left[i] - 1) * heights[i] )
    }
    return best
                       
};



// // findindex takes cb, indexof is just val
// // kinda like quicksort pivot except pivots are chosen as smallest 
// // fails on [0-20,000] array because of callstack limit exceeded -- 
// if rewritten iteratively or w/ "segment tree" should work pretty fast nlogn right now probably n^2

// var largestRectangleArea = function(heights) {
//     if (!heights.length) return 0 
//     let min = Math.min( ...heights)
//     let minIndex = heights.indexOf(min)
//     return Math.max(min*heights.length, largestRectangleArea(heights.slice(0, minIndex)),
//                         largestRectangleArea(heights.slice(minIndex +1)))
        
// }

//rewrite w pointers in future

//  var largestRectangleArea = function(heights) {
//     if (!heights.length) return 0
//     let answer = -Infinity
//     let min
//     let minIndex
//     const stack = [heights]
    
//     while (stack.length) {
//         const current = stack.pop()
//         minIndex = current.indexOf(min = Math.min.apply(null, current))
//         answer = Math.max(min * current.length, answer)
//         const left = current.slice(0, minIndex)
//         const right = current.slice(minIndex +1)
//         if (left.length) stack.push(left)
//         if (right.length) stack.push(right)
//     }
//     return answer 
// }
