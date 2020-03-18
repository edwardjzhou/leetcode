// 287. Find the Duplicate Number
// Medium

// 3631

// 450

// Add to List

// Share
// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tortoise = nums[0]
    let hare = nums[0]
    let i =0
    let j=0
    while (true){
        i++
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
        console.log(tortoise,hare)
        if (tortoise === hare) break
    // they intercept somewhere inside the cycle 
    }
    
    pointer1 = nums[0]
    pointer2 = hare
    // the travel time from start to cycle's start is guaranteed to be a factor of meeting point to cycle's start, so move a guy at meeting point until it hits another ptr starting from 0  and thats cycle's start
    // tortoise === hare
    while (pointer1 !== pointer2){
        j++
        pointer1 = nums[pointer1]
        pointer2 = nums[pointer2]
    }
    console.log(i,j)
    return pointer1
    
    
};
