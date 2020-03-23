// 1051. Height Checker
// Easy

// 164

// 1078

// Add to List

// Share
// Students are asked to stand in non - decreasing order of heights for an annual photo.

// Return the minimum number of students that must move in order for all students to be standing in non - decreasing order of height.

// Notice that when a group of students is selected they can reorder in any possible way between themselves and the non selected students remain on their seats.



//     Example 1:

// Input: heights = [1, 1, 4, 2, 1, 3]
// Output: 3
// Explanation:
// Current array: [1, 1, 4, 2, 1, 3]
// Target array: [1, 1, 1, 2, 3, 4]
// On index 2(0 - based) we have 4 vs 1 so we have to move this student.
// On index 4(0 - based) we have 1 vs 3 so we have to move this student.
// On index 5(0 - based) we have 3 vs 4 so we have to move this student.
//     Example 2:

// Input: heights = [5, 1, 2, 3, 4]
// Output: 5
// Example 3:

// Input: heights = [1, 2, 3, 4, 5]
// Output: 0


// Constraints:

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100
/**
 * @param {number[]} heights
 * @return {number}
 */
// copied https://leetcode.com/problems/height-checker/discuss/300472/Java-0ms-O(n)-solution-no-need-to-sort
var heightChecker = function(heights) {
    let frequencies = Array(101).fill(0)
    let pointer = 0
    let answer = 0
    
    for (height of heights){
        frequencies[height]++
    }
    //frequencies is basically sorted. An occurrence of a height is the index
    
    for (let i = 0; i < heights.length; i++){
        while (frequencies[pointer] === 0){ // get pointer to the next height
            pointer++
        }
        if (pointer !== heights[i]){ //heights[i] is wrong
            answer++ // count how many wrongs there are
        }
        frequencies[pointer]--
    }
    
    return answer
};

// function heightChecker(heights){
//     let sorted = heights.slice().sort((a, b)=> a - b)
//     let answer = 0
//     for (let i = 0; i < heights.length; i++){
//         if (sorted[i] !== heights[i]) answer++
//     }
//     console.log(sorted)
//     return answer
// }
