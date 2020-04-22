// 77. Combinations
// Medium

// 1256

// 63

// Add to List

// Share
// Given two integers n and k, return all possible combinations of k numbers out of 1 ...n.

//     Example:

// Input: n = 4, k = 2
// Output:
// [
//     [2, 4],
//     [3, 4],
//     [2, 3],
//     [1, 2],
//     [1, 3],
//     [1, 4],
// ]
var combine = function (n, k) {
    const answer = []
    const options = [] // [1,2,3,4]
    const memo = new Set()
    for (let i = 1; i <= n; i++) {
        options.push(i)
    }

    // 1 to n-k+1 as the first #, and only numbers bighger than current are remainder options
    for (let i = 0; i < n - k + 1; i++) {
        dfs([options[i]], options.slice(i + 1))

    }

    function dfs(current, remainder) { // this is backtrakcing technically
        if (current.length === k) return answer.push(current)
        if (!remainder.length) return
        for (let i = 0; i < remainder.length; i++) {
            dfs([...current, remainder[i]], [...remainder.slice(i + 1)])
        }
    }
    return answer
};


