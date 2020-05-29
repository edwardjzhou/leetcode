// 206. Reverse Linked List
// Easy

// 4170

// 85

// Add to List

// Share
// Reverse a singly linked list.

//     Example:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 5 -> 4 -> 3 -> 2 -> 1 -> NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively.Could you implement both ?


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1->2->null becomes  null <- 1 <- 2

var reverseList = function(head) {
    let previous = null
    while (head) {
        let temp = head.next
        head.next = previous        
        previous = head
        head = temp
    }
    return previous
    
};

// 1->2->3-> null
// becomes go to end aka 3 and return 3 w/o side effects
// then inside 2's stack frame say: 2.next aka 3's next is 2 AND 2.next is now null to prepare for 1 -> null
// return the endhead at every frame so it reaches the originalhead's frame
//recursive is weird because you thread the end all the way to the front
//other than that just start from end-1 and point your original next to yourslef
//to make sure original first node doesnt point to its original next you have to set all original.next = nulls

// var reverseList = (node) => {
//     if (!node || !node.next) return node
//     let end = reverseList(node.next)
//     node.next.next = node
//     node.next = null
//     return end
// }
