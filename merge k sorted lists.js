// 23. Merge k Sorted Lists
// Hard

// 4148

// 261

// Add to List

// Share
// Merge k sorted linked lists and return it as one sorted list.Analyze and describe its complexity.

//     Example:

// Input:
// [
//     1 -> 4 -> 5,
//     1 -> 3 -> 4,
//     2 -> 6
// ]
// Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// merge sort but with lists instead of subarrays

var mergeKLists = function(lists) {
    if (lists.length === 0) return null
    if (lists.length === 1) return lists[0]
    const mid = lists.length >> 1
    const left = mergeKLists(lists.slice(0, mid))
    const right = mergeKLists(lists.slice(mid))
    return merge(left, right)  
    
    //[1,2,3,4,5,6,7,8] n=8 n log k
    // [1,2,3,4], [5,6,7,8] 1 more merge,  involving 8 elements for total of n elements
    // [1,2] [3,4] [5,6] [7,8] 2 more merges, each involving 4 elements for total of n elements
    // [1] [2] [3] [4] [5] [6] [7] [8] 4 merges, each involving 2 elements for total of n elements
};

function merge(left, right) {
    let dummy = new ListNode(null)
    const answer = dummy
    while (left && right) {
        if (left.val < right.val) {
            dummy.next = left
            dummy = dummy.next
            left = left.next
        } else {
            dummy.next = right
            dummy = dummy.next
            right = right.next
        }
    }

    if (!left) {
        dummy.next = right
    } else {
        dummy.next = left
    }

    return answer.next
}

