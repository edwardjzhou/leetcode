// 448. Find All Numbers Disappeared in an Array
// Easy

// 2657

// 232

// Add to List

// Share
// Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

// Example:

// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

// use indices to store info about what youve seen so far without losing any info ... by making the ele there negative
// errors: was lazy and off by one so used boolean flag to check for element = nums.length case

var findDisappearedNumbers = function (nums) {
    if(!nums.length) return nums
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i])-1] > 0)  nums[Math.abs(nums[i])-1] = -nums[Math.abs(nums[i])-1]  
    }

    const answer = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) answer.push(i+1)
    }

    return answer
};