21. Merge Two Sorted Lists
Easy

3638

541

Add to List

Share
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4


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



// function mergeTwoLists (l1, l2) {
//     if (l1 && l2) {
//         if (l1.val < l2.val) {
//             l1.next = mergeTwoLists(l1.next, l2)
//             return l1
//         } else {
//             l2.next = mergeTwoLists(l1, l2.next)
//             return l2
//         }
//     }
//     return l1 || l2
    
// }

let mergeTwoLists = function (l1,l2) {
    let answer = new ListNode(null)
    let superanswer = answer
    
    while (l1 && l2){
        if (l1.val < l2 . val) {
            answer = answer.next = l1
            l1 = l1.next
        } else {
            answer =answer.next = l2
            l2 = l2.next
        }
    }

    if (l1) {
        answer.next = l1
        l1 = l1.next
        answer = answer.next
    }
    if (l2) {
        answer.next = l2
        l2 = l2.next
        answer = answer.next
    }
    return superanswer.next
};
