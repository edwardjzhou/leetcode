// 39. Combination Sum
// Medium

// 3072

// 97

// Add to List

// Share
// Given a set of candidate numbers(candidates)(without duplicates) and a target number(target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

//     Note:

// All numbers(including target) will be positive integers.
// The solution set must not contain duplicate combinations.
//     Example 1:

// Input: candidates = [2, 3, 6, 7], target = 7,
//     A solution set is:
// [
//     [7],
//     [2, 2, 3]
// ]
// Example 2:

// Input: candidates = [2, 3, 5], target = 8,
//     A solution set is:
// [
//     [2, 2, 2, 2],
//     [2, 3, 3],
//     [3, 5]
// ]
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
    const dp = Array(target+1)
    for(let i = 0; i < target + 1; i++) {
        dp[i] = []
    }
    
    for (let i = 0; i < candidates.length; i++) {
        dp[candidates[i]] = [[candidates[i]]]
    }

    for(let i = 1; i <= target; i++){
        candidates.forEach( (candidate)=> {
            if ( i - candidate >= 0){  // can this candidate fit in this
                dp[i-candidate].forEach( smaller => {
                    dp[i].push([...smaller,candidate])
                    // console.log(smaller)
                })
            }
        })
    } 

    let previous =[]

    let asdf = dp[target].sort().map( ele=> ele.sort()).sort().filter((array)=>{
        if(arraysMatch(array.sort(),previous)) {
            return false
        }
        previous = array.sort()
        return true
    })
    return asdf
};

var arraysMatch = function (arr1, arr2) {
    // Check if the arrays are the same length 
    if (arr1.length !== arr2.length) return false;

    // Check if all items exist and are in the same order
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }

    // Otherwise, return true
    return true;

};

console.log(combinationSum([2,3,5],7))



//Runtime: 768 ms, faster than 5.02% of JavaScript online submissions for Combination Sum.
// Memory Usage: 90.7 MB, less than 6.67 % of JavaScript online submissions for Combination Sum.
