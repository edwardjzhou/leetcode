// 1302. Deepest Leaves Sum
// Medium

// 325

// 23

// Add to List

// Share
// Given a binary tree, return the sum of values of its deepest leaves.
 

// Example 1:



// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15
 

// Constraints:

// The number of nodes in the tree is between 1 and 10^4.
// The value of nodes is between 1 and 100.
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
var deepestLeavesSum = function(root) {
    
    let currentqueue = [root]
    let newqueue = []
    let answer
    
    while (currentqueue.length) {
        answer = 0
        for (let ele of currentqueue) {
            answer += ele.val
            if (ele.left) newqueue.push(ele.left)
            if (ele.right) newqueue.push(ele.right)

        }
        [currentqueue, newqueue] = [newqueue, []]

    }
    return answer
};