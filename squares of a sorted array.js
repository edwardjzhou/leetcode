// 977. Squares of a Sorted Array
// Easy

// 870

// 74

// Add to List

// Share
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

// Example 1:

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Example 2:

// Input: [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Note:

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A is sorted in non-decreasing order.


/**
 * @param {number[]} A
 * @return {number[]}
 */
// key insight: lefter and righter elements are higher valued so the wildest one is the end of the answer array
var sortedSquares = function(A) {
    let left = 0
    let right = A.length - 1
    let answer = []
    for (let i = A.length-1; i >= 0 ; i--) {
        if (Math.abs(A[right]) > Math.abs(A[left])) { 
            answer[i] = (A[right] ** 2)
            right--
        } else {
            answer[i] = (A[left] ** 2)
            left++
        }
    }
    return answer
};



// var sortedSquares = function(A) {
//     let answer = []
//     for (let i = 0 ; i < A.length; i++ ){
//         answer.push(A[i]**2)
//     }
//     return answer.sort( (a,b) => a-b )
// };