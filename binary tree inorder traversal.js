4. Binary Tree Inorder Traversal
Medium

2656

116

Add to List

Share
Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1, null, 2, 3]
1
\
2
    /
    3

Output: [1, 3, 2]
Follow up: Recursive solution is trivial, could you do it iteratively ?

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
var inorderTraversal = function(root) {
    const stack = [root]
    while (stack.length) {
        let current = stack.pop()
        if (current.right) stack.push(current.right)
        stack.push(current)
        if (current.left) stack.push(current.left)
    }
    
    
    
    
    // if (!root) return []
    // let left = inorderTraversal(root.left)
    // let right = inorderTraversal(root.right)
    // return [...left, root.val, ...right]
    
    
    
    
//     const answer = []
//     const stack = []
//     let current = root
//     // go as left as possible until there is no left child
//     // then look into that stack for something with a right
    
//     while (stack.length || current) {
//         if (current) {
//             stack.push(current)
//             current = current.left
//         } else  {
//             current = stack.pop()
//             answer.push(current.val)
//             current = current.right
//         }
            
        
//     }
//     return answer
};