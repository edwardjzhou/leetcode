// 993. Cousins in Binary Tree
// Easy

// 460

// 29

// Add to List

// Share
// In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

// Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

// We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

// Return true if and only if the nodes corresponding to the values x and y are cousins.

 

// Example 1:


// Input: root = [1,2,3,4], x = 4, y = 3
// Output: false
// Example 2:


// Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
// Output: true
// Example 3:



// Input: root = [1,2,3,null,4], x = 2, y = 3
// Output: false
 

// Note:

// The number of nodes in the tree will be between 2 and 100.
// Each node has a unique integer value from 1 to 100.
 


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let level = []
    let queue = [[root,null]]
    let length
    while(queue.length > 0){
        length = queue.length
        for (let i = 0; i < length; i++){
            let pair = queue.shift()
            let node = pair[0]
            let parent = pair[1]
            if (node.left) queue.push([node.left, node])
            if (node.right) queue.push([node.right, node])
            level.push([node.val, parent] )
        }
        console.log(level)
        let xtrack = false
        let ytrack = false
        for (let [value, parentbro] of level){

            if (value === x) xtrack = true, parent1 = parentbro
            if (value === y) {ytrack = true; parent2 = parentbro;}
             if(ytrack === true && xtrack===true && parent1 != parent2)return true
        }
        
        level = []
    }
    return false
    
    
};