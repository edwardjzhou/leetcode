// 76. Minimum Window Substring
// Hard

// 3890

// 273

// Add to List

// Share
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
// Accepted
// 361,726
// Submissions
// 1,069,549
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// go to the right if you dont have everything
// if you have everyhting decrease the window by moving left towards the right till its broke then go right again from oldright

var minWindow = function (s, t) {
    const required = {}
    let counter = 0
    for (let char of t) {
        required[char] ? required[char]++ : required[char] = 1
        counter++
    }

    let right = 0
    let left = 0
    let best = Infinity
    let bestleft
    let bestright

    while (right < s.length) {
        if (required[s[right]] > 0) counter--
        if (required.hasOwnProperty(s[right])) required[s[right]]--
        right++

        while (counter === 0) {
            if (right - left < best) {
                best = right - left
                bestleft = left
                bestright = right
            }

            if (s[left] in required) required[s[left]]++
            if (required[s[left]] > 0) counter++
            left++
        }

    }

    return best !== Infinity ? s.substring(bestleft, bestright) : ""

};
