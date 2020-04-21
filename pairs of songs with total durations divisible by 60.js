// 1010. Pairs of Songs With Total Durations Divisible by 60
// Easy

// 394

// 37

// Add to List

// Share
// In a list of songs, the i-th song has a duration of time[i] seconds. 

// Return the number of pairs of songs for which their total duration in seconds is divisible by 60.  Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

 

// Example 1:

// Input: [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60
// Example 2:

// Input: [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.
 

// Note:

// 1 <= time.length <= 60000
// 1 <= time[i] <= 500
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    const map = new Map()
    let answer = 0
    let count60s = 0 
    let count0s = 0
    
    // a 60 needs at least another 60 or a 0  then its 1
    // a 0 needs at least another 60 then its 1
    for (songtime of time) {
        if (songtime === 0) {
            answer += count60s++
        }
        else if (songtime % 60 === 0) {
            answer += count60s++ + count0s
        } else {
            let minform = songtime % 60
            answer += map[60-minform] ? map[60-minform]: 0
            map[minform] = ++map[minform] || 1
        }
    }
    return answer
};

