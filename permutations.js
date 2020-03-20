// 46. Permutations
// Medium

// 3184

// 94

// Add to List

// Share
// Given a collection of distinct integers, return all possible permutations.

//     Example:

// Input: [1, 2, 3]
// Output:
// [
//     [1, 2, 3],
//     [1, 3, 2],
//     [2, 1, 3],
//     [2, 3, 1],
//     [3, 1, 2],
//     [3, 2, 1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// current starts at [] but builds up 1 different ele using a different index of remainders each time

var permute = function(nums) {
    let answer = []
    
    permutator([], nums)
    function permutator(current, remainder){
        if (remainder.length === 0){
            answer.push(current)
            return
        }
        for (let i = 0; i < remainder.length; i++){
            permutator(current.concat(remainder[i]), remainder.slice(0, i).concat(remainder.slice(i+1)))
        }
    }
    return answer
    
};

