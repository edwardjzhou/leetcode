// 145. Binary Tree Postorder Traversal
// Hard

// 1463

// 78

// Add to List

// Share
// Given a binary tree, return the postorder traversal of its nodes' values.

// Example:

// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// Output: [3,2,1]
// Follow up: Recursive solution is trivial, could you do it iteratively?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
//     if (!root) return []
//     let left = postorderTraversal(root.left)
//     let right = postorderTraversal(root.right)
//     return [...left, ... right, root.val]
    
    let answer = []
    let stack = root ? [root] : []
    while (stack.length) {
        let current = stack.pop()
        if (typeof current.val !== "undefined") {
            stack.push(current.val)
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
        } else {
            answer.push(current)
        }
    }
    
    return answer
};
        