// 2. Add Two Numbers
// Medium

// 7503

// 1940

// Add to List

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    const dummy = new ListNode(0)
    let current = dummy
    let value
    while (l1 || l2 || carry) {
        current.next = new ListNode(0)
        current = current.next
        value = 0
        
        if (l1){
            value += l1.val
            l1 = l1.next
        }
        
        if (l2){
            value += l2.val
            l2 = l2.next
        }
        
        if(carry){
            value += carry
        }
       
        if (value >= 10) {
            carry = 1
        } else {
            carry = 0
        }
        current.val = value % 10

    }
    return dummy.next
};