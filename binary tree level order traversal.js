// 102. Binary Tree Level Order Traversal
// Medium

// 2383

// 62

// Add to List

// Share
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
// Accepted
// 531,697
// Submissions
// 1,013,362
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return []
    let queue = [root]
    let current
    let level = []
    let length
    let answer = []
    while (queue.length > 0){
        length = queue.length
        for (let i = 0; i < length; i++){
            current = queue.shift()
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)        
            level.push(current.val)
        }
        answer.push(level)
        level = []
    }
    return answer
};
