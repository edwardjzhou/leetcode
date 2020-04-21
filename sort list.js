// 48. Sort List
// Medium

// 2292

// 116

// Add to List

// Share
// Sort a linked list in O(n log n) time using constant space complexity.

//     Example 1:

// Input: 4 -> 2 -> 1 -> 3
// Output: 1 -> 2 -> 3 -> 4
// Example 2:

// Input: -1 -> 5 -> 3 -> 4 -> 0
// Output: -1 -> 0 -> 3 -> 4 -> 5
// Accepted
// 242, 520
// Submissions
// 603, 363
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// Profundity: cut off every middle by setting its next to null; otherwise its boilerplate merge

function sortList(head){
    // mid trails slow after the while loop 
    if (!head || !head.next) return head
    let left
    let right
    let mid = head
    let fast = head
    let slow = head
    //1, 2, 3 fast = 3, slow = 2, mid = 1
    while (fast && fast.next) {
        mid = slow
        fast = fast.next.next
        slow = slow.next
    }
    mid.next = null
    
    left = sortList(head)
    right = sortList(slow)
    return merge(left,right)
}


function merge(left,right){
    let sorted = new ListNode(0)
    let current = sorted
    while (left != null && right != null) {
        if (left.val > right.val) {
            current.next = right
            right = right.next
        } else {
            current.next = left
            left = left.next
        }
        current = current.next
    }
    
    if (left != null) {
        current.next = left
        left = left.next
    } 
    if (right != null ) {
        current.next = right
        right = right.next
    }
        console.log(left,right, current)

    return sorted.next
    
}


  