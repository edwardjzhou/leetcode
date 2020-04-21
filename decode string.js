394. Decode String
// Medium

// 2614

// 131

// Add to List

// Share
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; No extra white spaces, square brackets are well - formed, etc.

//     Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there won't be input like 3a or 2[4].

// Examples:

// s = "3[a]2[bc]", return "aaabcbc".
//     s = "3[a2[c]]", return "accaccacc".
//         s = "2[abc]3[cd]ef", return "abcabccdcdcdef".
/**
 * @param {string} s
 * @return {string}
 */
// bob weis solution

var decodeString = function(s) {
    let stack = []
    let temp = ""
    let topofstack
    let newtemp = ""
    let number = ""
    for (i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            number += s[i]  
            while (!isNaN(s[i+1])) {
                number += s[i+1]
                i++
            }
            stack.push(number)
            number = ""
        }
        else if (s[i] === "[") {
            continue
        }
        else if (s[i] === "]") {
            topofstack = stack.pop()
            while (isNaN(topofstack)) {
                temp = topofstack + temp
                topofstack = stack.pop()
            }
            for (let i = 0; i < topofstack; i++) {
                newtemp += temp
            }
            stack.push(newtemp)
            temp = ""
            newtemp = ""
            topofstack = ""
        } else {
            stack.push(s[i])
        }        
        console.log(stack)
    }
    return stack.join("")
};
    
//     if encounter a number, update nRepeats in the top of stack.
// if encounter [, continue.
// if encounter ], compute the result of top of stack and append result to top of remaining stack.
// otherwise, append character to top of stack.
     