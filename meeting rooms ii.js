// Input: intervals = [(0, 30), (5, 10), (15, 20)]
// Output: 2
// Explanation:
// We need two meeting rooms
// room1: (0, 30)
// room2: (5, 10), (15, 20)
// [ [0,10], [5,20], [15, 30] ] 


var meetingRooms = function(input){
    let best = 0
    const temp = []
    for ([start,end] of input) {
        temp.push([start, "start"])
        temp.push([end, "end"])
    }
    temp.sort( (b,a) => b[0]-a[0] )

    let streak = 0
    for (time of temp) {
        if (time[1] === "start") best = Math.max(++streak, best)
        if (time[1] === "end") streak--

    }

    return best
}




console.log(meetingRooms( [ [0, 30], [5, 18.5], [15, 20], [15,19], [-1, 1], [18,19]]  ))

console.log(meetingRooms([[0,15], [14,30]]))


// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false

// //4:30 18 mins
// var wordBreak = function(s, wordDict){
//     const dp = Array(s.length + 1).fill(false)
//     dp[0] = true
//     for (let i = 0; i < s.length; i++) {
//         if (dp[i] === true) {
//             for (word of wordDict) {
//                 if (s.slice(i, word.length + i ) === word ) dp[i + word.length] =true
//             }

//         }
//     }
//     console.log(dp)
//     return dp[dp.length-1]
// }


// let s = "catsandog"
//  let wordDict = ["cats", "dog", "sand", "and", "cat"]
// console.log(wordBreak(s,wordDict))