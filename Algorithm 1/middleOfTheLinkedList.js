/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 876. Middle of the Linked List
 * 
 * Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
 * 
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    let mid = head;
    let end = head;
    while(end){
        if(!end.next){
            return mid;
        }
        end = end.next.next;
        mid = mid.next;
    } return mid;
};