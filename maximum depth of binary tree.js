// 104. Maximum Depth of Binary Tree
// Easy

// 2145

// 66

// Add to List

// Share
// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//.  1
// 2    3
var maxDepth = function(root, depth = 0) {
    if (!root) return depth
    depth += 1
    return Math.max(maxDepth(root.left, depth), maxDepth(root.right, depth))
    
};