// 138. Copy List with Random Pointer
// Medium

// 3014

// 648

// Add to List

// Share
// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//liaison solution
// 1. Iterate the original list and duplicate each node. The duplicate
// of each node follows its original immediately.
// 2.Iterate the new list and assign the random pointer for each
// duplicated node.
// 3.Restore the original list and extract the duplicated nodes.
// ingenius way to get a way to know where the random reference is
var copyRandomList = function(head) {
    if (!head) return head
    
    let current = head
    while (current) {
        // let duplicate = Object.assign({},current) // this kind of takes away from the point 
        let duplicate = new Node(current.val, current.next)
        current.next = duplicate
        current = current.next.next
    }
    
    current = head
    while (current) {
        if (current.random) {
            current.next.random = current.random.next
        }
        current = current.next.next
    }
    
    
    let original = head // originals
    current = head.next // dupes
    const answer = head.next //first dupe
    while (current && current.next) { // if we're doing while dupes.. then the original is guaranteed to be behind it we can do them both pairwise
        original.next = current.next // restoring originals' pointers
        current.next = current.next.next // connecting dupes to other dupes
        
        current = current.next
        original = original.next
    }
    
    original.next = original.next.next // off by 1 for the last original since we end while loop after the seocnd to last dupe connects to last dupe. the last original is still pointing to the last dupe
    
    return answer
    
    
};