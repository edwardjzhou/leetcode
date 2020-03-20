// 207. Course Schedule
// Medium

// 2967

// 150

// Add to List

// Share
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0, 1]

// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses ?



//     Example 1:

// Input: numCourses = 2, prerequisites = [[1, 0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.
//     Example 2:

// Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should
// also have finished course 1. So it is impossible.


//     Constraints:

// The input prerequisites is a graph represented by a list of edges, not adjacency matrices.Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.
// 1 <= numCourses <= 10 ^ 5
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


function canFinish(numCourses,prerequisites){
    let set = new Set()
    let safeset = new Set()
    let array = new Array(numCourses).fill(null).map(blank => [])
    
    for ( [course,req] of prerequisites){
        array[req].push(course)
    }
    for ( let i = 0; i < numCourses; i++ ){
        if (!dfs(i)) return false
    }
    
    return true
    
    function dfs (num) { // would i happen to ever DEPEND on something that DEPENDS on me; can you (depender(s)) get to me (such that i become a depender of my depender then its a cycle and we're FINISHED)
        if (set.has(num)) return false
        if (safeset.has(num)) return true
        set.add (num)
        for (let dependency of array[num]){
            if (!dfs(dependency)) return false
        }
        set.delete (num)
        safeset.add (num)
        return true
        
    }
    
}


