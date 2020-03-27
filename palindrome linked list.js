// 234. Palindrome Linked List
// Easy

// 2545

// 329

// Add to List

// Share
// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// I THINK THIS IS O(N) TIME AND O(1) SPACE?
// 2 tricks: reverse up to mid and the fast slow pointer to find mid
var isPalindrome = function(head) {
    if (!head || !head.next) return true
    let slow = head
    let fast = head
    let previous = null
    let temp
    while(fast && fast.next){
        fast = fast.next.next
        temp = slow.next
        slow.next = previous
        previous = slow
        slow = temp
    }
    if (!fast){ //mustve been even total
        while(previous){
            if(slow.val !== previous.val) return false
            slow = slow.next
            previous = previous.next
        }        
    } else { //odd total
        slow = slow.next
        while(previous){
            if(slow.val !== previous.val) return false
            slow = slow.next
            previous = previous.next
        }
            
    }

    return true
};

// [1,2,3,4]
// ListNode { val: 1, next: null }
// ListNode { val: 2, next: ListNode { val: 1, next: null } }
// ListNode { val: 3, next: ListNode { val: 4, next: null } }

// [1,2,3,4,5]
// ListNode { val: 1, next: null }
// ListNode { val: 2, next: ListNode { val: 1, next: null } }
// ListNode {
//   val: 3,
//   next: ListNode { val: 4, next: ListNode { val: 5, next: null } } }

