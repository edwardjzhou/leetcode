// 239. Sliding Window Maximum
// Hard

// 3089

// 166

// Add to List

// Share
// Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

// Follow up:
// Could you solve it in linear time?

// Example:

// Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
// Output: [3,3,5,5,6,7] 
// Explanation: 

// Window position                Max
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// monotonic queues

// problem statement wants you to return the VALUE of the largest number in a window of k length
// SO before adding a new value , get rid of anything smaller than that value in the queue
// furthermore if an ele is about to leave queue from being on the left side of the window then shift it off

// end result is the largest number in the window is always at index 0 of queue
// whereas [3,2,1] => queue=[3,2,1]  [1,2,3] => queue=[3] 
// queue = [1,1,1] pop 1 off OK anything in the queue is guaranteed to be in the window until it is equal to the exiting left

var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return 0    
    const queue = []
    const answers = []

    for (let left = -k + 1, right = 0 ; right < nums.length; left++, right++) {
        const current = nums[right]
        while (current > queue[queue.length-1]) queue.pop()
        queue.push(current)
        
        if (left < 0) continue //gotta let that window fully get into view
        
        answers.push(queue[0])
        if (nums[left] === queue[0]) queue.shift()        
    }
    
    return answers
};


