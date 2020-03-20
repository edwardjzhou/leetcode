// 461. Hamming Distance
// Easy

// 1552

// 150

// Add to List

// Share
// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different.
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let answer = x^y
    let counter = 0
    for (let i = 0; i < answer.toString(2).length; i++){
        if(answer.toString(2)[i]==="1"){
            counter++
        }
    }
    return counter
    
};