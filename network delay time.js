// 743. Network Delay Time
// Medium

// 1123

// 204

// Add to List

// Share
// There are N network nodes, labelled 1 to N.

// Given times, a list of travel times as directed edges times[i] = (u, v, w), where u is the source node, v is the target node, and w is the time it takes for a signal to travel from source to target.

//     Now, we send a signal from a certain node K.How long will it take for all nodes to receive the signal ? If it is impossible, return -1.



// Example 1:



// Input: times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], N = 4, K = 2
// Output: 2


// Note:

// N will be in the range[1, 100].
// K will be in the range[1, N].
// The length of times will be in the range[1, 6000].
// All edges times[i] = (u, v, w) will have 1 <= u, v <= N and 0 <= w <= 100.
/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
//ingenius Bellman-Ford from hongbaomiao
// KEY INSIGHT: i like this its like a reservoir simulation
var networkDelayTime = function(times, N, K) {
    let nodetimes = Array(N+1).fill(Infinity)
    let updated = true
    
    nodetimes[K] = 0, nodetimes[0] = 0
    for (let i = 1; i <= N && updated; i++){ // i guess to propagate the answer over every node if theyre far away
        updated = false
        for (let [source,target,time] of times){
            if ( nodetimes[source] === Infinity) continue
            if (nodetimes[target] > nodetimes[source]+time){
                nodetimes[target] = nodetimes[source] + time
                updated = true
            }
        }
    }
    let answer = Math.max(...nodetimes) 
    return answer!== Infinity ? answer : -1
    
};


