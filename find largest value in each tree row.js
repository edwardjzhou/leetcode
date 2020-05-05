// 515. Find Largest Value in Each Tree Row
// Medium

// 740

// 57

// Add to List

// Share
// You need to find the largest value in each row of a binary tree.

//     Example:
// Input:

// 1
//     / \
// 3   2
//     / \   \
// 5   3   9

// Output: [1, 3, 9]
// Accepted
// 89, 577
// Submissions
// 148, 840
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let queue = root !== null ? [root] : []
    const answer = []
    while (queue.length) {
        let best = -Infinity
        const newQueue = []
        for (const node of queue) {
            best = Math.max(best, node.val)
            if (node.left) newQueue.push(node.left)
            if (node.right) newQueue.push(node.right)
        }
        answer.push(best)
        queue = newQueue
    }
    
    return answer
    
};