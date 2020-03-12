// 19. Remove Nth Node From End of List
// Medium

// 2671

// 194

// Add to List

// Share
// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let scout = new ListNode(null)
    scout.next = head

    let slow = new ListNode(null)
    let answer = slow
    slow.next = head

    for (let i = 0; i <= n; i++) {
        scout = scout.next
    }

    while (scout) {
        scout = scout.next
        slow = slow.next
    }
    slow.next = slow.next.next // skip slow.next; in other words go from slow -> slow.next.next
    return answer.next

};

