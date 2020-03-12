// 328. Odd Even Linked List
// Medium

// 1241

// 269

// Add to List

// Share
// Given a singly linked list, group all odd nodes together followed by the even nodes.Please note here we are talking about the node number and not the value in the nodes.

// You should try to do it in place.The program should run in O(1) space complexity and O(nodes) time complexity.

//     Example 1:

// Input: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
// Output: 1 -> 3 -> 5 -> 2 -> 4 -> NULL
// Example 2:

// Input: 2 -> 1 -> 3 -> 5 -> 6 -> 4 -> 7 -> NULL
// Output: 2 -> 3 -> 6 -> 7 -> 1 -> 5 -> 4 -> NULL
// Note:

// The relative order inside both the even and odd groups should remain as it was in the input.
// The first node is considered odd, the second node even and so on ...

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

var oddEvenList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let counter = 1

    const savedeven = head.next
    const savedodd = head
    let firstodd = head
    let firsteven = head.next
    while (firstodd.next.next) { //there exists ANOTHER odd.. MIGHT be another even even if fail
        firstodd.next = firstodd.next.next
        firstodd = firstodd.next
        if (!firsteven.next.next) {
            firsteven.next = null
            // console.log(head)
            // console.log(head.next)
            // console.log(firsteven)
            console.log(savedeven)
            firstodd.next = savedeven
            return head
        }
        // console.log(firsteven)
        firsteven.next = firsteven.next.next
        // console.log(firsteven)
        firsteven = firsteven.next
        // console.log(firsteven)
    }
    firsteven.next = null
    firstodd.next = savedeven
    return head
}