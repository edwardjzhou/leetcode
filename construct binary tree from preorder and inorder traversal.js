105. Construct Binary Tree from Preorder and Inorder Traversal
Medium

2802

80

Add to List

Share
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// someone elses ingenius answer to divide it up
// trick: the preorder is the root and stuff left of it in the inorder is part of its left node
// then go into the root of that left node
// had trouble with handling the early return break... it stops when the inorder node is a null duh

var buildTree = function(preorder, inorder) {
    if (!inorder.length) return null
    const current = preorder.shift()
    const splitter = inorder.findIndex((ele) => ele === current)
    const root = new TreeNode(current)
    const left = buildTree(preorder, inorder.slice(0, splitter))
    const right = buildTree(preorder, inorder.slice(splitter+1))
    root.left = left
    root.right = right
    return root
    
    
};


