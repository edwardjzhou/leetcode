// 56. Merge Intervals
// Medium

// 3709

// 270

// Add to List

// Share
// Given a collection of intervals, merge all overlapping intervals.

//     Example 1:

// Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
// Output: [[1, 6], [8, 10], [15, 18]]
// Explanation: Since intervals[1, 3] and[2, 6] overlaps, merge them into[1, 6].
//     Example 2:

// Input: [[1, 4], [4, 5]]
// Output: [[1, 5]]
// Explanation: Intervals[1, 4] and[4, 5] are considered overlapping.
//     NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

//         Accepted
// 554, 274
// Submissions
// 1, 438, 312

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// slow but can make faster with keeping track of two ptrs: 1 of the lowest of the work-in-progress range, 1 of the highest. i jsut write to to the next ele of the intervals array 
var merge = function(intervals) {
    if (!intervals.length) return intervals
    const answers = []
    intervals.sort( (a,b) => a[0] - b[0])
    let i = 0
    while ( i < intervals.length - 1){
        if (intervals[i][1] < intervals[i+1][0]) {
            answers.push(intervals[i])
        } else {
            intervals[i+1] = [intervals[i][0], Math.max(intervals[i+1][1], intervals[i][1]) ]
        }
        i++
    } 
    answers.push (intervals[i])
    
    
    return answers
};