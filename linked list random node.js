// 382. Linked List Random Node
// Medium

// 517

// 152

// Add to List

// Share
// Given a singly linked list, return a random node's value from the linked list. Each node must have the same probability of being chosen.

// Follow up:
// What if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?

// Example:

// Init a singly linked list [1,2,3].
// ListNode head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// Solution solution = new Solution(head);

// // getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.
// solution.getRandom();
var Solution = function(head) {
    this.head = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */
// special case of k = 1 O(n) time reservoir sampling per wikipedia prob 1 1/2 1/3 etc so #1,#2,#3 have 33% each prob of being the answer
Solution.prototype.getRandom = function() {
    let counter = 0
    let answer 
    let current = this.head
    while (current) {
        counter++
        if (Math.random() < (1/counter)) {
            answer = current.val
        }
        current = current.next

    }
    return answer
};