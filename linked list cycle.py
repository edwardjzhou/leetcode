# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
# #         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        been_here = {}
        while head != None:
            if been_here.get(id(head),False):
                return True
            else:
                been_here[id(head)] = True
                head = head.next
            
