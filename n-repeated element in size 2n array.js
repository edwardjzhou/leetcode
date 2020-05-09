// 961. N-Repeated Element in Size 2N Array
// Easy

// 383

// 214

// Add to List

// Share
// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

 

// Example 1:

// Input: [1,2,3,3]
// Output: 3
// Example 2:

// Input: [2,1,2,5,3,2]
// Output: 2
// Example 3:

// Input: [5,1,5,2,5,3,5,4]
// Output: 5
 

// Note:

// 4 <= A.length <= 10000
// 0 <= A[i] < 10000
// A.length is even
/**
 * @param {number[]} A
 * @return {number}
 */

// [8,3,2,3]
// current = 8
// score = 1
//score = 0 @ i =1
//socre = 1 current = 3
// this is the cheat that just finds a repetition rather than the one with N repetitions out of 2N items
// the mathy/logical version of the answer i think is somewhat like THERE IS A POSSIBILITY that going
// through every 2-sized subarray Might not find a 2-sized array with a dupe so just make it a three-sized subarray and it guarantees finding an answer
// like 1 is the answer [1,2,1,3,1,4] and we do [1,2], [1,3], [1,4] thjere are no dupes inside any of them but if we do [1,2,1] yep guaranteed to find a dupe which is 1
var repeatedNTimes = function(A) {
    const set = new Set()
    for (const ele of A) {
        if (set.has(ele)) return ele
        set.add(ele)
    }
};