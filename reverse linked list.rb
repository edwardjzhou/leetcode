# 206. Reverse Linked List
# Easy

# 3056

# 74

# Favorite

# Share
# Reverse a singly linked list.

# Example:

# Input: 1->2->3->4->5->NULL
# Output: 5->4->3->2->1->NULL
# Follow up:

# A linked list can be reversed either iteratively or recursively. Could you implement both?

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
    answer=[nil]
    while head != nil
        answer.unshift(head)
        head = head.next
    end
    
    i = 0
    while i < answer.length - 1
        answer[i].next = answer[i+1]
        i += 1
    end
    return answer[0]
end

#Runtime: 36 ms, faster than 69.60% of Ruby online submissions for Reverse Linked List.
