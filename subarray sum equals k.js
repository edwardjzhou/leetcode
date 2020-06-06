// 560. Subarray Sum Equals K
// Medium

// 4352

// 138

// Add to List

// Share
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:

// Input:nums = [1,1,1], k = 2
// Output: 2
 

// Constraints:

// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//rollingsum: 1, 2, 3
//looking for: rollingsum-k==0

// errors: 
// WRONG to hardcode hash[0] =1; just stick sum into hash immediately rather than hash[0] = 1 // 1 way to get to 0 
// answer += hash[k - rollingsum] ? hash[k - rollingsum] : 0 // WRONG its what you can subtract to get to K, not what you can add

// trick is that (cum sum atm MINUS a previous cum sum) === k is an instance of a subarray equaling k
// multiple previosu cum sums can be the same value because of neg or 0 elements
// i imagine this would be very very difficult if it were subseqwuence and not subarray
var subarraySum = function(nums, k) {
    let rollingsum = 0
    let hash = {}
    let answer = 0
    for (let i = 0; i < nums.length; i++) {
        hash[rollingsum] = hash[rollingsum] ? hash[rollingsum] + 1 : 1
        rollingsum += nums[i]
        answer += hash[rollingsum-k] ? hash[rollingsum-k] : 0
    }
    
    return answer
    
};

