// 128. Longest Consecutive Sequence
// Hard

// 2692

// 156

// Add to List

// Share
// Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

// Your algorithm should run in O(n) complexity.

//     Example:

// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive elements sequence is[1, 2, 3, 4].Therefore its length is 4.
/**
 * @param {number[]} nums
 * @return {number}
 */
// wouldve never guessed that a set would be useful
var longestConsecutive = function (nums) {
    let set = new Set(nums)
    let best = 0
    let counter = 0
    set.forEach((ele) => {
        if (!set.has(ele - 1)) {
            while (set.has(ele++)) {
                counter++
            }
            best = Math.max(best, counter)
            counter = 0
        }
    })
    return best
};
