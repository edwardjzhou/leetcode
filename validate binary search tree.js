// 98. Validate Binary Search Tree
// Medium

// 3182

// 452

// Add to List

// Share
// Given a binary tree, determine if it is a valid binary search tree(BST).

// Assume a BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


//     Example 1:

// 2
//     / \
// 1   3

// Input: [2, 1, 3]
// Output: true
// Example 2:

// 5
//     / \
// 1   4
//     / \
// 3   6

// Input: [5, 1, 4, null, null, 3, 6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root, minimum = -Infinity, maximum = Infinity) {

    if (!root) return true
    let value = root.val
    if (value >= maximum) return false
    if (value <= minimum) return false
    if (isValidBST(root.left, minimum, value) && isValidBST(root.right, value, maximum)) return true
    return false
};