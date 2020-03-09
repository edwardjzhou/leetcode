// 260. Single Number III
// Medium

// 1179

// 91

// Add to List

// Share
// Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice.Find the two elements that appear only once.

//     Example:

// Input: [1, 2, 1, 3, 2, 5]
// Output: [3, 5]
// Note:

// The order of the result is not important.So in the above example, [5, 3] is also correct.
// Your algorithm should run in linear runtime complexity.Could you implement it using only constant space complexity ?
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let answer = []
    let xorAll = nums.reduce( (num, acc) => {
        return num ^ acc
    }, 0)
    let maskMaker = xorAll.toString(2).length - 1
    
    let answer1 = nums
        .filter( (num) => {
            return (num & 1 << maskMaker) === 0
        })
        .reduce( (num, acc) => {
            return num ^ acc
        })
    let answer2 = xorAll ^ answer1
    return [answer1, answer2]
};


// the result from xoring everything is answer1 ^ answer2
// find the biggest 1 spot and mask everything with it to see who has a 1 there
// then xor all of those to get a guaranteed one answer seeing as how everything but the one answer will be xored out
// then xor everything with the guaranteed one answer to get the second answer

// 6=110
// 5=101 
// 3=011 
// 1 = 001
// 2 = 010


