// 34. Find First and Last Position of Element in Sorted Array
// Medium

// 3064

// 135

// Add to List

// Share
// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

//     Example 1:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 8
// Output: [3, 4]
// Example 2:

// Input: nums = [5, 7, 7, 8, 8, 10], target = 6
// Output: [-1, -1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    if (binarySearch(nums, target)[1]) return [binarySearch(nums, -.1 + target)[0], binarySearch(nums, .1 + target)[0] - 1]

    return [-1, -1]

    // Number.MIN_VALUE doesnt work here 
}

//note to self: >> goes AFTER EVERYTHING (everything to its left)
// ~~ goes before mult and division ANYWHERE IT IS （because its unary?)
// ~~ truncates rather than floors though


function binarySearch(array, target) {
    let left = 0
    let right = array.length // i was doing array.length-1 wrongly
    let mid

    while (left < right) {  // or is it <= ? HAS TO BE <= ex. [1] would  fail my version unless i just take shortcut
        mid = ~~((left + right) / 2)
        // console.log(target,left,right,mid)

        if (array[mid] === target) return [mid, true]   // l=0 r=5 m=2 => left=3, right=5
        if (array[mid] < target) left = mid + 1
        if (array[mid] > target) right = mid // or is it mid-1 
    }

    if (array[left + mid >> 1] === target) return [left + mid >> 1, true]
    return [(left + right) >> 1, false]
}



// revisiting weak concepts:
 https://en.wikipedia.org/wiki/Reservoir_sampling

 // reservoir sampling: pretend you have a 10 sample size for your reservoir
// for every one beyond that like the 11th sample you would roll a dice that is 1 to 11 
// if you get 5 then 5th sample is replaced by the 11th sample. if you got 11 then move on.
// an element is chosen with probability reserovir size / sample number to join the reservoir 
// an element in the resrovir is chosen at 1/sample number to be TAKEN OUT from the reserovir
// each input has ultimate reservoir size /sample number probability to be chosen to join the reservoir

// re partitioning algos:
// Lomuto: right most is the pivot index/ pivot value
// theres a for loop going from left to right indexed under j 
// if youre smaller than hte pivot an index i keeps track of how many smallers there have been with i++ and swaps j with i 
// after for loop with j concludes swap i which is how many smallers there have been with the pivot (aka j)
// not as good as the original Hoare partition
// hoare is the goood quicksort partiiton where yotu swap any wrong rights with wrong lefts until theres crossover (make sure you move on after swap with a left++ and right--)
//http://cs.boisestate.edu/~jhyeh/teach/cs242_spring04/h3_sol.pdf
//https://www.bowdoin.edu/~ltoma/teaching/cs231/spring16/Lectures/02-recurrences/recurrences.pdf