// 301. Remove Invalid Parentheses
// Hard

// 2277

// 92

// Add to List

// Share
// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.

// Note: The input string may contain letters other than the parentheses ( and ).

// Example 1:

// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:

// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:

// Input: ")("
// Output: [""]

// ()())() start
// problem occurs at index 4, start is 5
// we delete index 3 and send in ()(_) + () with a start of 4, and prevend of 3   
// we delete index 1 and send in (_()) + () with a start of 4 and prevend of 1   
// pretend ()())()) (()) + ()) (() ()) WE NEED TO STORE PREVEND to START from the place of our last deletion when choosing the NEXT removal index.. starting from WHERE PROBLEM OCCURRED aka start-1 isnt good enough to see if its a viable spot to pop ) when we need ) popped off later AND starting from 0 results in dupes
// in other words when one more ) than ( occurs
// we look before it to remove ANY single ) to make it balanced but we dont want to redo the same problem
// which we would if we removed say the 2nd ) "allin" the first round and then removed 1st ) the second round
// while also removing 1st ) the first round and then removing 2nd ) the second round
// so we set it to be a onesided removal you can only remove something bigger than THIS removal after the first time and thus the decision tree winnows to the extent there are no dupes
// sorta like how when doing combinations leetcode problem of a sorted array i had to make sure only bigger #s continued (to ensure no dupes).. here this makes sure only bigger )s can be removed in future

// ()(
// (())() gopod
// (()()
// (())(
// ()()() good
// ()(()
// ()()(



var removeInvalidParentheses = function(s) {
    const answer = []
    
    var helper = function(s, start, end) { // end is the last removal idx and should be smaller than start
        let count = 0
        for (; start < s.length && count >= 0;  start++) {
            if (s[start] === "(") count++
            if (s[start] === ")") count--
        }
        if (count < 0) {
            for (; end < start; end++) {
                if (s[end] === ")" &&  s[end-1] !== ")" ) {
                    helper(s.slice(0,end) + s.slice(end+1), start - 1, end)
                }
            }
        } else {
            // we were all good on )s
            reversed(s.split("").reverse().join(""), 0, 0)
        }
    }

    var reversed = function(s, start, end) {
            let count = 0
            while (start < s.length && count >= 0) {
                if (s[start] === ")") count++
                if (s[start] === "(") count--
                start++
            }

            if (count < 0) {
                for (let i = end; i < start; i++) {
                    if (s[i] === "(" &&  s[i-1] !== "(" ) {
                        reversed(s.slice(0,i) + s.slice(i+1), start - 1, i)
                    }
                }
            } else {
                // we were all good on (s
                answer.push(s.split("").reverse().join(""))
            }
    }
    
    helper (s, 0, 0)
    return answer
};

    